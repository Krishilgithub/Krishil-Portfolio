"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../shared/AnimatedText";
import Card from "../shared/Card";
import SectionHeading from "../shared/SectionHeading";
import {
  ArrowDownTrayIcon,
  XMarkIcon,
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

const achievements = [
  {
    id: 1,
    title: "Kaggle Competitions",
    description:
      "Participated in several Kaggle competitions and developed skills in practical machine learning.",
    icon: "🏆",
  },
  {
    id: 2,
    title: "Academic Projects",
    description:
      "Completed multiple academic ML projects with focus on practical applications.",
    icon: "📚",
  },
  {
    id: 3,
    title: "Open Source Learning",
    description:
      "Actively learning and experimenting with ML libraries and frameworks.",
    icon: "💻",
  },
];

const certificates = [
  {
    title: "Red Hat Enterprise Linux",
    issuer: "Red Hat",
    date: "March 2024",
    description:
      "Certification covering essential Red Hat Enterprise Linux system administration skills.",
    pdfPath: "/certificates/RHEL Certificate 23DCS001.pdf",
    imagePath: "/certificates/RHEL-Certificate.png",
  },
  {
    title: "Supervised Learning",
    issuer: "Coursera",
    date: "January 2024",
    description:
      "Advanced certificate covering machine learning algorithms and implementation techniques.",
    pdfPath: "/certificates/Supervised Learning Certificate.pdf",
    imagePath: "/certificates/Supervised-Learning-Certificate.png",
  },
];

const AchievementCard = ({
  achievement,
}: {
  achievement: (typeof achievements)[0];
}) => (
  <Card glassEffect>
    <div className="text-center space-y-4">
      <span className="text-4xl">{achievement.icon}</span>
      <h3 className="text-xl font-bold text-[#CCD6F6]">{achievement.title}</h3>
      <p className="text-[#8892B0]">{achievement.description}</p>
    </div>
  </Card>
);

const CertificateCard = ({
  certificate,
  isFlipped,
  onFlip,
  onDownload,
  onMaximize,
}: {
  certificate: (typeof certificates)[0];
  isFlipped: boolean;
  onFlip: () => void;
  onDownload: () => void;
  onMaximize: () => void;
}) => (
  <div className="relative w-full h-[240px]" style={{ perspective: "1000px" }}>
    <div
      className={`relative w-full h-full transition-transform duration-700`}
      style={{
        transformStyle: "preserve-3d",
        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
      }}
    >
      {/* Front of card */}
      <div
        style={{ backfaceVisibility: "hidden" }}
        className="absolute w-full h-full"
      >
        <Card glassEffect className="w-full h-full">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#CCD6F6]">
                {certificate.title}
              </h3>
              <span className="text-3xl">📜</span>
            </div>
            <div className="space-y-2">
              <p className="text-[#7B61FF]">{certificate.issuer}</p>
              <p className="text-[#8892B0] text-sm">{certificate.date}</p>
              <p className="text-[#8892B0] text-sm line-clamp-2">
                {certificate.description}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onFlip();
                }}
                className="mt-2 px-4 py-1.5 bg-[#233554] hover:bg-[#2a3f65] text-[#CCD6F6] rounded-md flex items-center space-x-2 transition-colors"
              >
                <EyeIcon className="h-5 w-5" />
                <span>View Certificate</span>
              </button>
            </div>
          </div>
        </Card>
      </div>

      {/* Back of card (certificate preview) */}
      <div
        className="absolute w-full h-full bg-[#112240] rounded-lg overflow-hidden"
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
      >
        <div className="relative h-full">
          <img
            src={certificate.imagePath}
            alt={certificate.title}
            className="w-full h-full object-contain p-2"
          />
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-[#0A192F]/90 flex justify-between items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onFlip();
              }}
              className="px-3 py-1 bg-[#233554] hover:bg-[#2a3f65] text-[#CCD6F6] rounded flex items-center space-x-1 transition-colors"
            >
              <XMarkIcon className="h-4 w-4" />
              <span>Close</span>
            </button>
            <div className="flex space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDownload();
                }}
                className="px-3 py-1 bg-[#233554] hover:bg-[#2a3f65] text-[#CCD6F6] rounded flex items-center space-x-1 transition-colors"
              >
                <ArrowDownTrayIcon className="h-4 w-4" />
                <span>Download</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onMaximize();
                }}
                className="px-3 py-1 bg-[#233554] hover:bg-[#2a3f65] text-[#CCD6F6] rounded flex items-center space-x-1 transition-colors"
              >
                <ArrowsPointingOutIcon className="h-4 w-4" />
                <span>Expand</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Achievements = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [maximizedImage, setMaximizedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"achievements" | "certificates">(
    "achievements"
  );

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const handleDownload = (pdfPath: string) => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = pdfPath.split("/").pop() || "certificate.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMaximize = (imagePath: string) => {
    setMaximizedImage(imagePath);
  };

  return (
    <section id="achievements" className="py-20 bg-[#112240]">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Achievements & Certifications"
          subtitle="My accomplishments and professional certifications."
        />

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-[#0A192F] rounded-lg p-1 shadow-lg">
            <button
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeTab === "achievements"
                  ? "bg-[#233554] text-[#CCD6F6]"
                  : "text-[#8892B0] hover:text-[#CCD6F6]"
              }`}
              onClick={() => setActiveTab("achievements")}
            >
              Achievements
            </button>
            <button
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeTab === "certificates"
                  ? "bg-[#233554] text-[#CCD6F6]"
                  : "text-[#8892B0] hover:text-[#CCD6F6]"
              }`}
              onClick={() => setActiveTab("certificates")}
            >
              Certifications
            </button>
          </div>
        </div>

        {/* Achievements Grid */}
        {activeTab === "achievements" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AchievementCard achievement={achievement} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Certificates Grid */}
        {activeTab === "certificates" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((certificate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CertificateCard
                  certificate={certificate}
                  isFlipped={flippedIndex === index}
                  onFlip={() => handleFlip(index)}
                  onDownload={() => handleDownload(certificate.pdfPath)}
                  onMaximize={() => handleMaximize(certificate.imagePath)}
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Maximized Certificate Modal */}
        {maximizedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative bg-[#112240] rounded-lg overflow-hidden w-full max-w-6xl"
            >
              <div className="flex justify-between items-center p-4 border-b border-[#233554]">
                <h3 className="text-xl font-bold text-[#CCD6F6]">
                  Certificate Preview
                </h3>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setMaximizedImage(null)}
                    className="text-[#CCD6F6] hover:text-[#7B61FF] transition-colors duration-300 flex items-center space-x-2"
                  >
                    <ArrowsPointingInIcon className="h-5 w-5" />
                    <span>Minimize</span>
                  </button>
                  <button
                    onClick={() => setMaximizedImage(null)}
                    className="text-[#CCD6F6] hover:text-[#7B61FF] transition-colors duration-300"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="relative p-4">
                <img
                  src={maximizedImage}
                  alt="Certificate"
                  className="w-full h-auto"
                />
                {/* Floating close button on image */}
                <button
                  onClick={() => setMaximizedImage(null)}
                  className="absolute top-8 right-8 bg-[#0A192F]/80 hover:bg-[#0A192F] text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Close certificate preview"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
