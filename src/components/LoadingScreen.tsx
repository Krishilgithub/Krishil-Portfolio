"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Loading quotes to display during loading
const LoadingQuotes = [
  "Training neural networks...",
  "Optimizing hyperparameters...",
  "Preprocessing data...",
  "Building responsive layouts...",
  "Optimizing website performance...",
  "Crafting user interfaces...",
  "Animating components...",
  "Implementing React hooks...",
  "Deploying AI models...",
  "Generating insights...",
  "Creating intelligent systems...",
  "Enhancing machine learning pipeline...",
  "Compiling Next.js routes...",
  "Styling with Tailwind CSS...",
];

// Particle animation effect
const ParticleField = () => {
  const particles = Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    color:
      i % 5 === 0
        ? "#7B61FF"
        : i % 5 === 1
        ? "#FF61D8"
        : i % 5 === 2
        ? "#00EEFF"
        : i % 5 === 3
        ? "#FFFFFF"
        : "#FFA7FF",
    opacity: Math.random() * 0.6 + 0.2,
    speed: Math.random() * 20 + 10,
    delay: Math.random() * 2,
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
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -800],
            x: [0, Math.sin(particle.id) * 50],
            opacity: [0, particle.opacity, 0],
          }}
          transition={{
            duration: particle.speed,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Floating ML icons component
const FloatingIcons = () => {
  const icons = [
    { icon: "🧠", x: 15, y: 20, delay: 0, size: 1.5 },
    { icon: "📊", x: 70, y: 35, delay: 0.5, size: 1.2 },
    { icon: "🔍", x: 25, y: 70, delay: 1, size: 1.3 },
    { icon: "📈", x: 75, y: 80, delay: 1.5, size: 1.4 },
    { icon: "💻", x: 40, y: 50, delay: 2, size: 1.5 },
    { icon: "🤖", x: 85, y: 15, delay: 2.5, size: 1.2 },
    { icon: "📱", x: 15, y: 85, delay: 3, size: 1.3 },
    { icon: "🔮", x: 60, y: 60, delay: 3.5, size: 1.6 },
    { icon: "⚙️", x: 30, y: 30, delay: 4, size: 1.1 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute filter drop-shadow-glow"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: `${item.size * 2}rem`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0, -10, 0],
            scale: [1, 1.1, 1],
            filter: [
              "drop-shadow(0 0 0.5rem rgba(123, 97, 255, 0.3))",
              "drop-shadow(0 0 1rem rgba(255, 97, 216, 0.5))",
              "drop-shadow(0 0 0.5rem rgba(123, 97, 255, 0.3))",
            ],
          }}
          transition={{
            duration: 5,
            delay: item.delay,
            repeat: Infinity,
            repeatType: "loop",
          }}
          whileHover={{ scale: 1.5, rotate: 15 }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
};

// Neural network visualization with CSS - Enhanced version
const NeuralNetworkAnimation = ({ progress }: { progress: number }) => {
  const nodeCount = 24; // Increased node count for better visuals
  const nodes = Array.from({ length: nodeCount }).map((_, i) => ({
    id: i,
    active: i / nodeCount <= progress,
    x: 50 + 35 * Math.cos(i * ((2 * Math.PI) / nodeCount)),
    y: 50 + 35 * Math.sin(i * ((2 * Math.PI) / nodeCount)),
    size: Math.random() * 6 + 8,
  }));

  // Create inner network connections for more realistic neural network appearance
  const innerConnections = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      // Only connect some nodes, not all (to avoid overcrowding)
      if (Math.random() > 0.85 && j !== i + 1 && j !== i + nodeCount - 1) {
        innerConnections.push({
          id: `${i}-${j}`,
          source: nodes[i],
          target: nodes[j],
          active: nodes[i].active && nodes[j].active && Math.random() > 0.5,
        });
      }
    }
  }

  return (
    <div className="relative w-full h-full">
      {/* Draw the connections */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
        {nodes.map((node, i) => {
          if (i < nodeCount - 1) {
            return (
              <motion.line
                key={`line-${i}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${nodes[i + 1].x}%`}
                y2={`${nodes[i + 1].y}%`}
                stroke={
                  node.active && nodes[i + 1].active ? "#FF61D8" : "#7B61FF"
                }
                strokeWidth="1"
                strokeDasharray="5,5"
                animate={{
                  strokeDashoffset: [0, -10],
                  stroke:
                    node.active && nodes[i + 1].active
                      ? ["#FF61D8", "#7B61FF", "#FF61D8"]
                      : "#7B61FF",
                  opacity:
                    node.active && nodes[i + 1].active ? [0.3, 0.8, 0.3] : 0.2,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            );
          }
          return null;
        })}

        {/* Draw inner connections for more realistic neural network */}
        {innerConnections.map((conn) => (
          <motion.line
            key={`inner-${conn.id}`}
            x1={`${conn.source.x}%`}
            y1={`${conn.source.y}%`}
            x2={`${conn.target.x}%`}
            y2={`${conn.target.y}%`}
            stroke={conn.active ? "#00EEFF" : "#233554"}
            strokeWidth="0.5"
            strokeDasharray="3,6"
            animate={{
              strokeDashoffset: [0, -18],
              opacity: conn.active ? [0.1, 0.5, 0.1] : 0.1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </svg>

      {/* Draw the nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className={`absolute rounded-full ${
            node.active ? "bg-[#FF61D8]" : "bg-[#7B61FF]"
          }`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: `${node.size}px`,
            height: `${node.size}px`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: node.active ? [1, 1.2, 1] : 1,
            boxShadow: node.active
              ? [
                  "0 0 0px rgba(255, 97, 216, 0)",
                  "0 0 15px rgba(255, 97, 216, 0.8)",
                  "0 0 0px rgba(255, 97, 216, 0)",
                ]
              : "0 0 0px rgba(255, 97, 216, 0)",
          }}
          transition={{
            duration: 2,
            repeat: node.active ? Infinity : 0,
            repeatType: "loop",
            delay: node.id * 0.1,
          }}
        />
      ))}
    </div>
  );
};

// Interactive Code Lines effect
const CodeLines = () => {
  const lines = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    width: Math.random() * 60 + 20,
    delay: i * 0.2,
  }));

  return (
    <div className="absolute left-[5%] top-[15%] w-[25%] space-y-3 opacity-30 pointer-events-none">
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className="h-1.5 rounded-full bg-gradient-to-r from-[#7B61FF] to-[#FF61D8]"
          style={{ width: `${line.width}%` }}
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: [0, 1, 1, 0],
            width: [`${line.width}%`, `${line.width * 1.5}%`, `${line.width}%`],
          }}
          transition={{
            duration: 4,
            delay: line.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Mirror effect for code lines
const MirroredCodeLines = () => {
  const lines = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    width: Math.random() * 60 + 20,
    delay: i * 0.2 + 1,
  }));

  return (
    <div className="absolute right-[5%] top-[55%] w-[25%] space-y-3 opacity-30 pointer-events-none">
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className="h-1.5 rounded-full bg-gradient-to-r from-[#FF61D8] to-[#7B61FF]"
          style={{ width: `${line.width}%` }}
          initial={{ x: 100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: [0, 1, 1, 0],
            width: [`${line.width}%`, `${line.width * 1.5}%`, `${line.width}%`],
          }}
          transition={{
            duration: 4,
            delay: line.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isExiting, setIsExiting] = useState(false);
  const [showCompleteMessage, setShowCompleteMessage] = useState(false);
  const quoteTimerRef = useRef<NodeJS.Timeout | null>(null);
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Function for typewriter effect
  const typeEffect = (text: string, index: number = 0) => {
    if (index <= text.length) {
      setDisplayedText(text.substring(0, index));

      typingTimerRef.current = setTimeout(() => {
        typeEffect(text, index + 1);
      }, 30); // Speed up typing to fit in 3 seconds
    }
  };

  // Handle loading progress - precisely timed for 3 seconds
  useEffect(() => {
    // Calculate progress for exactly 3 seconds total load time
    // 300ms initial delay + 2500ms for loading progress + 200ms for exit = 3000ms total
    const totalLoadingTime = 2500; // ms
    const intervalTime = 50; // ms - more frequent updates
    const totalIncrements = totalLoadingTime / intervalTime;
    const incrementSize = 1 / totalIncrements;

    const timer = setTimeout(() => {
      // Start progress after initial delay
      const interval = setInterval(() => {
        setProgress((prev) => {
          // Add slight non-linear curve to progress for natural feel
          const nextProgress =
            prev + incrementSize * (1 + 0.3 * Math.sin(prev * Math.PI));

          if (nextProgress >= 1) {
            clearInterval(interval);
            setShowCompleteMessage(true);

            // Final delay before exit
            setTimeout(() => {
              setIsExiting(true);
              setTimeout(onLoadingComplete, 100);
            }, 100);

            return 1;
          }

          return nextProgress;
        });
      }, intervalTime);

      return () => clearInterval(interval);
    }, 300); // Shorter initial delay for 3s total

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  // Handle quote cycling with typewriter effect
  useEffect(() => {
    // Start the quote cycling - show only 1-2 quotes for 3 seconds total loading
    quoteTimerRef.current = setInterval(() => {
      setCurrentQuoteIndex((prev) => {
        const nextIndex = (prev + 1) % LoadingQuotes.length;

        // Clear any ongoing typing
        if (typingTimerRef.current) {
          clearTimeout(typingTimerRef.current);
        }

        // Start new typing effect
        typeEffect(LoadingQuotes[nextIndex]);

        return nextIndex;
      });
    }, 1200); // Faster cycling for 3s total time

    // Initial typing effect
    typeEffect(LoadingQuotes[0]);

    return () => {
      if (quoteTimerRef.current) clearInterval(quoteTimerRef.current);
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-[#0A192F] z-50 flex flex-col items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          clipPath: ["circle(150% at center)", "circle(0% at center)"],
          transition: { duration: 0.5, ease: "anticipate" }, // Shorter exit animation
        }}
        transition={{ duration: 0.5 }} // Faster fade-in
      >
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#7B61FF] rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-[#FF61D8] rounded-full filter blur-[150px] opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <ParticleField />
        <FloatingIcons />
        <CodeLines />
        <MirroredCodeLines />

        {/* Main Content with Neural Network */}
        <div className="relative glass w-11/12 max-w-lg rounded-xl p-6 shadow-glow z-10">
          <div className="flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={isExiting ? { y: -50, opacity: 0, scale: 0.8 } : {}}
              transition={{ duration: 0.4, exit: { duration: 0.3 } }} // Faster animations
              className="mb-4"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#7B61FF] to-[#FF61D8] p-0.5">
                <div className="w-full h-full rounded-xl bg-[#0A192F] flex items-center justify-center">
                  <span className="text-2xl font-bold gradient-text">KA</span>
                </div>
              </div>
            </motion.div>

            {/* Neural Network Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={isExiting ? { scale: 1.2, opacity: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.1,
                exit: { duration: 0.3 },
              }} // Faster animations
              className="w-64 h-64 mb-6 relative"
            >
              {/* Percentage overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <motion.div
                  className="text-4xl font-bold gradient-text"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }} // Faster animations
                >
                  {Math.floor(progress * 100)}%
                </motion.div>
              </div>

              <NeuralNetworkAnimation progress={progress} />
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              exit={isExiting ? { width: "100%", opacity: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.2,
                exit: { duration: 0.3 },
              }} // Faster animations
              className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-4"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#7B61FF] via-[#00EEFF] to-[#FF61D8]"
                style={{ width: `${progress * 100}%` }}
                animate={{
                  background: [
                    "linear-gradient(90deg, #7B61FF 0%, #00EEFF 50%, #FF61D8 100%)",
                    "linear-gradient(90deg, #FF61D8 0%, #7B61FF 50%, #00EEFF 100%)",
                    "linear-gradient(90deg, #00EEFF 0%, #FF61D8 50%, #7B61FF 100%)",
                    "linear-gradient(90deg, #7B61FF 0%, #00EEFF 50%, #FF61D8 100%)",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={isExiting ? { y: 20, opacity: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.3,
                exit: { duration: 0.3 },
              }} // Faster animations
              className="text-center space-y-2"
            >
              <AnimatePresence mode="wait">
                {showCompleteMessage ? (
                  <motion.div
                    key="complete"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }} // Faster animations
                    className="text-lg font-semibold text-[#CCD6F6] mb-1"
                  >
                    <span className="text-[#7B61FF]">100%</span> Complete -
                    Ready to Explore!
                  </motion.div>
                ) : (
                  <motion.div
                    key="loading"
                    exit={{ opacity: 0 }}
                    className="text-lg font-semibold text-[#CCD6F6] mb-1"
                  >
                    {Math.floor(progress * 100)}% Complete
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="text-sm text-[#8892B0] font-mono h-5 overflow-hidden">
                {displayedText}
                {!showCompleteMessage && (
                  <span className="animate-pulse">_</span>
                )}
              </div>
            </motion.div>
          </div>

          {/* Interactive Decorative Elements */}
          <motion.div
            className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#7B61FF]"
            animate={{
              boxShadow: [
                "0 0 0 rgba(123, 97, 255, 0)",
                "0 0 20px rgba(123, 97, 255, 0.8)",
                "0 0 0 rgba(123, 97, 255, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
          <motion.div
            className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-[#FF61D8]"
            animate={{
              boxShadow: [
                "0 0 0 rgba(255, 97, 216, 0)",
                "0 0 20px rgba(255, 97, 216, 0.8)",
                "0 0 0 rgba(255, 97, 216, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: 1,
            }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5, exit: { duration: 0.2 } }} // Faster animations
          className="mt-8 text-xs text-[#8892B0] font-mono"
        >
          {showCompleteMessage
            ? "Launching experience..."
            : "Building something amazing..."}
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
