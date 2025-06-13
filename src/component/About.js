import React from 'react';
import { motion } from 'framer-motion';
import { IoMdArrowRoundUp } from "react-icons/io";
import { FaHeartbeat, FaClinicMedical, FaStethoscope, FaSyringe, FaHospital } from "react-icons/fa";
import medicalTeam from '../images/im1.jpg'; // Replace with your medical image
import dnaAnimation from '../images/im3.jpg'; // Replace with DNA animation gif

const About = () => {
  const medicalIcons = [
    { icon: <FaHeartbeat />, color: "text-red-500", name: "Cardiology" },
    { icon: <FaClinicMedical />, color: "text-blue-400", name: "Clinic" },
    { icon: <FaStethoscope />, color: "text-green-400", name: "Diagnosis" },
    { icon: <FaSyringe />, color: "text-yellow-400", name: "Treatment" },
    { icon: <FaHospital />, color: "text-purple-400", name: "Hospital" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: (i) => ({
      scale: 1,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 200
      }
    }),
    hover: {
      y: -10,
      scale: 1.2,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-between py-12 px-4 md:px-8 overflow-hidden relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated DNA background */}
      <motion.div 
        className="absolute inset-0 opacity-10 z-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `url(${dnaAnimation})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat"
        }}
      />

      {/* Floating medical icons */}
      {[...Array(12)].map((_, i) => {
        const randomIcon = medicalIcons[Math.floor(Math.random() * medicalIcons.length)];
        return (
          <motion.div
            key={i}
            className={`absolute ${randomIcon.color} text-xl md:text-2xl z-10`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, (Math.random() - 0.5) * 50],
              rotate: [0, 360],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {randomIcon.icon}
          </motion.div>
        );
      })}

      {/* Title Section */}
      <motion.div 
        className="flex items-center justify-center gap-3 bg-white/80 backdrop-blur-md rounded-full px-8 py-4 border border-blue-200 shadow-lg z-20"
        variants={itemVariants}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
        }}
      >
        <motion.h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          About Me
        </motion.h1>
        <motion.div
          whileHover={{ 
            y: -10,
            rotate: 45,
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          <IoMdArrowRoundUp className="text-3xl md:text-4xl text-blue-600 rotate-45" />
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <motion.div 
        className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 mt-8 z-20"
        variants={containerVariants}
      >
        {/* Left Section (Text) */}
        <motion.div 
          className="w-full lg:w-1/2 bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-blue-200 shadow-xl"
          variants={itemVariants}
          whileHover={{
            boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)"
          }}
        >
          <motion.p 
            className="text-gray-800 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { duration: 1 } 
            }}
          >
            As a dedicated medical professional with over 10 years of experience, I'm committed to 
            providing exceptional patient care and advancing healthcare innovation. My journey in 
            medicine has taken me through various specialties, allowing me to develop a comprehensive 
            approach to patient treatment and healthcare management.
          </motion.p>

          {/* Medical specialties */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8"
            variants={containerVariants}
          >
            {medicalIcons.map((med, i) => (
              <motion.div
                key={i}
                className={`flex flex-col items-center p-3 rounded-xl bg-white border border-blue-100 shadow-sm ${med.color}`}
                custom={i}
                variants={iconVariants}
                whileHover="hover"
              >
                <div className="text-3xl mb-1">{med.icon}</div>
                <span className="text-xs md:text-sm font-medium text-gray-700">{med.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Section (Visual) */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          variants={itemVariants}
        >
          <div className="relative w-full max-w-md group">
            <motion.div 
              className="w-full h-64 md:h-96 bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { delay: 0.5 } 
              }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)"
              }}
              variants={pulseVariants}
             
            >
              <img 
                src={medicalTeam} 
                alt="Medical Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent flex items-end p-6">
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold text-white"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ 
                    y: 0,
                    opacity: 1,
                    transition: { delay: 1 } 
                  }}
                >
                  My Medical Journey
                </motion.h2>
              </div>
            </motion.div>
            <motion.div 
              className="absolute -inset-4 border-2 border-blue-400 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none"
              initial={{ scale: 0.9 }}
              whileHover={{ 
                scale: 1,
                transition: { duration: 0.5 }
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 z-20"
        variants={containerVariants}
      >
        {[
          { value: "10+", label: "Years Experience" },
          { value: "5000+", label: "Patients Treated" },
          { value: "100+", label: "Medical Cases" },
          { value: "24/7", label: "Availability" }
        ].map((stat, i) => (
          <motion.div
            key={i}
            className="bg-white/80 backdrop-blur-md rounded-xl p-4 border border-blue-200 shadow-sm text-center"
            custom={i}
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 15px -5px rgba(59, 130, 246, 0.2)"
            }}
          >
            <motion.p 
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"
              animate={{
                scale: [1, 1.1, 1],
                transition: { duration: 3, repeat: Infinity }
              }}
            >
              {stat.value}
            </motion.p>
            <p className="text-sm md:text-base text-gray-600 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Space */}
      <div className="h-12"></div>
    </motion.div>
  );
};

export default About;