import React from 'react'
import logo from '../../public/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaWhatsapp} from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
function NavBar() {
  return (
    <nav>
<div className=" flex mb-20 items-center justify-between py-2 ">
<div className="flex flex-shrink-0 items-center">
<a href="/"><img className="my-8 sm:mx-2 w-[5rem] mx-6  sm:w-28 " src={logo} alt="" /></a>
</div>
<div className="m-8 flex items-center justify-center gap-4 text-2xl ">
<a href='http://linkedin.com/in/alisubhan' target="_blank"  rel="noopener noreferrer" ><FaLinkedin/> </a>
<a href='https://github.com/UsmanSaleem5' target="_blank"  rel="noopener noreferrer" ><FaGithub/> </a>

<a href='https://wa.me/+923469613122' target="_blank"><FaWhatsapp/> </a>

<a href='https://www.instagram.com/alliee.903/' target="_blank"  rel="noopener noreferrer" ><FaInstagram/> </a>

</div>


</div>
    </nav>
  )
}

export default NavBar