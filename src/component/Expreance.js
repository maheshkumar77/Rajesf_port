import React, { useRef } from 'react';
import { expriancedata } from "../data/data";
import { CiLocationOn } from "react-icons/ci";
import { motion, useInView } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      },
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(79, 70, 229, 0.1), 0 10px 10px -5px rgba(79, 70, 229, 0.04)",
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const locationVariants = {
    normal: {
      x: 0,
      rotateY: 0,
      background: "transparent",
    },
    hover: {
      x: 8,
      rotateY: 180,
      background: "linear-gradient(135deg, rgba(224, 231, 255, 0.9) 0%, rgba(199, 210, 254, 0.9) 100%)",
      padding: "0.5rem 1.2rem",
      borderRadius: "999px",
      boxShadow: "0 4px 14px -2px rgba(79, 70, 229, 0.25)",
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ x: -100, y: -100, opacity: 0.3 }}
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          className="absolute -left-40 -top-40 w-80 h-80 rounded-full bg-indigo-200/40 blur-3xl"
        />
        <motion.div 
          initial={{ x: 100, y: 100, opacity: 0.3 }}
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
            delay: 5
          }}
          className="absolute -right-40 -bottom-40 w-80 h-80 rounded-full bg-blue-200/40 blur-3xl"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3">
            My <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Professional Journey</span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="w-32 h-1.5 bg-gradient-to-r from-indigo-400 to-blue-400 mx-auto rounded-full"
          />
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:gap-10"
        >
          {expriancedata.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              custom={index}
              className="group relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden border border-white/30 hover:border-indigo-100/60 transition-all duration-300"
            >
              {/* Timeline indicator with animation */}
              <motion.div 
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-indigo-400 to-blue-400 origin-top"
              />
              
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                      {item.palce}
                    </h3>
                    <motion.p 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-sm md:text-base text-gray-500 mt-1"
                    >
                      {item.stdate} — {item.enddate}
                    </motion.p>
                  </div>
                  
                  <motion.div 
                    className="flex items-center text-gray-600 cursor-pointer"
                    variants={locationVariants}
                    initial="normal"
                    whileHover="hover"
                  >
                    <CiLocationOn className="mr-2 text-indigo-500 text-xl md:text-2xl" />
                    <span className="font-medium text-gray-700 md:text-lg">{item.location}</span>
                  </motion.div>
                </div>
                
                <ul className="space-y-3 md:space-y-4 pl-2">
                  {item.achivment.map((ach, achIndex) => (
                    <motion.li 
                      key={achIndex} 
                      className="flex items-start"
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={index + achIndex}
                    >
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-3 mt-0.5 rounded-full bg-indigo-100 text-indigo-800 text-sm font-semibold flex-shrink-0 group-hover:bg-indigo-200 group-hover:text-indigo-900 transition-colors">
                        {achIndex+1}
                      </span>
                      <span className="text-gray-700 leading-relaxed md:text-lg">{ach}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;