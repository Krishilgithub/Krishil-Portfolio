"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../shared/AnimatedText";
import Button from "../shared/Button";
import Card from "../shared/Card";
import SectionHeading from "../shared/SectionHeading";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Contact methods including social platforms and email
const contactMethods = [
  {
    name: "Email",
    value: "krishilagrawal026@gmail.com",
    icon: (
      <svg
        className="w-5 h-5"
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
    ),
  },
  {
    name: "Phone",
    value: "+91 8320902499",
    icon: (
      <svg
        className="w-5 h-5"
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
    ),
  },
  {
    name: "Location",
    value: "Vadodara, Gujarat",
    icon: (
      <svg
        className="w-5 h-5"
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
    ),
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/krishil-agrawal-49aaa9283",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
      </svg>
    ),
  },
  {
    name: "GitHub",
    value: "github.com/Krishilgithub",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
];

// Collaboration opportunities
const collaborationTypes = [
  {
    title: "Project Collaboration",
    description: "Joint development of ML solutions and research papers",
    icon: "🤝",
  },
  {
    title: "Consulting",
    description: "Expert advice on ML implementation and optimization",
    icon: "💡",
  },
  {
    title: "Speaking Engagements",
    description: "Talks and workshops on ML topics for your event",
    icon: "🎤",
  },
  {
    title: "Code Review",
    description: "Feedback and optimization suggestions for ML projects",
    icon: "📝",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Send form data to the new API endpoint
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-[#0A192F] relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#112240] to-transparent opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#7B61FF] rounded-full filter blur-[150px] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Get in Touch" 
          subtitle="Feel free to reach out for collaboration opportunities, questions about my work, or just to say hello."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Contact Info & Collaboration */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card glassEffect className="p-6">
                <h3 className="text-xl font-bold text-[#CCD6F6] mb-4">
                  Connect With Me
                </h3>
                <p className="text-[#8892B0] mb-6">
                  Feel free to reach out through any of these platforms. I
                  typically respond within 24-48 hours.
                </p>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-center group">
                      <div className="w-10 h-10 rounded-lg bg-[#233554] flex items-center justify-center text-[#7B61FF] mr-4 group-hover:text-[#FF61D8] transition-colors">
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="text-[#CCD6F6] font-medium">
                          {method.name}
                        </h4>
                        <p className="text-sm text-[#8892B0] group-hover:text-[#7B61FF] transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
            
            {/* Collaboration Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card glassEffect className="p-6">
                <h3 className="text-xl font-bold text-[#CCD6F6] mb-4">
                  Let's Collaborate
                </h3>
                <p className="text-[#8892B0] mb-6">
                  I'm open to various collaboration opportunities in machine
                  learning and data science.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {collaborationTypes.map((collab, index) => (
                    <div
                      key={index}
                      className="bg-[#172A44] p-4 rounded-lg border border-[#233554] hover:border-[#7B61FF] transition-colors"
                    >
                      <div className="text-2xl mb-2">{collab.icon}</div>
                      <h4 className="text-[#CCD6F6] font-medium mb-1">
                        {collab.title}
                      </h4>
                      <p className="text-sm text-[#8892B0]">
                        {collab.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <div className="border-t border-[#233554] pt-6 mt-6">
              <h4 className="text-[#CCD6F6] font-semibold">
                Looking for a Collaboration?
              </h4>
              <p className="text-[#8892B0] mt-2">
                I'm currently open to new opportunities, both short-term
                projects and full-time positions.
              </p>
            </div>

            {/* Resume links */}
            <div className="border-t border-[#233554] pt-6 mt-6">
              <h4 className="text-[#CCD6F6] font-semibold mb-3">
                Download My Resume
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/resume/Krishil Agrawal Resume - Web.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#233554] hover:bg-[#2c4169] transition-colors rounded-lg text-[#CCD6F6]"
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
                  Web Development CV
                </a>
                <a
                  href="/resume/Krishil Agrawal Resume - ML.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#233554] hover:bg-[#2c4169] transition-colors rounded-lg text-[#CCD6F6]"
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
                  Machine Learning CV
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card glassEffect className="p-6">
              <h3 className="text-xl font-bold text-[#CCD6F6] mb-4">
                Send a Message
              </h3>
              <p className="text-[#8892B0] mb-6">
                Have a specific question or project in mind? Fill out the form
                below with the details.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#CCD6F6] mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-[#112240] border border-[#233554] rounded-lg text-[#CCD6F6] focus:outline-none focus:border-[#7B61FF] transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#CCD6F6] mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-[#112240] border border-[#233554] rounded-lg text-[#CCD6F6] focus:outline-none focus:border-[#7B61FF] transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[#CCD6F6] mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[#112240] border border-[#233554] rounded-lg text-[#CCD6F6] focus:outline-none focus:border-[#7B61FF] transition-colors"
                    placeholder="What's this regarding?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#CCD6F6] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-[#112240] border border-[#233554] rounded-lg text-[#CCD6F6] focus:outline-none focus:border-[#7B61FF] transition-colors resize-none"
                    placeholder="Tell me about your project, questions, or opportunity..."
                  />
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-center text-green-400"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-center text-red-400"
                  >
                    Something went wrong. Please try again later or contact me
                    directly.
                  </motion.div>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
        
        {/* Response Time Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <Card glassEffect className="p-4 border border-[#233554]">
            <p className="text-[#8892B0] text-sm">
              <span className="gradient-text font-medium">
                Fast Response Guarantee
              </span>{" "}
              — I commit to responding to all inquiries within 48 hours. Your
              projects and collaborations are important to me!
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 
