import React from 'react'
import { motion } from 'framer-motion'
function AdminPanelBlog() {
  return (
    <div>
         <motion.h2
      whileInView={{opacity:1, y: 0}}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="my-20 text-center text-4xl">VPN Admin Pannel</motion.h2>    

    </div>
  )
}

export default AdminPanelBlog