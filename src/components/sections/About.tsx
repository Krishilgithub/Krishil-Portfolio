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
    name: "PyTorch",
    level: 80,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    colorClass: "border-[#EE4C2C]",
    bgColorClass: "bg-[#EE4C2C]",
  },
  {
    name: "Scikit-learn",
    level: 90,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    colorClass: "border-[#F89939]",
    bgColorClass: "bg-[#F89939]",
  },
  {
    name: "Computer Vision",
    level: 80,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    colorClass: "border-[#5C3EE8]",
    bgColorClass: "bg-[#5C3EE8]",
  },
  {
    name: "NLP",
    level: 75,
    logo: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg",
    colorClass: "border-[#FFBD59]",
    bgColorClass: "bg-[#FFBD59]",
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
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
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
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    colorClass: "border-[#FF9900]",
  },
  {
    name: "Google Cloud",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    colorClass: "border-[#4285F4]",
  },
  {
    name: "Kubernetes",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    colorClass: "border-[#326CE5]",
  },
  {
    name: "PyCharm",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
    colorClass: "border-[#21D789]",
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
          subtitle="I'm a Full Stack Developer and Machine Learning Engineer specializing in developing sophisticated web applications and AI solutions. With expertise in both frontend and backend technologies, along with deep learning frameworks, I create intelligent systems that solve complex real-world problems."
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6">
              <div className="text-center transform transition-transform hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#233554] flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#7B61FF] mb-2">3+</h3>
                <p className="text-[#8892B0]">Years of Experience</p>
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
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#FF61D8] mb-2">50+</h3>
                <p className="text-[#8892B0]">Projects Completed</p>
              </div>

              <div className="text-center transform transition-transform hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#00EEFF] to-[#233554] flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#00EEFF] mb-2">20+</h3>
                <p className="text-[#8892B0]">Happy Clients</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
