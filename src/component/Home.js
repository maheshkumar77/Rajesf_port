import React from 'react'
import { motion } from 'framer-motion'
import img from "../images/im2.jpg"
import { CiInstagram } from "react-icons/ci"
import { FaWhatsapp } from "react-icons/fa6"
import { SiGmail } from "react-icons/si"

const Home = () => {
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
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  }

  const iconVariants = {
    hover: {
      y: -5,
      scale: 1.2,
      transition: { type: "spring", stiffness: 300 }
    }
  }

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4 md:p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full max-w-6xl">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden border border-white/10"
          variants={containerVariants}
        >
          {/* Intro Section */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-8"
            variants={containerVariants}
          >
            <motion.p 
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Hi, I'm Rajesh Kumar Sahu
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300"
              variants={itemVariants}
            >
              Passionate developer creating digital experiences that matter.
            </motion.p>
            
            <motion.div 
              className="flex gap-6"
              variants={itemVariants}
            >
              <motion.a 
                href="#" 
                className="text-3xl text-pink-500"
                whileHover="hover"
                variants={iconVariants}
              >
                <CiInstagram />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-3xl text-green-500"
                whileHover="hover"
                variants={iconVariants}
              >
                <FaWhatsapp />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-3xl text-red-500"
                whileHover="hover"
                variants={iconVariants}
              >
                <SiGmail />
              </motion.a>
            </motion.div>
            
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
          
          {/* Image Section */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center"
            variants={imageVariants}
            whileHover="hover"
          >
            <div className="relative w-full max-w-md">
              <motion.img 
                src={img} 
                alt="Rajesh Kumar Sahu"
                className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white/20"
                initial={{ rotate: -5 }}
                animate={{ rotate: 0 }}
                transition={{ type: "spring", stiffness: 50, delay: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl pointer-events-none"></div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 100],
                x: [0, (Math.random() - 0.5) * 50],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 180]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Home