'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from '../shared/AnimatedText';
import Button from '../shared/Button';
import Image from 'next/image';
import SectionHeading from '../shared/SectionHeading';

// Particle animation effect
const ParticleAnimation = () => {
  const particles = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    color: i % 3 === 0 ? '#7B61FF' : i % 3 === 1 ? '#FF61D8' : '#00EEFF',
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ensure all resources are loaded before animating
    if (document.readyState === 'complete') {
      setIsLoaded(true);
    } else {
      window.addEventListener('load', () => setIsLoaded(true));
      return () => window.removeEventListener('load', () => setIsLoaded(true));
    }
  }, []);

  useEffect(() => {
    // Animate in only after component is fully mounted and content is loaded
    if (isLoaded) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Gradient with enhanced effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#112240] to-[#0A192F] opacity-90" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#7B61FF] rounded-full filter blur-[150px] opacity-10 animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-[#FF61D8] rounded-full filter blur-[150px] opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
      
      <ParticleAnimation />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content with enhanced animation */}
          <AnimatePresence mode="wait">
            {isLoaded && (
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7B61FF] to-[#FF61D8] p-0.5 mr-4"
                  >
                    <div className="w-full h-full rounded-xl bg-[#0A192F] flex items-center justify-center">
                      <span className="text-lg font-bold gradient-text">KA</span>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: isVisible ? 0 : -20, opacity: isVisible ? 1 : 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-sm font-mono text-[#8892B0]"
                  >
                    Full Stack & Machine Learning Developer
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="space-y-4"
                >
                  <h1 className="text-5xl md:text-6xl font-bold text-[#E6F1FF] leading-[1.3]">
                    <span className="text-[#7B61FF] block">Krishil</span>
                    <span className="block mb-4">Agrawal</span>
                  </h1>
                  <div className="absolute -bottom-3 left-0 w-48 h-2 bg-gradient-to-r from-[#7B61FF] to-[#FF61D8] rounded-full opacity-50"></div>
                  <p className="text-xl text-[#CCD6F6] mt-6">
                    Building intelligent systems at the intersection of Machine Learning and Web Development
                  </p>
                </motion.div>

                {/* Tech stack badges */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {['TensorFlow', 'React', 'Next.js', 'Node.js', 'Python', 'TypeScript'].map((tech, i) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-sm bg-[#112240] text-[#8892B0] rounded-full border border-[#233554] inline-flex items-center"
                    >
                      <span className="w-2 h-2 rounded-full mr-2" style={{ 
                        backgroundColor: i % 3 === 0 ? '#7B61FF' : i % 3 === 1 ? '#FF61D8' : '#00EEFF' 
                      }}></span>
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="relative group transition-all duration-300"
                  >
                    <span className="relative z-10">Explore Projects</span>
                    <span className="absolute top-0 left-0 w-full h-full rounded-lg blur opacity-30 group-hover:opacity-70 transition-all duration-300 bg-gradient-to-r from-[#7B61FF] to-[#FF61D8]"></span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="transition-all duration-300 hover:border-[#7B61FF]"
                  >
                    Contact Me
                  </Button>
                </motion.div>
                
                {/* Social links */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="flex items-center gap-4 pt-4"
                >
                  <a href="#" className="text-[#8892B0] hover:text-[#7B61FF] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-[#8892B0] hover:text-[#7B61FF] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-[#8892B0] hover:text-[#7B61FF] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-[#8892B0] hover:text-[#7B61FF] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Photo Area */}
          <AnimatePresence mode="wait">
            {isLoaded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-[400px] lg:h-[600px] relative"
              >
                <div className="relative h-full w-full flex items-center justify-center">
                  {/* Decorative gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7B61FF]/10 to-[#FF61D8]/10 rounded-full blur-3xl"></div>
                  
                  {/* Hexagon frame for the photo */}
                  <div className="relative w-[280px] h-[320px] md:w-[320px] md:h-[360px] lg:w-[380px] lg:h-[420px]">
                    {/* Hexagon shaped mask and border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF] via-[#FF61D8] to-[#00EEFF] mask-hexagon animate-pulse-slow"></div>
                    <div className="absolute inset-[3px] bg-[#0A192F] mask-hexagon"></div>
                    
                    {/* Image placeholder - replace with your photo */}
                    <div className="absolute inset-[6px] mask-hexagon overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center bg-[#112240]/50 backdrop-blur-sm">
                        <p className="text-[#8892B0] text-center p-8">
                          Add your photo here<br/>
                          Recommended size: 600x800px
                        </p>
                        {/* Uncomment and update the path to use your actual photo */}
                        {/* 
                        <Image 
                          src="/images/profile.jpg" 
                          alt="Your Name" 
                          fill
                          className="object-cover"
                        />
                        */}
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#FF61D8] blur-sm opacity-60"></div>
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#00EEFF] to-[#7B61FF] blur-sm opacity-60"></div>
                    
                    {/* Floating icons to represent skills */}
                    <motion.div
                      className="absolute -right-10 top-1/4 bg-[#112240] p-2 rounded-lg shadow-glow"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <svg className="w-8 h-8 text-[#7B61FF]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.7C6.5 21.7 2 17.2 2 11.7C2 6.2 6.5 1.7 12 1.7C17.5 1.7 22 6.2 22 11.7C22 17.2 17.5 21.7 12 21.7ZM12 19.7C16.4 19.7 20 16.1 20 11.7C20 7.3 16.4 3.7 12 3.7C7.6 3.7 4 7.3 4 11.7C4 16.1 7.6 19.7 12 19.7ZM7 10.7H9V14.7H7V10.7ZM15 8.7H17V14.7H15V8.7ZM11 6.7H13V14.7H11V6.7Z" />
                      </svg>
                    </motion.div>
                    
                    <motion.div
                      className="absolute -left-10 bottom-1/4 bg-[#112240] p-2 rounded-lg shadow-glow"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                    >
                      <svg className="w-8 h-8 text-[#FF61D8]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10.5 15.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm8-10.5v14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2zM15 7H5c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm5 1.5c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm0 3c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm0 3c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1z" />
                      </svg>
                    </motion.div>
                    
                    <motion.div
                      className="absolute right-1/4 -bottom-10 bg-[#112240] p-2 rounded-lg shadow-glow"
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <svg className="w-8 h-8 text-[#00EEFF]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.5 9H12v1.5h1.5V9zm0 3H12v1.5h1.5V12zm0-6H12v1.5h1.5V6zm0 9H12v1.5h1.5V15zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18H6v-7.5h1.5V18zm0-10.5H6v-1.5h1.5v1.5zM18 18h-7.5v-1.5H18V18zm0-3h-7.5v-1.5H18V15zm0-3h-7.5v-1.5H18V12zm0-3h-7.5v-1.5H18V9zm0-3h-7.5v-1.5H18v1.5z" />
                      </svg>
                    </motion.div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7B61FF]/5 to-[#FF61D8]/5 rounded-full blur-3xl animate-pulse-slow"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-[#8892B0] text-xs mb-2 font-mono">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-[#7B61FF] rounded-full p-2">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-1.5 h-1.5 bg-[#7B61FF] rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 