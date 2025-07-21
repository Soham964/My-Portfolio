import React, { useEffect, useState, useCallback } from "react";
import { db, collection } from "../firebase";
import { getDocs } from "firebase/firestore";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";

// Separate ShowMore/ShowLess button component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", language: "Python" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", language: "Java" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", language: "C" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", language: "MongoDB" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", language: "PostgreSQL" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", language: "Docker" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", language: "AWS" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", language: "Kubernetes" },
];

const staticCertificates = [
  {
    id: "cert1",
    Title: "My Coursera Certificate",
    PDF: "/My_Certificate_1.pdf", // Path to your PDF in the public folder
    Link: "https://coursera.org/share/0ea2d24072daeb249f2a357c6212cb92",
    Description: "Successfully completed the AWS Fundamentals Specialization, gaining proficiency in essential AWS cloud concepts, services, security, and strategies for migrating and deploying applications. This specialization included courses on AWS Cloud Technical Essentials, Migrating to the AWS Cloud, and Architecting Solutions on AWS.",
    Date: "June 2025"
  },
  {
    id: "cert2",
    Title: "My_Certificate_2",
    PDF: "/My_Certificate_2.pdf", // Placeholder: assuming you will upload this PDF
    Link: "https://coursera.org/share/88ed2334c45f25f741b28e82ae211ef1",
    Description: "Completed 'Supervised Machine Learning: Regression' from IBM, covering predictive modeling, regression analysis, feature engineering, and various machine learning algorithms. Gained skills in Performance Metrics, Scikit Learn, Statistical Modeling, and Classification and Regression Trees.",
    Date: "June 2025"
  },
  {
    id: "cert3",
    Title: "My_Certificate_3",
    PDF: "/My_Certificate_3.pdf", // Placeholder: assuming you will upload this PDF
    Link: "https://coursera.org/share/6d2888e339a86c3e4be0a92e5c530936",
    Description: "Completed 'Foundations of Cybersecurity' from Google, covering core skills and knowledge for cybersecurity analysts, security ethics, and common tools. Gained skills in Security Management, Cyber Attacks, Data Ethics, and Incident Response.",
    Date: "March 2025"
  },
  {
    id: "cert4",
    Title: "Introduction to the Internet of Things and Embedded Systems",
    PDF: "/My_Certificate_4.pdf", // Placeholder: assuming you will upload this PDF
    Link: "https://coursera.org/share/69fe73e0ffc4daf0ada45c09380ee423",
    Description: "Successfully completed 'Introduction to the Internet of Things and Embedded Systems' from the University of California, Irvine. Gained skills in Emerging Technologies, IoT, Embedded Systems, Computer Hardware, Operating Systems, Wireless Networks, and Network Protocols.",
    Date: "March 2023"
  },
  {
    id: "cert5",
    Title: "Exploratory Data Analysis for Machine Learning",
    PDF: "/My_Certificate_5.pdf", // Placeholder: assuming you will upload this PDF
    Link: "https://coursera.org/share/398f30d9fea8137daf5d45a6e806aed1",
    Description: "Completed 'Exploratory Data Analysis for Machine Learning' from IBM, focusing on data analysis, manipulation, quality, and statistical methods. Gained skills in Probability & Statistics, Hypothesis Testing, and using Pandas with Jupyter for EDA in Machine Learning.",
    Date: "January 2023"
  },
  {
    id: "cert6",
    Title: "Introduction to Artificial Intelligence (AI)",
    PDF: "/My_Certificate_6.pdf", // Placeholder: assuming you will upload this PDF
    Link: "https://coursera.org/share/e922456242bd55b39d61a3e52dd0a909",
    Description: "Completed 'Introduction to Artificial Intelligence (AI)' from IBM, covering fundamental AI concepts, machine learning, deep learning, neural networks, and generative AI applications, including ethical considerations.",
    Date: "January 2023"
  },
  {
    id: "cert7",
    Title: "Full Stack Web Development",
    PDF: "/My_Certificate_77.pdf", // Placeholder: assuming you will upload this PDF
    Link: "", // No URL provided
    Description: "Successfully completed internship on Full Stack Web Development of 60 hours from 01/01/2025 to 30/03/2025. During the training and internship the student was found hardworking, dedicated and diligent.",
    Date: "February 2023"
  },
  {
    id: "cert8",
    Title: "SMART Maker Festival 2023 Participation",
    PDF: "/My_Certificate_8.pdf", // Placeholder: assuming you will upload this PDF
    Link: "", // No URL provided
    Description: "Participation in SMART Maker Festival 2023, organized by Society for Makers, Artists, Researchers & Technologists at IEM Management House from 14th January to 15th January 2023.",
    Date: "January 2023"
  },
  {
    id: "cert9",
    Title: "SMART SOCIETY CERTIFICATE OF COURSE COMPLETION",
    PDF: "/My_Certificate_9.pdf", // Updated to use PDF file
    Link: "", // No URL provided
    Description: "Successfully completed the Smart Society Certificate of Course Completion for the Study Abroad Program on 'Artificial Intelligence, Internet of Things, Machine Learning & Data Analytics' - Fundamentals at National University of Singapore.",
    Date: "July 2023"
  }
];

