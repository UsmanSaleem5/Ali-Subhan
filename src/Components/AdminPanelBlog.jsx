import React from 'react';
import { motion } from 'framer-motion';
import dashboard from '../assets/dashboard-admin.png';
import user_management from '../assets/user-management.png';
import server_management from '../assets/server_admin.png';
import admin_setting from '../assets/setting-admin.png';

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
        src={dashboard}
        alt="Admin Panel Dashboard Overview"
        className="mb-8 rounded shadow-lg"
      />

      <motion.h3
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="mt-10 mb-6 text-3xl"
      >
        Comprehensive User Management
      </motion.h3>

      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-lg"
      >
        The VPN Admin Panel offers a highly detailed user management system that enables administrators to have full control over users. Admins can perform CRUD (Create, Read, Update, Delete) operations seamlessly. They can add new users, update existing profiles with the latest information, or suspend accounts when needed. This granular level of control ensures that the admin panel remains flexible and secure. Additionally, the system is designed to handle large user bases efficiently, making it ideal for scaling operations without compromising performance.
      </motion.p>

      <motion.img
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        src={user_management}
        alt="User Management Section"
        className="mb-8 rounded shadow-lg"
      />

      <motion.h3
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="mt-10 mb-6 text-3xl"
      >
        Server Management at Your Fingertips
      </motion.h3>

      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-lg"
      >
        Managing servers has never been easier. The admin panel allows administrators to perform CRUD operations on servers, providing complete control over the network infrastructure. Admins can add new servers to scale up operations, update configurations to meet security and performance needs, or remove outdated servers that are no longer required. This feature ensures the VPN remains flexible, scalable, and aligned with business goals. With real-time updates and intuitive interfaces, managing servers becomes a streamlined task, even for large networks.
      </motion.p>

      <motion.img
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        src={server_management}
        alt="Server Management Section"
        className="mb-8 rounded shadow-lg"
      />

<motion.h3
  whileInView={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0, y: 50 }}
  transition={{ duration: 0.5 }}
  className="mt-10 mb-6 text-3xl"
>
  Settings and Configurations
</motion.h3>

<motion.p
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ opacity: 0, x: -100 }}
  transition={{ duration: 0.5 }}
  className="mb-8 text-lg"
>
  The <strong>Settings and Configurations</strong> section of the VPN Admin Panel is designed to provide unparalleled control and flexibility to administrators. 
  It includes tools for adjusting key VPN parameters such as server locations, connection protocols, and user access policies. 
  Administrators can seamlessly toggle between different security protocols, ensuring the VPN remains both safe and adaptive to varying user needs. 
  The system also allows for network restrictions and bandwidth limits to optimize performance. 
  Every configuration is built with user experience in mind, offering a responsive interface where changes are applied in real-time. 
  This section empowers admins to maintain operational efficiency while keeping security and accessibility at the forefront.
</motion.p>

<motion.img
  whileInView={{ opacity: 1, scale: 1 }}
  initial={{ opacity: 0, scale: 0.8 }}
  transition={{ duration: 0.5 }}
  src={admin_setting}
  alt="Settings and Configurations"
  className="mb-8 rounded shadow-lg"
/>

      
    </div>
  );
}

export default AdminPanelBlog;
  