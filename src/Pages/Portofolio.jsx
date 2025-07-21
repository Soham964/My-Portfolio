import React, { useEffect, useState, useCallback } from "react";
import { db, collection } from "../firebase";
import { getDocs } from "firebase/firestore";
import PropTypes from "prop-types";
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
    Title: "Google Cybersecurity Professional Certificate",
    PDF: "/GOOGLE_CYBER.pdf",
    Link: "",
    Description: "Google Cybersecurity Professional Certificate covering essential cybersecurity skills including threat detection, incident response, risk management, and network security. Comprehensive training in cybersecurity frameworks, tools, and best practices.",
    Date: "2025"
  },
  {
    id: "cert2",
    Title: "Google Generative AI Certificate",
    PDF: "/GOOGLE_GENAI.pdf",
    Link: "",
    Description: "Google Generative AI Certificate focusing on modern AI technologies, large language models, prompt engineering, and responsible AI development. Covers practical applications of generative AI in real-world scenarios.",
    Date: "2025"
  },
  {
    id: "cert3",
    Title: "IBM Artificial Intelligence Certificate",
    PDF: "/IBM_AI.pdf",
    Link: "",
    Description: "IBM Artificial Intelligence Certificate covering machine learning fundamentals, neural networks, deep learning frameworks, and AI application development. Comprehensive training in AI tools and methodologies.",
    Date: "2024"
  },
  {
    id: "cert4",
    Title: "IBM DevOps Certificate",
    PDF: "/IBM_DEVOPS.pdf",
    Link: "",
    Description: "IBM DevOps Certificate focusing on continuous integration/continuous deployment, containerization, infrastructure automation, and modern software development practices. Covers Docker, Kubernetes, and cloud deployment strategies.",
    Date: "2024"
  },
  {
    id: "cert5",
    Title: "IBM Machine Learning Certificate",
    PDF: "/IBM_ML.pdf",
    Link: "",
    Description: "IBM Machine Learning Certificate covering supervised and unsupervised learning, regression analysis, classification algorithms, model evaluation, and data preprocessing techniques. Practical experience with Python and ML libraries.",
    Date: "2024"
  },
  {
    id: "cert6",
    Title: "Introduction to Generative AI",
    PDF: "/IntroToGENAI.pdf",
    Link: "",
    Description: "Comprehensive introduction to Generative Artificial Intelligence, covering transformer architectures, natural language processing, image generation, and ethical considerations in AI development.",
    Date: "2024"
  },
  {
    id: "cert7",
    Title: "University of Calcutta Certificate",
    PDF: "/UOC.pdf",
    Link: "",
    Description: "University of Calcutta academic certificate demonstrating successful completion of coursework in computer science and technology. Recognized qualification from one of India's premier educational institutions.",
    Date: "2024"
  }
];

export const staticProjects = [
  {
    id: "1",
    Title: "VillageStay",
    Description: "A comprehensive hotel booking platform that connects travelers with unique village accommodations, featuring real-time availability, secure payments, and personalized recommendations.",
    Img: "/VillageStay.jpg",
    Link: "https://villagestay.vercel.app/",
    Github: "https://github.com/SohamDatta/VillageStay",
    TechStack: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "Tailwind CSS"],
    Features: [
      "Real-time hotel availability and booking",
      "Secure payment gateway integration",
      "User authentication and profiles",
      "Responsive design for all devices",
      "Advanced search and filtering",
      "Personalized accommodation recommendations"
    ]
  },
  {
    id: "2",
    Title: "PizzaPal",
    Description: "A Java Swing GUI application designed for pizza ordering with dynamic cost calculation, comprehensive topping selection, and robust order processing system capable of handling high-volume transactions.",
    Img: "/PizzaPal.png",
    Video: "/ProfileAuditor.mp4",
    Link: "https://github.com/SohamDatta/PizzaPal",
    Github: "https://github.com/SohamDatta/PizzaPal",
    TechStack: ["Java", "JDBC", "Swing", "MySQL"],
    Features: [
      "Easy-to-use GUI for pizza size selection and 20+ toppings modification",
      "Real-time dynamic cost calculation and itemized billing",
      "High-performance order processing supporting up to 200 orders/minute",
      "JDBC integration with MySQL for storing 10,000+ order records",
      "Order history tracking and topping analytics",
      "90% improvement in order accuracy through enhanced cost calculations"
    ]
  },
  {
    id: "3",
    Title: "Agent77",
    Description:
      "Full-stack intelligent HR assistant that automates and simplifies the entire hiring pipeline—from sourcing to interview scheduling—using AI agents and modern web tech.",
    Img: "/AgentX_phto.png",
    Video: "/AgentX_video.mp4",
    Link: "https://www.linkedin.com/in/soham-datta/",
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

        {/* Tab Content */}
        <TabPanel value={value} index={0}>
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

        <TabPanel value={value} index={1}>
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

        <TabPanel value={value} index={2}>
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
      </Box>
    </div>
  );
}