export const staticProjects = [
  {
    id: "1",
    Title: "e-Commerce Website \"OREBI\"",
    Description: "A modern e-commerce platform built with React and Tailwind CSS, featuring product browsing, cart management, and secure checkout.",
    Img: "/projectimg.png",
    Link: "https://orebishopping.vercel.app/",
    Github: "https://github.com/SohamDatta/IPM--OREBI",
    TechStack: ["React", "Tailwind CSS", "JavaScript", "HTML"],
    Features: [
      "Product browsing and filtering",
      "Shopping cart management",
      "Secure checkout process",
      "Responsive design"
    ]
  },
  {
    id: "2",
    Title: "AI-Powered Linked-In Profile Auditor",
    Description: "This AI-based web application helps users audit their professional profiles, analyze grammar and clarity, and get improvement suggestions instantly.",
    Img: "/abc.png",
    Video: "/ProfileAuditor.mp4",
    Link: "https://ai-powered-profile-auditor-fb.streamlit.app/",
    Github: "https://github.com/SohamDatta/AI-Powered-Profile-Auditor",
    TechStack: ["Python", "MongoDB", "Streamlit", "OpenAI API", "PyPDF2", "Fake UserAgent"],
    Features: [
      "Real-time grammar and writing analysis using LanguageTool.",
      "Actionable insights to polish your professional presence.",
      "Resume & Cover Letter Generator — create job-ready documents in seconds",
      "Clean and responsive user interface",
      "Fully deployed on Streamlit Cloud"
    ]
  },
  {
    id: "3",
    Title: "Agent77",
    Description:
      "Full-stack intelligent HR assistant that automates and simplifies the entire hiring pipeline—from sourcing to interview scheduling—using AI agents and modern web tech.",
    Img: "/AgentX_phto.png",
    Video: "/AgentX_video.mp4",
    Link: "#",
    Github: "https://github.com/SohamDatta/AI-HR-Assistant",
    TechStack: ["React", "MongoDB", "Tailwind CSS", "NodeJS", "JWT", "Nodemon", "Firebase Authentication", "Ollama", "PyPDF2"],
    Features: [
      "Sourcing Agent – finds and filters talent from platforms",
      "Screening Agent – evaluates CVs and matches them with job descriptions",
      "Engagement Agent – updates candidates with progress & feedback",
      "Scheduling Agent – auto-books interview slots",
      "Main Bot – orchestrates all agents, handles logic & interactions"
    ]
  },
  {
    id: "9",
    Title: "My_Certificate_9",
    Description: "A comprehensive certification project showcasing advanced skills in web development and modern technologies. This project demonstrates expertise in building scalable and efficient web applications.",
    Img: "/projectimg.png",
    Link: "",
    Github: "",
    TechStack: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
    Features: [
      "Modern web application architecture",
      "Responsive and interactive user interface",
      "Secure authentication system",
      "Real-time data processing",
      "Scalable backend infrastructure"
    ]
  }
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects] = useState(staticProjects);
  const [certificates, setCertificates] = useState(staticCertificates);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = 3; // Always show only 3 projects
  const initialCertificates = 3;

  useEffect(() => {
    // Initialize AOS once with smoother settings
    AOS.init({
      once: true, // Only animate once
      duration: 800, // Shorter duration
      easing: 'ease-out-cubic', // Smoother easing
      offset: 50, // Start animation earlier
      delay: 0, // No delay between items
      disable: 'mobile' // Disable on mobile for better performance
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback((type) => {
    if (type === 'certificates') {
      setShowAllCertificates(prev => !prev);
    }
  }, []);

  const displayedProjects = projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, initialCertificates);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      {/* Header section - unchanged */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#06b6d4]">
          <span style={{
            color: '#10b981',
            backgroundImage: 'linear-gradient(45deg, #10b981 10%, #06b6d4 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise. 
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* AppBar and Tabs section - unchanged */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          {/* Tabs remain unchanged */}
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              // Existing styles remain unchanged
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={index * 100}
                    data-aos-easing="ease-out-cubic"
                  >
                    <CardProject
                      Img={project.Img}
                      Video={project.Video}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                {displayedCertificates.map((certificate, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={index * 100}
                    data-aos-easing="ease-out-cubic"
                  >
                    <Certificate certificate={certificate} />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > initialCertificates && (
              <div className="mt-8 flex justify-center">
                <ToggleButton
                  onClick={() => toggleShowMore('certificates')}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 lg:gap-8 gap-5 justify-items-center">
                {techStacks.map((stack, index) => (
                  <div
                    key={index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}