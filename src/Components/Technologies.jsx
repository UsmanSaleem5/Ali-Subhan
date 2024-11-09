import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import {FaNodeJs  } from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import { FaHtml5 } from "react-icons/fa"
import {FaCss3Alt } from 'react-icons/fa'
import {FaJs } from 'react-icons/fa'
import {RiTailwindCssFill  } from 'react-icons/ri'
import {FaBootstrap   } from 'react-icons/fa'
import {FaGithub    } from 'react-icons/fa'
import {FaAws     } from 'react-icons/fa'
import { animate, motion } from 'framer-motion'



const iconVarients = (duration) => ({
      initial : {y:-10},
      animate :{
            y:[10, -10],
            transition:{
                  duration:duration,
                  ease:"linear",
                  repeat: Infinity,
                  repeatType:"reverse"
            }
      }
})




function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24 '>
         <motion.h1
         whileInView={{opacity:1 , y: 0}}
         initial = {{opacity:0 , y:-100}}
         transition={{duration:0.5}}

         
         className='my-20 text-center text-4xl '>Technologies </motion.h1>
         <div className="flex flex-wrap items-center justify-center mt-[1pc] gap-4">
            <motion.div
            variants={iconVarients(2.5)}
            inherit = "initial"
            animate = "animate"
              
            className="rounded-2xl border-4 border-neutral-800 p-4">
                  <RiReactjsLine className='text-7xl text-cyan-400 '/>
            </motion.div>
            <motion.div
            variants={iconVarients(2)}
            inherit = "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                  <TbBrandNextjs className='text-7xl '/>
            </motion.div>
            <motion.div
            variants={iconVarients(1)}
            inherit = "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                  <SiMongodb className='text-7xl text-green-500 '/>
            </motion.div>
            <motion.div 
            variants={iconVarients(3)}
            inherit = "initial"
            animate = "animate"

            className="rounded-2xl border-4 border-neutral-800 p-4">
                  <FaNodeJs className='text-7xl text-green-500 '/>
            </motion.div>
            <motion.div
            variants={iconVarients(4)}
            inherit = "initial"
            animate = "animate"

            className="rounded-2xl border-4 border-neutral-800 p-4">
                  <SiExpress className='text-7xl text-green-500 '/>
            </motion.div>
            <motion.div
            variants={iconVarients(5)}
            inherit = "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                  <FaGithub className='text-7xl text-white '/>
            </motion.div>
            
         </div>
         <div className="flex flex-wrap items-center justify-center mt-[1pc] gap-4">
         
            <motion.div
            variants={iconVarients(2.6)}
            inherit = "initial"
            animate = "animate"

            className="rounded-2xl border-4 border-neutral-800 p-4">
                  <FaHtml5 className='text-7xl text-red-500 '/>
            </motion.div>
            <motion.div
            variants={iconVarients(2.4)}
            inherit = "initial"
            animate = "animate"

            className="rounded-2xl border-4 border-neutral-800 p-4">
                  <FaCss3Alt className='text-7xl text-blue-500 '/>
            </motion.div>
            <motion.div
            variants={iconVarients(2.3)}
            inherit = "initial"
            animate = "animate"

            className="rounded-2xl border-4 border-neutral-800 p-4">
                  <FaJs  className='text-7xl text-yellow-500 '/>
            </motion.div>

         <motion.div
         variants={iconVarients(2.2)}
         inherit = "initial"
         animate = "animate"

         className="rounded-2xl border-4 border-neutral-800 p-4">
                  <RiTailwindCssFill   className='text-7xl text-blue-600 '/>
            </motion.div>
            <motion.div
            variants={iconVarients(2.1)}
            inherit = "initial"
            animate = "animate"
            
            className="rounded-2xl border-4 border-neutral-800 p-4">
                  <FaBootstrap    className='text-7xl text-purple-700 '/>
            </motion.div>
            <motion.div
            variants={iconVarients(2)}
            inherit = "initial"
            animate = "animate"

            className="rounded-2xl border-4 border-neutral-800 p-4">
                  <FaAws    className='text-7xl text-white '/>
            </motion.div>

         </div>
        
    </div>
  )
}

export default Technologies