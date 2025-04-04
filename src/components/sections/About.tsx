"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "../shared/AnimatedText";
import Card from "../shared/Card";
import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";

const skills = [
  {
    name: "Python",
    level: 95,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    colorClass: "border-[#306998]",
    bgColorClass: "bg-[#306998]",
  },
  {
    name: "TensorFlow",
    level: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    colorClass: "border-[#FF6F00]",
    bgColorClass: "bg-[#FF6F00]",
  },
  {
    name: "Scikit-learn",
    level: 90,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    colorClass: "border-[#F89939]",
    bgColorClass: "bg-[#F89939]",
  },
  {
    name: "Data Analysis",
    level: 95,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    colorClass: "border-[#150458]",
    bgColorClass: "bg-[#150458]",
  },
  {
    name: "Deep Learning",
    level: 85,
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
    colorClass: "border-[#D00000]",
    bgColorClass: "bg-[#D00000]",
  },
];

// Adding web development skills
const webSkills = [
  {
    name: "JavaScript",
    level: 90,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    colorClass: "border-[#F7DF1E]",
    bgColorClass: "bg-[#F7DF1E]",
  },
  {
    name: "React",
    level: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    colorClass: "border-[#61DAFB]",
    bgColorClass: "bg-[#61DAFB]",
  },
  {
    name: "TypeScript",
    level: 80,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    colorClass: "border-[#3178C6]",
    bgColorClass: "bg-[#3178C6]",
  },
  {
    name: "Next.js",
    level: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    colorClass: "border-[#000000]",
    bgColorClass: "bg-[#000000]",
  },
  {
    name: "Node.js",
    level: 80,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    colorClass: "border-[#339933]",
    bgColorClass: "bg-[#339933]",
  },
  {
    name: "HTML/CSS",
    level: 90,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    colorClass: "border-[#E34F26]",
    bgColorClass: "bg-[#E34F26]",
  },
  {
    name: "Tailwind CSS",
    level: 85,
    logoComponent: (
      <div className="flex items-center justify-center w-full h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 54 33"
          className="w-12 h-12"
        >
          <g clipPath="url(#prefix__clip0)">
            <path
              fill="#38B2AC"
              fillRule="evenodd"
              d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
              clipRule="evenodd"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0">
              <path fill="#fff" d="M0 0h54v32.4H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>
    ),
    colorClass: "border-[#38B2AC]",
    bgColorClass: "bg-[#38B2AC]",
  },
  {
    name: "MongoDB",
    level: 75,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    colorClass: "border-[#47A248]",
    bgColorClass: "bg-[#47A248]",
  },
];

// ML/AI tools with images using external URLs
const tools = [
  {
    name: "Jupyter Notebook",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    colorClass: "border-[#F37726]",
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    colorClass: "border-[#007ACC]",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    colorClass: "border-[#2496ED]",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    colorClass: "border-[#F05032]",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0A192F] relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#112240] to-transparent opacity-60"></div>

      <div className="container mx-auto px-4">
        <SectionHeading
          title="About Me"
          subtitle="I'm a Full Stack Developer and Machine Learning enthusiast specializing in developing web applications and ML solutions. With experience in frontend and backend technologies, along with fundamental ML frameworks, I focus on building functional and engaging applications."
        />

        {/* Web Development Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex justify-center mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#CCD6F6] border-b-2 border-[#FF61D8] pb-2">
              Web Development Expertise
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {webSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card
                  glassEffect
                  className={`h-full border-t-4 ${skill.colorClass}`}
                >
                  <div className="flex flex-col items-center p-4">
                    <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm"></div>
                      <div className="relative z-10">
                        {skill.logoComponent ? (
                          skill.logoComponent
                        ) : (
                          <Image
                            src={skill.logo}
                            alt={skill.name}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        )}
                      </div>
                    </div>
                    <h4 className="text-[#CCD6F6] font-semibold text-lg mb-2">
                      {skill.name}
                    </h4>
                    <div className="w-full bg-[#233554] h-2 rounded-full overflow-hidden mb-1">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full rounded-full ${skill.bgColorClass}`}
                      />
                    </div>
                    <span className="text-sm text-[#8892B0]">
                      Proficiency: {skill.level}%
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Machine Learning Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex justify-center mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#CCD6F6] border-b-2 border-[#7B61FF] pb-2">
              Machine Learning Expertise
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card
                  glassEffect
                  className={`h-full border-t-4 ${skill.colorClass}`}
                >
                  <div className="flex flex-col items-center p-4">
                    <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm"></div>
                      <div className="relative z-10">
                        <Image
                          src={skill.logo}
                          alt={skill.name}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h4 className="text-[#CCD6F6] font-semibold text-lg mb-2">
                      {skill.name}
                    </h4>
                    <div className="w-full bg-[#233554] h-2 rounded-full overflow-hidden mb-1">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full rounded-full ${skill.bgColorClass}`}
                      />
                    </div>
                    <span className="text-sm text-[#8892B0]">
                      Proficiency: {skill.level}%
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex justify-center mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#CCD6F6] border-b-2 border-[#FF61D8] pb-2">
              Tools & Platforms
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 justify-center">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                  boxShadow: "0 0 15px rgba(123, 97, 255, 0.3)",
                }}
                className={`relative flex flex-col items-center p-3 rounded-lg bg-[#112240] border border-[#233554] hover:border-t-2 ${tool.colorClass}`}
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h4 className="text-[#CCD6F6] font-medium text-sm text-center">
                  {tool.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Card
            glassEffect
            className="backdrop-blur-lg border border-[#233554]/50"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 justify-items-center">
              <div className="text-center transform transition-transform hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#233554] flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#7B61FF] mb-2">25+</h3>
                <p className="text-[#8892B0]">ML Projects Completed</p>
              </div>

              <div className="text-center transform transition-transform hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#FF61D8] to-[#233554] flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#FF61D8] mb-2">25+</h3>
                <p className="text-[#8892B0]">Web Projects Completed</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
