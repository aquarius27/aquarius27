import Link from 'next/link';
import React from 'react'
import { FaGithub,FaLinkedinIn, } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { SiLeetcode } from "react-icons/si";

const SocilLinks: React.FC = () => {
  return (
    <div className='flex list-none items-center sm:text-3xl text-4xl text-white'>
                <li className='mx-1'><a href="https://www.linkedin.com/in/vitthalkokare/" rel='noopener noreferrer' target='_blank'><FaLinkedinIn /></a></li>
                <li className='mx-1'><a href="https://github.com/vitthalkokare"target="_blank" rel="noopener noreferrer"><FaGithub/></a></li>
                <li className='mx-1'><a href="https://leetcode.com/aquarius27/" target='_blank' rel='noopener noreferrer'><SiLeetcode/></a></li>
                <li className='mx-1'><a href="https://twitter.com/search?q=%23tech&src=typed_query" target='_blank' rel='noopener noreferrer'><FaTwitter/></a></li>
                <button className='bg-green-500 box-border font-semibold text-lg p-1 rounded-2xl'><a href="/Vitthalkokare.pdf" download={'./vitthalkokare.pdf'}>Resume</a></button>

            </div> 
  )
}

export default SocilLinks
