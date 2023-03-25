import React, { useEffect, useRef } from "react";
import { useState } from 'react'
import salon from "./salon.mp4"
import lorena from './Lorena.png'
import {AiOutlineArrowDown} from 'react-icons/ai'
const Hero = () => {
    let imagini=[]
    const videoEl = useRef(null);
    const [hovered,setHovered]=useState(false);
    const attemptPlay = () => {
      videoEl &&
        videoEl.current &&
        videoEl.current.play().catch(error => {
          console.error("Error attempting to play", error);
        });
    };
    useEffect(() => {
      attemptPlay();
    }, []);
  return (
    <div className='relative flex justify-center items-center w-full h-screen '>
     <video
          style={{ maxWidth: "100%", width: "100%",height:"100%", margin: "0 auto",objectFit:"cover"}}
          playsInline
          loop
          muted
        
          alt="All the devices"
          src={salon}
          ref={videoEl}
        />
        <div  className="absolute   w-full h-full bg-black opacity-[70%]">
      
          </div>
          <div className="absolute top-[12rem] lg:top-0 flex flex-col items-center justify-start lg:justify-center w-full h-full">
          <h1 className="font-montSerrat z-30 lg:mt-[0rem] text-[42px] lg:text-[64px] text-white font-extrabold w-[20rem] lg:w-[40rem]  text-center">LORENA LASH STUDIO</h1>
  
          <div className="flex justify-between mt-[3rem] lg:mt-[5rem] ">
          <button onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} className={`flex ${hovered ? "animate-[aboutBtn_.3s_ease-in-out_forwards]" : "animate-[aboutBtnReverse_.3s_ease-in-out_forwards]"} text-white border-[1px] border-white px-[2rem] lg:px-[4rem] py-[.7rem] text-[12px] lg:text-[15px]`}>EXPLOREAZA <span className="text-[18px] lg:text-[22px] ml-2 " ><AiOutlineArrowDown /></span></button>
      
          </div>
          </div>
          <img src={lorena} className="absolute left-[1rem] bottom-[-6rem] lg:bottom-[-10rem] lg:bottom-[-5rem] mt-[5rem] w-[220px] lg:w-[400px] h-[381px] lg:h-[693px] "/>
        <div className="absolute z-30 left-0 w-full h-[7rem] bg-gradient-to-b from-transparent to-[#0b2a24] bottom-0 "/>
    </div>
  )
}

export default Hero