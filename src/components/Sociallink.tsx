import Link from 'next/link';
import React from 'react'
import { FaDownload, FaGithub,FaLinkedinIn, } from 'react-icons/fa';
import { FaFileArrowDown, FaTwitter } from 'react-icons/fa6';
import { SiLeetcode } from "react-icons/si";

const ResumeFile = '/vitthalkokare.pdf'


const SocilLinks: React.FC = () => {

  const ResumeDownload =(url: string)=>{
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute("download",'vtitthal');
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();

  }
  

  return (
    <div className='flex list-none items-center sm:text-3xl text-4xl text-white'>
                <li className='mx-1'><a href="https://www.linkedin.com/in/vitthalkokare/" rel='noopener noreferrer' target='_blank'><FaLinkedinIn /></a></li>
                <li className='mx-1'><a href="https://github.com/vitthalkokare"target="_blank" rel="noopener noreferrer"><FaGithub/></a></li>
                <li className='mx-1'><a href="https://leetcode.com/aquarius27/" target='_blank' rel='noopener noreferrer'><SiLeetcode/></a></li>
                <li className='mx-1'><a href="https://twitter.com/search?q=%23tech&src=typed_query" target='_blank' rel='noopener noreferrer'><FaTwitter/></a></li>
                <button onClick={()=>{ResumeDownload(ResumeFile)}} className='bg-green-500 outline-none hover:bg-green-600 box-border font-semibold text-lg p-1 rounded-2xl'>
                Resume <FaFileArrowDown/>
                  </button>
               
            </div> 
  ) 
}

export default SocilLinks
