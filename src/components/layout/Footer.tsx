"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Social link items with icons
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Krishilgithub",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/krishil-agrawal-49aaa9283",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Kaggle",
    href: "https://www.kaggle.com/krishil1",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M17.8 17.7c-.1 0-.2 0-.3-.1l-4.8-4.1L9 17.7c-.2.2-.5.2-.8 0c-.2-.2-.2-.6 0-.8l4-3.5l-4-3.4c-.2-.2-.2-.6 0-.8c.2-.2.5-.2.8 0l3.8 3.2l4.8-4.1c.2-.2.6-.1.8.1c.2.2.1.6-.1.8L13.6 13l4.5 3.9c.2.2.3.5.1.8C18.1 17.6 18 17.7 17.8 17.7z" />
        <path d="M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2S22 6.5 22 12zM12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8s8-3.6 8-8S16.4 4 12 4z" />
      </svg>
    ),
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/AM7GNY5zb4/",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
      </svg>
    ),
  },
];

// Navigation sections
const navigationSections = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "ML Blog", href: "#" },
      { label: "Research Papers", href: "#" },
      { label: "Tutorials", href: "#" },
      { label: "Datasets", href: "#" },
    ],
  },
];

// Tech stack items
const techStack = [
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "Scikit-learn", color: "#F7931E" },
  { name: "Python", color: "#3776AB" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A192F] relative">
      {/* Decorative top border with gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-[#7B61FF] via-[#FF61D8] to-[#7B61FF]"></div>

      {/* Background decorations */}
      <div className="absolute top-24 right-[5%] w-64 h-64 bg-[#7B61FF] rounded-full filter blur-[150px] opacity-5 pointer-events-none"></div>
      <div className="absolute bottom-24 left-[5%] w-64 h-64 bg-[#FF61D8] rounded-full filter blur-[150px] opacity-5 pointer-events-none"></div>

      {/* Newsletter signup - top section */}
      <div className="py-12 border-b border-[#112240]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#112240] rounded-xl p-8 shadow-glow relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-gradient-to-br from-[#7B61FF]/20 to-[#FF61D8]/20 blur-xl"></div>

            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-[#CCD6F6] mb-2">
                  Stay Updated
                </h3>
                <p className="text-[#8892B0] max-w-md">
                  Subscribe to my newsletter for the latest updates on ML
                  research, projects, and tutorials.
                </p>
              </div>
              <div>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-2 bg-[#0A192F] border border-[#233554] rounded-lg text-[#CCD6F6] flex-grow focus:outline-none focus:border-[#7B61FF] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2 bg-gradient-to-r from-[#7B61FF] to-[#FF61D8] rounded-lg text-white font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-[#8892B0] text-xs mt-2">
                  No spam. Just valuable content. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7B61FF] to-[#FF61D8] p-0.5 mr-3">
                <div className="w-full h-full rounded-lg bg-[#0A192F] flex items-center justify-center">
                  <span className="text-lg font-bold gradient-text">KA</span>
                </div>
              </div>
              <h3 className="text-xl font-bold gradient-text">
                Krishil Agrawal Portfolio
              </h3>
            </div>
            <p className="text-[#8892B0] mb-6">
              Exploring the frontiers of artificial intelligence and web
              development through innovative projects and creative solutions.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#112240] flex items-center justify-center text-[#8892B0] hover:text-[#7B61FF] hover:bg-[#172A44] transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {navigationSections.map((section, index) => (
            <div key={index} className="md:col-span-1">
              <h4 className="text-lg font-semibold text-[#CCD6F6] mb-4 border-b border-[#233554] pb-2">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-[#8892B0] hover:text-[#7B61FF] transition-colors duration-300 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7B61FF] mr-2 opacity-70"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-[#CCD6F6] mb-4 border-b border-[#233554] pb-2">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start text-[#8892B0]">
                <svg
                  className="w-5 h-5 mr-3 mt-0.5 text-[#7B61FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span>krishilagrawal026@gmail.com</span>
              </li>
              <li className="flex items-start text-[#8892B0]">
                <svg
                  className="w-5 h-5 mr-3 mt-0.5 text-[#7B61FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span>+91 8320902499</span>
              </li>
              <li className="flex items-start text-[#8892B0]">
                <svg
                  className="w-5 h-5 mr-3 mt-0.5 text-[#7B61FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span>Vadodara, Gujarat</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tech stack */}
        <div className="mt-12 pt-8 border-t border-[#112240]">
          <h4 className="text-sm uppercase tracking-wider text-center text-[#8892B0] mb-4">
            Technologies I Work With
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#112240] text-[#8892B0] rounded-full text-sm border border-[#233554] hover:border-[color:var(--tech-color)] transition-colors"
                style={{ "--tech-color": tech.color } as React.CSSProperties}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright and Credits */}
        <div className="mt-12 pt-8 border-t border-[#112240] flex flex-col md:flex-row justify-between items-center text-center md:text-left text-[#8892B0] text-sm">
          <p>© {currentYear} Krishil Agrawal Portfolio. All rights reserved.</p>

          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <span>Made with</span>
            <span className="text-red-500">❤</span>
            <span>using</span>
            <span className="px-2 py-1 bg-[#112240] rounded text-xs">
              Next.js
            </span>
            <span className="px-2 py-1 bg-[#112240] rounded text-xs">
              React
            </span>
            <span className="px-2 py-1 bg-[#112240] rounded text-xs">
              TailwindCSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
