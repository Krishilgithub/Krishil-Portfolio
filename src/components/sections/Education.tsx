"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "../shared/AnimatedText";
import Card from "../shared/Card";
import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";

const education = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "Charusat University of Gujarat",
    location: "Gujarat, India",
    period: "2023 - 2027",
    description:
      "Currently pursuing a comprehensive Computer Science program focusing on core CS fundamentals, algorithms, and modern software development practices.",
    courses: [
      "Data Structures & Algorithms",
      "Web Development",
      "Database Management",
      "Machine Learning",
    ],
    logo: "/images/education/depstar.jpg",
    achievements:
      "CGPA: 9.29. Active member of coding clubs and technical societies.",
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    field: "Class XII",
    institution: "Shannen School",
    location: "India",
    period: "2022 - 2023",
    description:
      "Completed higher secondary education with a focus on science and mathematics, building a strong foundation for future computer science studies.",
    courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    logo: "/images/education/shannen.jpg",
    achievements:
      "Achieved a percentile of 98.01. Participated in various science and technology competitions.",
  },
  {
    id: 3,
    degree: "Secondary Education",
    field: "Class X",
    institution: "Shannen School",
    location: "India",
    period: "2020 - 2021",
    description:
      "Received comprehensive education with emphasis on foundational sciences and mathematics.",
    courses: ["Mathematics", "Science", "Computer Applications", "English"],
    logo: "/images/education/shannen.jpg",
    achievements:
      "Achieved a percentage of 97.5. Recognized for excellence in science and mathematics.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-[#0A192F] relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#112240] to-transparent opacity-60"></div>

      <div className="container mx-auto px-4">
        <SectionHeading
          title="Education"
          subtitle="My academic journey and qualifications in the fields of Web Development and Machine Learning."
        />

        {/* Education Timeline */}
        <div className="relative max-w-5xl mx-auto px-4">
          {/* Timeline Line - centered properly */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7B61FF] via-[#FF61D8] to-[#8892B0]"></div>

          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.3 }}
              className="relative mb-16 pl-10 md:pl-20"
            >
              {/* Timeline Dot - positioned exactly on the timeline */}
              <div 
                className="absolute w-5 h-5 rounded-full bg-[#7B61FF] z-10" 
                style={{ 
                  left: '16px', 
                  top: '24px',
                  transform: 'translateX(-50%)',
                  '@media (min-width: 768px)': {
                    left: '32px'
                  }
                }}
              >
                <div className="w-full h-full rounded-full bg-[#7B61FF] animate-ping opacity-30"></div>
              </div>

              {/* Year indicator */}
              <div className="absolute left-0 top-5 transform -translate-x-full pr-4 hidden lg:block">
                <div className="w-10 h-10 rounded-lg bg-[#233554] flex items-center justify-center text-[#7B61FF] font-mono text-sm border border-[#7B61FF]/30">
                  {item.period.split(" - ")[0]}
                </div>
              </div>

              {/* Content */}
              <Card
                glassEffect
                hoverEffect
                className="transform transition-all duration-300 hover:-translate-y-1"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="p-6"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 bg-[#233554] rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 border border-[#7B61FF]/30">
                      <Image
                        src={item.logo}
                        alt={item.institution}
                        width={50}
                        height={50}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#CCD6F6]">
                        {item.degree} in {item.field}
                      </h3>
                      <div className="text-[#7B61FF] font-medium">
                        {item.institution}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-[#8892B0]">
                        <span>{item.location}</span>
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#7B61FF] opacity-50"></span>
                        <span className="font-semibold text-[#CCD6F6]">
                          {item.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-[#7B61FF] mb-1 uppercase tracking-wide">
                        Overview
                      </h4>
                      <p className="text-[#8892B0] italic border-l-2 border-[#7B61FF] pl-4">
                        {item.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-[#7B61FF] mb-1 uppercase tracking-wide">
                        Achievements
                      </h4>
                      <p className="text-[#8892B0] border-l-2 border-[#FF61D8] pl-4">
                        {item.achievements}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-[#7B61FF] mb-2 uppercase tracking-wide">
                        Key Courses
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.courses.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 bg-[#233554] text-[#8892B0] rounded-full text-sm hover:bg-[#2A3F63] transition-colors cursor-default"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto mt-24 text-center"
        >
          <Card glassEffect className="border border-[#233554]/50">
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#CCD6F6] mb-3">
                Continuous Learning Journey
              </h3>
              <p className="text-[#8892B0] mb-6">
                I'm committed to staying at the forefront of AI and machine
                learning advancements through continuous education and research.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/resume/Krishil Agrawal Resume - Web.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#233554] hover:bg-[#2A3F63] transition-colors rounded-lg text-[#CCD6F6] border border-[#7B61FF]/30"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  Web Development Resume
                </a>
                <a
                  href="/resume/Krishil Agrawal Resume - ML.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#233554] hover:bg-[#2A3F63] transition-colors rounded-lg text-[#CCD6F6] border border-[#FF61D8]/30"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  Machine Learning Resume
                </a>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
