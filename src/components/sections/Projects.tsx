'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from '../shared/AnimatedText';
import Card from '../shared/Card';
import Button from '../shared/Button';
import Image from 'next/image';
import { useClickAway } from 'react-use';
import SectionHeading from '../shared/SectionHeading';

const projects = [
  {
    id: 1,
    title: 'Neural Image Classification',
    description: 'A state-of-the-art deep learning model for classifying images using advanced CNN architecture with transfer learning capabilities.',
    longDescription: 'This project implements a convolutional neural network for image classification using transfer learning. The model achieves 97% accuracy on the benchmark datasets and features real-time inference capabilities. The solution includes data augmentation pipelines, model compression techniques, and deployment optimizations.',
    technologies: ['TensorFlow', 'Keras', 'Computer Vision', 'Transfer Learning'],
    image: '/images/projects/image-classification.jpg',
    category: 'Computer Vision',
    demoUrl: 'https://demo.example.com/project1',
    githubUrl: 'https://github.com/yourusername/neural-image-classification',
    featured: true,
  },
  {
    id: 2,
    title: 'Sentiment Analysis Engine',
    description: 'Powerful NLP system that analyzes text sentiment with high accuracy using state-of-the-art transformer models.',
    longDescription: 'This NLP project uses transformer-based models to analyze sentiment in text data. The system can process multiple languages and includes fine-tuning capabilities for domain-specific applications. Features include real-time analysis, context-aware sentiment detection, and integration APIs for various platforms.',
    technologies: ['PyTorch', 'Transformers', 'BERT', 'NLP', 'HuggingFace'],
    image: '/images/projects/sentiment-analysis.jpg',
    category: 'Natural Language Processing',
    demoUrl: 'https://demo.example.com/project2',
    githubUrl: 'https://github.com/yourusername/sentiment-analysis',
    featured: true,
  },
  {
    id: 3,
    title: 'Real-time Object Detection',
    description: 'Computer vision system that detects and tracks objects in real-time video streams using optimized YOLO architecture.',
    longDescription: 'This object detection system leverages the YOLOv5 architecture to provide real-time detection and tracking capabilities. The solution includes custom model training, optimization for edge devices, and integration with video processing pipelines. It achieves high accuracy while maintaining low latency even on resource-constrained environments.',
    technologies: ['Python', 'OpenCV', 'YOLOv5', 'CUDA', 'TensorRT'],
    image: '/images/projects/object-detection.jpg',
    category: 'Computer Vision',
    demoUrl: 'https://demo.example.com/project3',
    githubUrl: 'https://github.com/yourusername/realtime-object-detection',
    featured: true,
  },
  {
    id: 4,
    title: 'Recommendation System',
    description: 'Personalized recommendation engine using collaborative filtering and deep learning to provide relevant content suggestions.',
    longDescription: 'This recommendation system combines collaborative filtering techniques with deep learning to deliver highly personalized content recommendations. The solution includes user behavior analysis, content embedding generation, and a hybrid recommendation approach that balances exploration and exploitation to improve user engagement.',
    technologies: ['PyTorch', 'Scikit-learn', 'FastAPI', 'Redis', 'Matrix Factorization'],
    image: '/images/projects/recommendation-system.jpg',
    category: 'Recommender Systems',
    demoUrl: 'https://demo.example.com/project4',
    githubUrl: 'https://github.com/yourusername/recommendation-engine',
    featured: false,
  },
  {
    id: 5,
    title: 'Anomaly Detection Framework',
    description: 'Machine learning system that identifies anomalies in time-series data for predictive maintenance and fraud detection.',
    longDescription: 'This anomaly detection framework is designed to identify outliers and unusual patterns in time-series data. It combines statistical methods with deep learning approaches to provide robust detection capabilities. Applications include predictive maintenance for industrial equipment, financial fraud detection, and network security monitoring.',
    technologies: ['TensorFlow', 'Keras', 'Time Series Analysis', 'LSTM', 'Statistical Methods'],
    image: '/images/projects/anomaly-detection.jpg',
    category: 'Time Series Analysis',
    demoUrl: 'https://demo.example.com/project5',
    githubUrl: 'https://github.com/yourusername/anomaly-detection',
    featured: false,
  },
  {
    id: 6,
    title: 'Reinforcement Learning for Robotics',
    description: 'Reinforcement learning algorithms applied to robotic control problems, enabling autonomous navigation and manipulation.',
    longDescription: 'This project implements various reinforcement learning algorithms for robotic control tasks. The system can train agents to perform complex manipulation and navigation tasks through trial and error. It features simulation environments for safe training, policy gradient methods, and transfer learning techniques to apply trained policies to real-world robots.',
    technologies: ['PyTorch', 'OpenAI Gym', 'MuJoCo', 'ROS', 'Policy Gradients'],
    image: '/images/projects/reinforcement-learning.jpg',
    category: 'Reinforcement Learning',
    demoUrl: 'https://demo.example.com/project6',
    githubUrl: 'https://github.com/yourusername/rl-robotics',
    featured: false,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('All');
  const modalRef = useRef(null);
  
  useClickAway(modalRef, () => {
    if (selectedProject !== null) {
      setSelectedProject(null);
    }
  });

  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const featuredProjects = projects.filter(project => project.featured);

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
          subtitle="Explore my machine learning projects that demonstrate expertise in computer vision, natural language processing, and other AI domains."
        />
        
        {/* Featured Projects Showcase - Horizontal Scrolling */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-[#CCD6F6] mb-8 pl-4 border-l-4 border-[#7B61FF]"
          >
            Highlighted Work
          </motion.h3>
          
          <div className="relative">
            <div className="overflow-x-auto pb-8 -mx-4 px-4 hide-scrollbar">
              <div className="flex space-x-6" style={{ minWidth: 'max-content' }}>
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.1 }}
                    className="w-[350px] flex-shrink-0"
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
                          <p className="text-[#8892B0] text-sm line-clamp-3 mb-4">{project.description}</p>
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
                          <Button variant="outline" size="sm" className="w-full justify-center">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Gradient fades for horizontal scroll */}
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#112240] to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#112240] to-transparent pointer-events-none"></div>
          </div>
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
                    ? 'bg-gradient-to-r from-[#7B61FF] to-[#FF61D8] text-white font-medium'
                    : 'text-[#8892B0] hover:text-[#CCD6F6]'
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
                    <h3 className="text-xl font-bold text-[#CCD6F6] mb-2">{project.title}</h3>
                    <p className="text-[#8892B0] mb-4 line-clamp-2">{project.description}</p>
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
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            >
              <motion.div
                ref={modalRef}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25 }}
                className="bg-[#0A192F] rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] relative border border-[#233554]"
              >
                {projects.map((project) => (
                  project.id === selectedProject && (
                    <div key={project.id} className="flex flex-col h-full">
                      <div className="relative h-60 md:h-80 w-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] to-transparent"></div>
                        <button
                          className="absolute top-4 right-4 text-white bg-[#233554]/70 hover:bg-[#233554] p-2 rounded-full backdrop-blur-sm transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(null);
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <div className="absolute bottom-4 left-6">
                          <span className="bg-[#7B61FF] text-white text-xs py-1 px-3 rounded-full">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6 md:p-8 overflow-y-auto">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#CCD6F6] mb-4">{project.title}</h3>
                        <div className="space-y-6">
                          <p className="text-[#8892B0] leading-relaxed">{project.longDescription}</p>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-[#CCD6F6] mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 bg-[#233554] text-[#7B61FF] rounded-full text-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-4 pt-6">
                            <Button variant="primary" size="md" className="min-w-[120px]">
                              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                                Live Demo
                              </a>
                            </Button>
                            <Button variant="outline" size="md" className="min-w-[120px]">
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
                                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                                </svg>
                                View Code
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects; 