"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  FaUsers,
  FaDatabase,
  FaSitemap,
  FaCode,
  FaRobot,
  FaProjectDiagram,
} from "react-icons/fa";

export default function About() {
  const ref = useRef(null);
  const expertiseRef = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });
  const isExpertiseInView = useInView(expertiseRef, {
    once: true,
    amount: 0.3,
  });

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skills = [
    {
      icon: <FaUsers size={24} />,
      title: "CTO",
      desc: "Leading E_gramTech AI to drive innovation and impact",
    },
    {
      icon: <FaProjectDiagram size={24} />,
      title: "Project Manager",
      desc: "Delivering high performance software from concept to launch",
    },
    {
      icon: <FaCode size={24} />,
      title: "Web Development",
      desc: "Crafting scalable, high performance web apps and APIs",
    },
    {
      icon: <FaRobot size={24} />,
      title: "Machine Learning",
      desc: "Designing intelligent, scalable AI powered solutions",
    },
    {
      icon: <FaDatabase size={24} />,
      title: "Database Design",
      desc: "Optimizing data architecture for speed and scalability",
    },
    {
      icon: <FaSitemap size={24} />,
      title: "System Design",
      desc: "Engineering resilient, scalable distributed systems",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full"
          style={{ background: "linear-gradient(135deg, #4a38c2, #8f38c2)" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 rounded-full"
          style={{ background: "linear-gradient(135deg, #c238b0, #b0c238)" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 
h-40 rounded-full"
          style={{ background: "linear-gradient(135deg, #38c24a, #b0c238)" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          className="text-center mb-16 sm:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mt-10 mb-6 
gradient-text-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto text-center 
leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Passionate{" "}
            <span className="gradient-text-secondary font-semibold">
              full-stack developer, machine learning engineer, and business
              intelligence specialist
            </span>{" "}
            with building scalable, intelligent systems and data-driven
            solutions that power modern applications, optimize business
            operations, and drive digital growth.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column - Professional Image */}
          <motion.div
            variants={itemVariants}
            className="relative group order-2 lg:order-1 max-w-md mx-auto w-full"
          >
            <div
              className="relative h-[350px] sm:h-[450px] lg:h-[500px] w-full overflow-hidden 
rounded-2xl shadow-2xl"
            >
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #4a38c2, #8f38c2)",
                  padding: "4px",
                }}
              >
                <div
                  className="relative h-full w-full overflow-hidden rounded-2xl 
bg-gradient-to-br from-slate-800 to-slate-900"
                >
                  {/* Dark overlay for light background balance */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-slate-900/60 
via-transparent to-slate-900/30 z-10"
                  ></div>
                  <Image
                    src="/image/about.jpg"
                    alt="emmanuel davis"
                    fill
                    style={{ objectFit: "contain" }}
                    className="transition-transform duration-700 group-hover:scale-110 relative 
z-0"
                  />
                  {/* Additional subtle overlay for better contrast */}
                  <div className="absolute inset-0 bg-slate-900/20 z-5"></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-20 h-20 
sm:w-24 sm:h-24 rounded-2xl shadow-lg"
              style={{
                background: "linear-gradient(135deg, #c238b0, #b0c238)",
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-16 h-16 sm:w-20 sm:h-20 
border-4 rounded-2xl"
              style={{ borderColor: "#38c24a" }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Right Column - Professional Content */}
          <div
            className="order-1 lg:order-2 flex flex-col items-center text-center space-y-8 
px-4 sm:px-8"
          >
            <div className="space-y-6 w-full max-w-2xl mx-auto">
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl sm:text-3xl font-bold gradient-text-secondary mb-4">
                  Developer & Digital Innovator
                </h3>
                <div
                  className="w-24 h-1 rounded-full mb-3 mx-auto"
                  style={{
                    background: "linear-gradient(135deg, #4a38c2, #8f38c2)",
                  }}
                ></div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-gray-300 leading-relaxed"
              >
                {`I'm a`}{" "}
                <span className="gradient-text-primary font-semibold">
                  Full-Stack Developer, Machine Learning Developer, and Business
                  Intelligence Specialist
                </span>{" "}
                with{" "}
                <span className="gradient-text-secondary font-semibold">
                  years of experience
                </span>
                , specializing in building scalable web applications,
                intelligent systems, and data-driven solutions that power
                enterprise-level businesses.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-gray-300 leading-relaxed"
              >
                My expertise lies in designing{" "}
                <span className="gradient-text-accent font-semibold">
                  robust digital solutions
                </span>{" "}
                that combine web development, machine learning, and business
                intelligence to solve complex problems while ensuring
                performance, security, and scalability.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-gray-300 leading-relaxed"
              >
                {`I approach every project with analytical thinking, technical precision, and creative 
problem-solving.  I focus on delivering solutions that drive real results.`}
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-gray-300 leading-relaxed"
              >
                {`Curious by nature, I thrive on challenging projects that require innovative 
solutions and meticulous execution. Beyond development, I'm passionate about exploring 
emerging technologies  
.`}
              </motion.p>

              {/* Education Stats */}
              <motion.div variants={itemVariants} className="pt-2">
                <h3 className="text-2xl sm:text-3xl font-bold gradient-text-secondary mb-4">
                  Education
                </h3>
                <div
                  className="w-24 h-1 rounded-full mt-2 mx-auto"
                  style={{
                    background: "linear-gradient(135deg, #4a38c2, #8f38c2)",
                  }}
                ></div>
              </motion.div>
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-gray-300 leading-relaxed"
              >
                <span className="gradient-text-primary font-semibold">BSc</span>{" "}
                in Computer Science{" "}
                <span className="gradient-text-secondary font-semibold">
                  {" "}
                  University of Ibadan
                </span>{" "}
                (In Progress)
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Professional Expertise Section */}
        <motion.div
          ref={expertiseRef}
          className="mt-12 sm:mt-24"
          variants={containerVariants}
          initial="hidden"
          animate={isExpertiseInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold gradient-text-primary mb-6">
              My Expertise
            </h2>
            <p
              className="text-base  text-gray-300 max-w-3xl mx-auto leading-relaxed 
px-4"
            >
              Specialized skills and technologies that drive{" "}
              <span className="gradient-text-secondary font-semibold">
                exceptional web solutions
              </span>
            </p>
            <div
              className="w-32 h-1 rounded-full mx-auto mt-2"
              style={{
                background: "linear-gradient(135deg, #4a38c2, #8f38c2)",
              }}
            ></div>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 
max-w-7xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative glass-effect p-8 rounded-2xl hover:shadow-2xl 
transition-all duration-500 cursor-pointer overflow-hidden text-center flex flex-col 
items-center"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Background Gradient on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity 
duration-500 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${
                      index % 3 === 0
                        ? "#4a38c2, #8f38c2"
                        : index % 3 === 1
                          ? "#c238b0, #b0c238"
                          : "#38c24a, #b0c238"
                    })`,
                  }}
                ></div>

                {/* Icon Container */}
                <motion.div
                  className="relative mb-6 p-4 rounded-2xl w-fit mx-auto"
                  style={{
                    background: `linear-gradient(135deg, ${
                      index % 3 === 0
                        ? "#4a38c2, #8f38c2"
                        : index % 3 === 1
                          ? "#c238b0, #b0c238"
                          : "#38c24a, #b0c238"
                    })`,
                  }}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-white text-3xl">{skill.icon}</div>
                </motion.div>

                <h3
                  className="text-xl sm:text-2xl font-bold mb-4 text-white 
group-hover:gradient-text-primary transition-all duration-300"
                >
                  {skill.title}
                </h3>
                <p
                  className="text-base text-gray-300 leading-relaxed group-hover:text-gray-200 
transition-colors duration-300"
                >
                  {skill.desc}
                </p>

                {/* Hover Border Effect */}
                <div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent 
group-hover:border-opacity-30 transition-all duration-500"
                  style={{
                    borderColor: `${
                      index % 3 === 0
                        ? "#4a38c2"
                        : index % 3 === 1
                          ? "#c238b0"
                          : "#38c24a"
                    }`,
                  }}
                ></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
