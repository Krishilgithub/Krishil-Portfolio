'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../shared/AnimatedText';
import Card from '../shared/Card';
import SectionHeading from '../shared/SectionHeading';

const achievements = [
  {
    id: 1,
    title: 'Kaggle Grandmaster',
    description: 'Achieved Grandmaster status on Kaggle with multiple gold medals in ML competitions.',
    icon: '🏆',
  },
  {
    id: 2,
    title: 'Research Publication',
    description: 'Published research paper on advanced ML techniques in top-tier conference.',
    icon: '📚',
  },
  {
    id: 3,
    title: 'Open Source Contribution',
    description: 'Major contributor to popular ML libraries and frameworks.',
    icon: '💻',
  },
];

const certifications = [
  {
    id: 1,
    title: 'Deep Learning Specialization',
    provider: 'Coursera',
    date: '2023',
    link: 'https://example.com/cert1',
  },
  {
    id: 2,
    title: 'Machine Learning Engineer',
    provider: 'Google Cloud',
    date: '2022',
    link: 'https://example.com/cert2',
  },
  {
    id: 3,
    title: 'Data Science Professional',
    provider: 'IBM',
    date: '2021',
    link: 'https://example.com/cert3',
  },
];

const AchievementCard = ({ achievement }: { achievement: typeof achievements[0] }) => (
  <Card glassEffect>
    <div className="text-center space-y-4">
      <span className="text-4xl">{achievement.icon}</span>
      <h3 className="text-xl font-bold text-[#CCD6F6]">{achievement.title}</h3>
      <p className="text-[#8892B0]">{achievement.description}</p>
    </div>
  </Card>
);

const CertificationCard = ({ certification }: { certification: typeof certifications[0] }) => (
  <Card glassEffect>
    <div className="space-y-2">
      <h3 className="text-lg font-bold text-[#CCD6F6]">{certification.title}</h3>
      <p className="text-[#7B61FF]">{certification.provider}</p>
      <p className="text-[#8892B0] text-sm">{certification.date}</p>
      <a
        href={certification.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#7B61FF] hover:text-[#FF61D8] transition-colors text-sm"
      >
        View Certificate →
      </a>
    </div>
  </Card>
);

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-[#112240]">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Achievements & Certifications" 
          subtitle="Recognition and certifications in the field of machine learning."
        />

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CertificationCard certification={certification} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 