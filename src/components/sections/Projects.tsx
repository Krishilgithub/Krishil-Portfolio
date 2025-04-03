"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "../shared/AnimatedText";
import Card from "../shared/Card";
import Button from "../shared/Button";
import Image from "next/image";
import { useClickAway } from "react-use";
import SectionHeading from "../shared/SectionHeading";

const projects = [
  {
    id: 1,
    title: "Fraud Detection Model",
    description:
      "Developed a supervised learning model to detect fraudulent transactions using Python, Pandas, and Scikit-learn.",
    longDescription:
      "Developed a supervised learning model to detect fraudulent transactions using Python, Pandas, and Scikit-learn. Preprocessed and analyzed a dataset of 10,000+ transactions, applying feature engineering techniques to improve model accuracy. Implemented Random Forest and Logistic Regression algorithms, achieving an accuracy of 92% and reducing false positives by 15%.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "NumPy",
      "Jupyter Notebook",
    ],
    image:
      "https://img.freepik.com/free-vector/fraud-detection-abstract-concept-illustration_335657-3896.jpg",
    category: "Machine Learning",
    demoUrl: "#",
    githubUrl: "https://github.com/Krishilgithub",
    featured: true,
    highlightRank: 1,
  },
  {
    id: 2,
    title: "Predictive Analysis for Student Performance",
    description:
      "Built a regression-based ML model to predict student grades based on historical academic data.",
    longDescription:
      "Built a regression-based ML model to predict student grades based on historical academic data. Utilized data visualization libraries (Seaborn, Matplotlib) to identify key performance indicators and trends. Deployed the model using Flask for a simple web interface, enabling real-time predictions.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Flask",
      "Pandas",
      "Seaborn",
      "Matplotlib",
    ],
    image:
      "https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-8022.jpg",
    category: "Machine Learning",
    demoUrl: "#",
    githubUrl: "https://github.com/Krishilgithub",
    featured: true,
    highlightRank: 2,
  },
  {
    id: 3,
    title: "House Price Prediction",
    description:
      "Developed a simple linear regression model to predict house prices based on features like area and number of rooms.",
    longDescription:
      "Developed a simple linear regression model to predict house prices based on features like area and number of rooms. Used a sample dataset to train the model and visualized the results with scatter plots. Improved understanding of regression techniques and data preprocessing.",
    technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
    image:
      "https://img.freepik.com/free-vector/real-estate-searching-concept-illustration_114360-340.jpg",
    category: "Machine Learning",
    demoUrl: "#",
    githubUrl: "https://github.com/Krishilgithub",
    featured: false,
    highlightRank: 0,
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a fully responsive personal portfolio website to showcase skills, projects, and achievements.",
    longDescription:
      "Designed and developed a fully responsive personal portfolio website to showcase skills, projects, and achievements. Implemented clean UI/UX with HTML, CSS, and JavaScript, ensuring cross-browser compatibility and mobile optimization. Hosted the site using GitHub Pages for easy access and version control.",
    technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub Pages"],
    image: "/images/projects/portfolio.jpg",
    category: "Web Development",
    demoUrl: "#",
    githubUrl: "https://github.com/Krishilgithub",
    featured: true,
    highlightRank: 4,
  },
  {
    id: 5,
    title: "Hostel Management Website",
    description:
      "Built a web application to streamline hostel operations, including room allocation and student registration features.",
    longDescription:
      "Built a web application to streamline hostel operations, including room allocation and student registration features. Created an intuitive front-end with HTML and CSS, paired with basic JavaScript for form validation and interactivity. Integrated a simple backend for data management.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    image: "/images/projects/hostel-management.jpg",
    category: "Web Development",
    demoUrl: "#",
    githubUrl: "https://github.com/Krishilgithub",
    featured: false,
    highlightRank: 0,
  },
  {
    id: 6,
    title: "Ochi Website with Animations",
    description:
      "Developed a visually engaging website inspired by modern design trends using React and animation libraries.",
    longDescription:
      "Developed a visually engaging website inspired by modern design trends using React and animation libraries like GSAP and Locomotive Scroll. Utilized Shadcn UI for reusable components and enhanced user experience with smooth scrolling and transitions. Optimized performance and ensured responsiveness across devices with Tailwind CSS.",
    technologies: [
      "React",
      "JavaScript",
      "GSAP",
      "Locomotive Scroll",
      "Shadcn UI",
      "Tailwind CSS",
      "Vite",
    ],
    image: "/images/projects/ochi-website.jpg",
    category: "Web Development",
    demoUrl: "#",
    githubUrl: "https://github.com/Krishilgithub",
    featured: true,
    highlightRank: 3,
  },
];

