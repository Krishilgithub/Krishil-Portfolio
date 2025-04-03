'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
    </Layout>
  );
} 