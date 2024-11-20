import React from 'react';
import { motion } from 'framer-motion';

function AdminPanelBlog() {
  return (
    <div className="container mx-auto px-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        VPN Admin Panel Development Journey
      </motion.h2>

      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-lg"
      >
        While I can't share the link to this project due to its confidential nature, I'm excited to walk you through the journey of creating a professional VPN Admin Panel. My goal was to build a secure, reliable, and user-friendly backend system to manage VPN operations, user activity, and configurations with ease.
      </motion.p>

      <motion.img
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        src="path-to-image-dashboard-overview.jpg"
        alt="Admin Panel Dashboard Overview"
        className="mb-8 rounded shadow-lg"
      />

      <motion.h3
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="mt-10 mb-6 text-3xl"
      >
        Building the Core Dashboard
      </motion.h3>

      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-lg"
      >
        I designed the dashboard as the central hub for admins, featuring real-time stats, user analytics, and active session tracking. My main focus was on clarity, so admins could quickly access essential information.
      </motion.p>

      <motion.img
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        src="path-to-image-user-management.jpg"
        alt="User Management Section"
        className="mb-8 rounded shadow-lg"
      />

      <motion.h3
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="mt-10 mb-6 text-3xl"
      >
        User Management with Granular Control
      </motion.h3>

      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-lg"
      >
        The admin panel includes an advanced user management system, allowing administrators to view, edit, or suspend user accounts with a single click. This feature required careful design to ensure both security and usability.
      </motion.p>

      <motion.img
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        src="path-to-image-analytics.jpg"
        alt="Analytics Section"
        className="mb-8 rounded shadow-lg"
      />

      <motion.h3
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="mt-10 mb-6 text-3xl"
      >
        Deep Analytics and Insights
      </motion.h3>

      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-lg"
      >
        To make informed decisions, administrators have access to in-depth analytics. This section provides user activity breakdowns, session durations, and data usage summaries.
      </motion.p>

      <motion.img
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        src="path-to-image-settings.jpg"
        alt="Settings and Configurations"
        className="mb-8 rounded shadow-lg"
      />

      <motion.h3
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="mt-10 mb-6 text-3xl"
      >
        Configurations and Settings
      </motion.h3>

      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-lg"
      >
        The configuration panel allows admins to adjust VPN settings dynamically, including server locations, security protocols, and network restrictions. These adjustments are streamlined to ensure the application remains user-friendly and responsive.
      </motion.p>
    </div>
  );
}

export default AdminPanelBlog;