// Type definition for the project with highlightRank
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  category: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  highlightRank: number;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(0);
  const modalRef = useRef(null);
  const projectsPerPage = 3;

  useClickAway(modalRef, () => {
    if (selectedProject !== null) {
      setSelectedProject(null);
    }
  });

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  // Get all projects with a highlight rank greater than 0, sorted by rank
  const allHighlightedProjects = projects
    .filter((project: Project) => project.highlightRank > 0)
    .sort((a: Project, b: Project) => a.highlightRank - b.highlightRank);

  // Calculate total pages
  const totalPages = Math.ceil(allHighlightedProjects.length / projectsPerPage);

  // Get the current page of highlighted projects
  const currentHighlightedProjects = allHighlightedProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  // Navigation functions
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="projects" className="py-24 bg-[#112240] relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A192F] to-transparent opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-full h-full overflow-hidden">
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#7B61FF] rounded-full filter blur-[180px] opacity-10"></div>
        <div className="absolute top-1/3 left-10 w-64 h-64 bg-[#FF61D8] rounded-full filter blur-[150px] opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title="Featured Projects"
          subtitle="Explore my projects that demonstrate expertise in machine learning and web development."
        />

        {/* Featured Projects Showcase with Navigation Arrows */}
        <div className="mb-24">
          <div className="flex justify-between items-center mb-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-[#CCD6F6] pl-4 border-l-4 border-[#7B61FF]"
            >
              Highlighted Work
            </motion.h3>

            {/* Navigation Arrows - Only show if there are more than 3 projects */}
            {allHighlightedProjects.length > projectsPerPage && (
              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={goToPrevPage}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#233554] text-[#8892B0] hover:bg-[#2A3F63] hover:text-[#CCD6F6] transition-colors focus:outline-none"
                  aria-label="Previous projects"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={goToNextPage}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#233554] text-[#8892B0] hover:bg-[#2A3F63] hover:text-[#CCD6F6] transition-colors focus:outline-none"
                  aria-label="Next projects"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              </div>
            )}
          </div>

          <div className="relative">
            {/* Display 3 projects per page with animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {currentHighlightedProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      glassEffect
                      hoverEffect
                      className="h-full cursor-pointer overflow-hidden"
                      onClick={() => setSelectedProject(project.id)}
                    >
                      <div className="relative">
                        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#112240]/60 z-10"></div>
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={250}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                          <div className="absolute top-3 right-3 bg-[#0A192F]/80 backdrop-blur-sm text-xs font-mono text-[#8892B0] py-1 px-2 rounded z-20">
                            {project.category}
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-bold text-[#CCD6F6] mb-2 flex items-center">
                            {project.title}
                            <div className="w-2 h-2 rounded-full bg-[#7B61FF] ml-2 animate-pulse"></div>
                          </h3>
                          <p className="text-[#8892B0] text-sm line-clamp-3 mb-4">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-[#233554] text-[#7B61FF] rounded-full text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-2 py-1 bg-[#233554] text-[#8892B0] rounded-full text-xs">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full justify-center"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination dots for mobile */}
          {allHighlightedProjects.length > projectsPerPage && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentPage === index ? "bg-[#7B61FF]" : "bg-[#233554]"
                  } transition-colors`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12 overflow-x-auto hide-scrollbar">
          <div className="flex space-x-2 p-1 bg-[#0A192F]/50 backdrop-blur-sm rounded-full">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ y: -2 }}
                whileTap={{ y: 1 }}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  filter === category
                    ? "bg-gradient-to-r from-[#7B61FF] to-[#FF61D8] text-white font-medium"
                    : "text-[#8892B0] hover:text-[#CCD6F6]"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                glassEffect
                hoverEffect
                className="h-full cursor-pointer overflow-hidden border border-[#233554]/30 hover:border-[#7B61FF]/30 transition-colors"
                onClick={() => setSelectedProject(project.id)}
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent opacity-70"></div>
                    <div className="absolute bottom-3 left-3 bg-[#0A192F]/80 backdrop-blur-sm text-xs font-mono text-[#8892B0] py-1 px-2 rounded">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#CCD6F6] mb-3">
                      {project.title}
                    </h3>
                    <p className="text-[#8892B0] text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-[#233554] text-[#7B61FF] rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-[#233554] text-[#8892B0] rounded-full text-xs">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 justify-center"
                        onClick={(e?: React.MouseEvent<HTMLButtonElement>) => {
                          if (e) e.stopPropagation();
                          window.open(project.demoUrl, "_blank");
                        }}
                      >
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 justify-center"
                        onClick={(e?: React.MouseEvent<HTMLButtonElement>) => {
                          if (e) e.stopPropagation();
                          window.open(project.githubUrl, "_blank");
                        }}
                      >
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0A192F]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              ref={modalRef}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="w-full max-w-4xl max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find((p) => p.id === selectedProject);
                if (!project) return null;

                return (
                  <Card glassEffect className="p-0">
                    <div className="relative h-56 md:h-80 w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={900}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] to-transparent"></div>
                      <button
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0A192F]/60 backdrop-blur-sm flex items-center justify-center text-[#CCD6F6] border border-[#233554] hover:border-[#7B61FF] transition-colors"
                        onClick={() => setSelectedProject(null)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="p-6 md:p-8">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#CCD6F6]">
                          {project.title}
                        </h2>
                        <div className="flex space-x-4">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8892B0] hover:text-[#7B61FF] transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8892B0] hover:text-[#7B61FF] transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-[#7B61FF] mb-3">
                          Project Overview
                        </h3>
                        <p className="text-[#8892B0] leading-relaxed">
                          {project.longDescription}
                        </p>
                      </div>

                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-[#7B61FF] mb-3">
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-[#233554] text-[#CCD6F6] rounded-lg text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button
                          variant="primary"
                          size="lg"
                          className="flex-1 justify-center"
                          onClick={() => window.open(project.demoUrl, "_blank")}
                        >
                          View Live Demo
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          className="flex-1 justify-center"
                          onClick={() =>
                            window.open(project.githubUrl, "_blank")
                          }
                        >
                          View Source Code
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
