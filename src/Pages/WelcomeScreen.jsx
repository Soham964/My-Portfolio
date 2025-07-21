import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Github, Globe, User } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const FunkyLoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.random() * 15 + 5; // Random increment for funky effect
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Loading Text */}
      <div className="text-center mb-4">
        <span className="text-lg sm:text-xl bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-medium">
          Loading Portfolio... {Math.round(progress)}%
        </span>
      </div>
      
      {/* Main Progress Bar */}
      <div className="relative">
        {/* Background Bar */}
        <div className="h-3 bg-gray-800/50 rounded-full border border-white/10 backdrop-blur-sm overflow-hidden">
          {/* Progress Fill */}
          <motion.div
            className="h-full rounded-full relative overflow-hidden"
            style={{
              background: `linear-gradient(90deg, 
                #10b981 0%, 
                #06b6d4 50%, 
                #10b981 100%)`,
              backgroundSize: '200% 100%',
            }}
            initial={{ width: 0 }}
            animate={{ 
              width: `${Math.min(progress, 100)}%`,
              backgroundPosition: ['0% 0%', '100% 0%']
            }}
            transition={{ 
              width: { duration: 0.3, ease: "easeOut" },
              backgroundPosition: { duration: 2, repeat: Infinity, ease: "linear" }
            }}
          >
            {/* Animated Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer" />
          </motion.div>
        </div>
        
        {/* Glow Effect */}
        <div 
          className="absolute -inset-1 rounded-full blur-sm opacity-50 transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, #10b981, #06b6d4)`,
            width: `${Math.min(progress, 100)}%`,
          }}
        />
      </div>
      
      {/* Fun Loading Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 blur-3xl animate-pulse" />
    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/10 via-transparent to-cyan-600/10 blur-2xl animate-float" />
  </div>
);

const IconButton = ({ Icon }) => (
  <div className="relative group hover:scale-110 transition-transform duration-300">
    <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
    <div className="relative p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
    </div>
  </div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1000);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#030014]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          <BackgroundEffect />

          <div className="relative min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-4xl mx-auto">
              {/* Icons */}
              <motion.div
                className="flex justify-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8 md:mb-12"
                variants={childVariants}
              >
                {[Code2, User, Github].map((Icon, index) => (
                  <div
                    key={index}
                    data-aos="fade-down"
                    data-aos-delay={index * 200}
                  >
                    <IconButton Icon={Icon} />
                  </div>
                ))}
              </motion.div>

              {/* Welcome Text */}
              <motion.div
                className="text-center mb-6 sm:mb-8 md:mb-12"
                variants={childVariants}
              >
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold space-y-2 sm:space-y-4">
                  <div className="mb-2 sm:mb-4">
                    <span
                      data-aos="fade-right"
                      data-aos-delay="200"
                      className="inline-block px-2 bg-gradient-to-r from-white via-emerald-100 to-cyan-200 bg-clip-text text-transparent"
                    >
                      Welcome
                    </span>{" "}
                    <span
                      data-aos="fade-right"
                      data-aos-delay="400"
                      className="inline-block px-2 bg-gradient-to-r from-white via-emerald-100 to-cyan-200 bg-clip-text text-transparent"
                    >
                      To
                    </span>{" "}
                    <span
                      data-aos="fade-right"
                      data-aos-delay="600"
                      className="inline-block px-2 bg-gradient-to-r from-white via-emerald-100 to-cyan-200 bg-clip-text text-transparent"
                    >
                      My
                    </span>
                  </div>
                  <div>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="800"
                      className="inline-block px-2 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent"
                    >
                      Portfolio
                    </span>
                  </div>
                </h1>
              </motion.div>

              {/* Funky Loading Bar */}
              <motion.div
                className="flex justify-center"
                variants={childVariants}
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                <FunkyLoadingBar />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
