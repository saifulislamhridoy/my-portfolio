import React from 'react';
import pic from '../../images/pic.png'
import {AiFillGithub,AiFillLinkedin,AiFillFacebook} from 'react-icons/ai'
import {FcDownload} from 'react-icons/fc'
import {GoLocation} from 'react-icons/go'

const Sidebar = () => {
    return (
        <div>
      <img className='w-32 h-32 rounded-full mx-auto' src={pic} alt='user avatar'></img>
      <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>Saiful Islam <span className='text-green'>Hridoy</span></h3>
      <p className='px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full'>Web Developer</p>
      <p>
          <a className='px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full flex items-center justify-center'download="resume.pdf" href="https://drive.google.com/file/d/1cdZkd-ZLLBFDyD3Apn361BpQzwQ2RsUR/view?usp=sharing"><FcDownload className="w-6 h-6"></FcDownload> Download Resume</a>
      </p>
   
   <div className='flex justify-around w-9/12 my-5 md:w-full mx-auto'>
       <a className='text-black' href="https://github.com/saifulislamhridoy"><AiFillGithub className="h-8 w-8 cursor-pointer"></AiFillGithub> </a>
       <a className='text-blue-800' href="https://www.linkedin.com/in/saifulislam1hridoy/"><AiFillLinkedin className="h-8 w-8 cursor-pointe"></AiFillLinkedin> </a>
       <a className='text-blue-600' href="https://www.facebook.com/saiful.islam.hridoy30/"><AiFillFacebook className="h-8 w-8 cursor-pointe"></AiFillFacebook> </a>
   </div>
      <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200' style={{marginLeft:"-1rem",marginRight:"-1rem"}}>
          <div className='flex items-center justify-center space-x-4'>
              <GoLocation></GoLocation>
              <span>Dhaka,Bangladesh</span>
          </div>
          <p className='my-2'>saifulislam1hridoy@gmail.com</p>
          <p className='my-2'>+880 1640772143</p>
      </div>
      <button onClick={()=>window.open('mailto:saifulislam1hridoy@gmail.com')} className='bg-gradient-to-r from-green to-blue-400 w-8/12 py-2 rounded-full px-5 text-white my-2'>Email Me</button>
      <button className='bg-gradient-to-r from-green to-blue-400 w-8/12 py-2 rounded-full px-5 text-white my-2'>Toggle Theme</button>
    </div>
    );
};

export default Sidebar;