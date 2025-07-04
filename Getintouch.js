import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaPaperPlane, FaPills, FaFlask, FaMicroscope, FaHeartbeat } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendToback = async () => {
    try {
      await axios.post("http://localhost:5000/api/send", formData);
    } catch (err) {
      console.error("Failed to send data:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success("Thank you for contacting me! I'll respond within 24 hours.", {
      position: "top-center",
      autoClose: 5000,
      className: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white',
    });

    await sendToback();

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

    setIsSubmitting(false);
  };

  const floatingIcons = [
    { icon: <FaPills className="text-indigo-400/20" size={24} />, size: 24 },
    { icon: <FaFlask className="text-purple-400/20" size={28} />, size: 28 },
    { icon: <FaMicroscope className="text-blue-400/20" size={32} />, size: 32 },
    { icon: <FaHeartbeat className="text-pink-400/20" size={26} />, size: 26 },
    { icon: <FaPills className="text-indigo-400/20" size={22} />, size: 22 },
    { icon: <FaFlask className="text-purple-400/20" size={30} />, size: 30 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15, mass: 0.5 },
    },
  };

  const inputVariants = {
    inactive: { scale: 1 },
    active: { scale: 1.02, transition: { duration: 0.3 } },
  };

  const socialIconVariants = {
    hover: { y: -5, scale: 1.1, transition: { type: "spring", stiffness: 500, damping: 15 }},
    tap: { scale: 0.9 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${icon.size}px`,
            height: `${icon.size}px`,
          }}
          initial={{ y: 0, x: 0, opacity: 0 }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 0.2, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 30 + 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          {icon.icon}
        </motion.div>
      ))}

      <ToastContainer />

      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto relative"
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">Contact</span> Me
          </h1>
          <p className="text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto">
            Pharmacy professional available for collaborations and opportunities
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="flex flex-col space-y-8"
          >
            <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-gray-700/50">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
                Contact <span className="text-indigo-400">Details</span>
              </h2>

              <div className="space-y-6">
                <motion.div className="flex items-start group">
                  <div className="flex-shrink-0 bg-indigo-600/20 p-3 rounded-xl text-indigo-400 border border-indigo-400/30">
                    <MdPhone className="h-6 w-6" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-medium text-gray-300">Phone</h3>
                    <a href="tel:8763190052" className="text-indigo-300 hover:text-indigo-200 transition-colors duration-300 text-lg">
                      +91 8763190052
                    </a>
                  </div>
                </motion.div>

                <motion.div className="flex items-start group">
                  <div className="flex-shrink-0 bg-indigo-600/20 p-3 rounded-xl text-indigo-400 border border-indigo-400/30">
                    <MdEmail className="h-6 w-6" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-medium text-gray-300">Email</h3>
                    <a href="mailto:rajeshkumar@gmail.com" className="text-indigo-300 hover:text-indigo-200 transition-colors duration-300 text-lg">
                      rajeshkumar@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div className="flex items-start group">
                  <div className="flex-shrink-0 bg-indigo-600/20 p-3 rounded-xl text-indigo-400 border border-indigo-400/30">
                    <MdLocationOn className="h-6 w-6" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-medium text-gray-300">Location</h3>
                    <p className="text-indigo-300 text-lg">Berhampur, Odisha, India</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-12 flex space-x-4">
                {[FaLinkedin, FaGithub, FaTwitter].map((Icon, idx) => (
                  <motion.a
                    key={idx}
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap="tap"
                    href="#"
                    className="bg-gray-700/50 p-4 rounded-xl text-indigo-300 border border-gray-600/50 hover:border-indigo-400/50 transition-all duration-300"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="bg-gray-800/50 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-gray-700/50"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
              Send a <span className="text-indigo-400">Message</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div variants={inputVariants} animate={activeField === 'name' ? 'active' : 'inactive'}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setActiveField('name')}
                  onBlur={() => setActiveField(null)}
                  placeholder="Enter your name"
                  required
                  className="w-full px-5 py-3 bg-gray-700/30 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div variants={inputVariants} animate={activeField === 'email' ? 'active' : 'inactive'}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setActiveField('email')}
                  onBlur={() => setActiveField(null)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-5 py-3 bg-gray-700/30 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
                />
              </motion.div>

              {/* Subject Input */}
              <motion.div variants={inputVariants} animate={activeField === 'subject' ? 'active' : 'inactive'}>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setActiveField('subject')}
                  onBlur={() => setActiveField(null)}
                  placeholder="What's this about?"
                  required
                  className="w-full px-5 py-3 bg-gray-700/30 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
                />
              </motion.div>

              {/* Message Textarea */}
              <motion.div variants={inputVariants} animate={activeField === 'message' ? 'active' : 'inactive'}>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setActiveField('message')}
                  onBlur={() => setActiveField(null)}
                  placeholder="Enter your message"
                  required
                  className="w-full px-5 py-3 bg-gray-700/30 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
                ></textarea>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'bg-indigo-700/50 text-indigo-200' : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                }`}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center">
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                      Sending...
                    </motion.span>
                  ) : (
                    <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center">
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GetInTouch;
