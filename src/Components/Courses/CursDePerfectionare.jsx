import React from 'react'
import cursDePerfectionare from './Imagini/curs_preview.jpg'
import cursDePerfectionareVideo from './Imagini/cursDePerfectionareVideo.mp4'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
const CursDePerfectionare = () => {
    const videoEl = useRef(null);
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
      const navigate= useNavigate();
  return (
    <div className='flex flex-col justify-center items-center w-full h-full py-[5rem] lg:py-[10rem]'>
        <div className='flex lg:flex-row flex-col items-center lg:items-start'>
        <div className=' lg:ml-[2rem] flex flex-col items-center w-[90%] lg:w-[25rem]'>           
            <img src={cursDePerfectionare} className=" w-[21rem] lg:w-[25rem] h-[28rem]" />
            <button onClick={()=>{localStorage.setItem("cumparaCurs","Curs De Perfectionare");navigate("/checkout")}} className='mt-[2rem] border-[2px] border-black w-full text-[18px]  h-[3rem] rounded-[8px] tracking-[6px]'>CUMPARA ACUM</button>
            <div className='relative flex flex-col items-left w-full mt-[2rem]'>
                <h3 className='mb-[1rem] lg:text-[18px] text-justify'>Achiti   <span className='font-bold'>AVANSUL</span> de <span className='font-bold'>300 de lei </span> aici sau la locatie pentru a-ti rezerva locul, restul sumei se achita in prima zi de curs</h3>
                <h3 className='text-[24px] font-thin'>2 ZILE <span className='absolute right-2 font-extrabold text-[#DAA520]'> 2500 lei </span></h3>
                <h3 className='text-[24px] font-thin mt-[1rem]'>1 ZI<span className='absolute right-2 font-extrabold text-[#DAA520]'>1500  lei </span> </h3>
             
            </div>
      
            </div>
            <div className='relative lg:ml-[4rem] mt-[2rem] lg:mt-0 flex flex-col items-center w-[90%] lg:w-[40rem]'>
                    <h4 className='text-[28px] font-norican'>Curs de perfectionare</h4>
                    <h3 className='text-[42px] font-norican font-bold text-center'>Curs de perfectionare 2D&3D</h3>
                    <div className='w-[90%]  text-justify mt-[2rem] font-montSerrat'>
                        <h4 className='font-bold text-center text-[20px] py-[1rem]'>Cui i se adreseaza?</h4> 
                     <p>
                        Tehnicienilor care au finalizat un curs de baza, au experienta minim 3 luni si doresc sa-si imbunatateasca tehnica, de asemenea, pot invata sa aplice noi curburi, tehnici si metode!
                        Vom rezolva problemele fiecarui cursant si vom adapta totul in functie acestia! 
                    </p>
                    <h4 className='font-bold mt-[1rem] text-[20px] text-center '>1 ZI</h4>
                    
                    <ol>
                        <li className='mt-[.5rem]'><span className='font-bold'>10.00 </span>- Partea Teoretica (Prezentare Curburi Speciale: A+, L, L+, ML, Efecte speciale: WET, KIM K, FOXY)</li>
                        <li className='mt-[.5rem]'><span className='font-bold'>13.00 </span>- Pauza de masa(Inclusa in pret)</li>
                        <li className='mt-[.5rem]'><span className='font-bold'>14.00 </span>- Demonstratie trainer pe modelul fiecarui cursant</li>
                        <li className='mt-[.5rem]'><span className='font-bold'>14.30 </span>- Partea Practica la alegere(Orice efect special/curbura/ etc)</li> 
                        <li className='mt-[.5rem]'><span className='font-bold'>18.00 </span>- Inmanarea Diplomelor, Poze </li>
                    </ol>
                    <h4 className='font-bold mt-[1rem] text-[20px] text-center '>2 ZILE</h4>
                    <p className='mt-[.5rem]'>A doua zi este optionala/la alegere, daca va doriti sa executati doua modele diferite/doua efecte sau sa va perfectionati pe acel efect.</p>
                    <ol>    
                        <li className='mt-[1rem]'><span className='font-bold'>10.00 </span>-  Intrebari si Raspunsuri din Parter Teoretica</li>
                        <li className='mt-[.5rem]'><span className='font-bold'>11.00 </span>- Partea Practica pe model(Orice Efect/Curbura)</li>
                        <li className='mt-[.5rem]'><span className='font-bold'>16.00 </span>- Poze, Diploma, Q&A</li>
                    
                    </ol>
                    </div>
                    
            </div>
            
        </div>
        <div className='h-[40rem] w-full flex justify-center  mt-[5rem]'>
                            <video
                                style={{ maxWidth: "100%", width: "25rem",height:"100%", margin: "100 auto",objectFit:"cover"}}
                                playsInline
                                loop
                                muted
                                controls
                                alt="All the devices"
                                src={cursDePerfectionareVideo}
                                ref={videoEl}
                                />
                </div>
    </div>
  )
}

export default CursDePerfectionare