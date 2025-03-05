import React from 'react';
import './Homebanner.css';
import HeroImage  from '../assets/heroImage.jpg';
import BoyImage  from '../assets/boy.png';

function Herobanner() {
    // let typed = new typed(".text", {
    //     strings: ["Front-End React Developer", "UI/UX Designer", "Full-Stack Developer"],
    //     typeSpeed: 50,
    //     backSpeed: 50,
    //     loop: true
    // })
  return (
    <div className='bg-gray-200 w-[100%] h-screen'>
        <div className='flex flex-wrap justify-evenly align-center justtify-content-center gap-5 p-12 relative top-2'> 
            <div className='ml-17 w-130'>
                <h1 className='text-5xl font-semibold my-2'>Hi, It's Saikumar</h1>
                <h3 className='text-animation text-4xl font-semibold min-w-[280px]'>I'm a <span></span></h3>
                <p className='mt-3 text-xl text-zinc-600 text-2 font-medium'> with 4 years of experience in building applications and maintaining.</p>
                <div className='homebanner-socialmedia'>
                    <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/saikumar-pendyala/"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" classname="tabler-icon tabler-icon-brand-linkedin"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg></a>
                    <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/SaikumarP1107"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" classname="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
                </div>
            </div>
            <div className='w-[40%] h-[40%] justify-items-center'>
                <div className='hero-image'></div>
            </div>
        </div>
    </div>
  )
}

export default Herobanner
