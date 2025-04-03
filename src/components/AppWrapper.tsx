'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './LoadingScreen';

// Set visit expiry time to 3 hours (in milliseconds)
const VISIT_EXPIRY_TIME = 3 * 60 * 60 * 1000;

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [transitionComplete, setTransitionComplete] = useState(false);

  useEffect(() => {
    // Check if this is first visit or if session has expired
    const checkFirstVisit = () => {
      // For development, always show loading screen
      const isDevelopment = process.env.NODE_ENV === 'development';
      if (isDevelopment) {
        return true;
      }
      
      // Check session storage for current visit
      const hasVisited = sessionStorage.getItem('hasVisited');
      
      // Check local storage for last visit time
      const lastVisitTime = localStorage.getItem('lastVisitTime');
      const currentTime = Date.now();
      
      let isFirstVisit = !hasVisited;
      
      // If it's been more than the expiry time since last visit, treat as first visit
      if (lastVisitTime) {
        const timeSinceLastVisit = currentTime - parseInt(lastVisitTime, 10);
        if (timeSinceLastVisit > VISIT_EXPIRY_TIME) {
          isFirstVisit = true;
        }
      }
      
      // Update session and local storage
      sessionStorage.setItem('hasVisited', 'true');
      localStorage.setItem('lastVisitTime', currentTime.toString());
      
      return isFirstVisit;
    };
    
    const isFirstVisit = checkFirstVisit();
    setIsFirstLoad(isFirstVisit);
    
    // Track user activity to reset last activity time
    const resetActivity = () => {
      localStorage.setItem('lastVisitTime', Date.now().toString());
    };
    
    // Add event listeners for user activity
    window.addEventListener('click', resetActivity);
    window.addEventListener('keypress', resetActivity);
    window.addEventListener('scroll', resetActivity);
    window.addEventListener('mousemove', resetActivity);
    
    return () => {
      // Clean up event listeners
      window.removeEventListener('click', resetActivity);
      window.removeEventListener('keypress', resetActivity);
      window.removeEventListener('scroll', resetActivity);
      window.removeEventListener('mousemove', resetActivity);
    };
  }, []);

  // Handle completion of loading
  const handleLoadingComplete = () => {
    setLoading(false);
    
    // Add a shorter delay before showing content for smoother transition
    setTimeout(() => {
      setTransitionComplete(true);
    }, 400);
  };

  // Define page transition variants
  const pageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.98
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom ease curve for smooth transition
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      {/* Show loading screen based on loading state and whether it's the first load */}
      {loading && isFirstLoad && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}
      
      {/* Main content with enhanced transitions */}
      <AnimatePresence mode="wait">
        {(!loading || !isFirstLoad) && (
          <motion.div
            key="main-content"
            initial="hidden"
            animate={transitionComplete || !isFirstLoad ? "visible" : "hidden"}
            exit="exit"
            variants={pageVariants}
            className="min-h-screen"
          >
            <motion.div variants={contentVariants}>
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppWrapper; 