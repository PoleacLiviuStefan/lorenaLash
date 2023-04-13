import React,{useState} from 'react'
import lorena1 from './Images/Lorena_1.jpeg'
import lorena2 from './Images/Lorena_2.jpeg'
import lorena3 from './Images/Lorena_3.jpeg'
import lorena4 from './Images/Lorena_4.jpeg'
import lorena5 from './Images/Lorena_5.jpeg'
import diana1 from './Images/Diana_1.jpeg'
import diana2 from './Images/Diana_2.jpeg'
import diana3 from './Images/Diana_3.jpeg'
import diana4 from './Images/Diana_4.jpeg'
import diana5 from './Images/Diana_5.jpeg'
import denisa1 from './Images/Denisa_1.jpeg'
import denisa2 from './Images/Denisa_2.jpeg'
import denisa3 from './Images/Denisa_3.jpeg'
import denisa4 from './Images/Denisa_4.jpeg'
import catalina1 from './Images/Catalina_1.jpeg'
import catalina2 from './Images/Catalina_2.jpeg'
import catalina3 from './Images/Catalina_3.jpeg'
import catalina4 from './Images/Catalina_4.jpeg'
import catalina5 from './Images/Catalina_5.jpeg'

import Member from './Member'
import FullImg from './FullImg'
const Salon = () => {
  const [showFullImg,setShowFullImg]=useState(-1);
  return (
    <div name="Salon" className='relative flex  flex-col items-center w-full h-full '>
        <div className='flex flex-col items-center w-full lg:w-[60rem] bg-[FEFEFE] top-[6rem] h-full font-montSerrat '>
   
            <div className='relative flex justify-center items-center  h-[35rem] lg:h-[40rem]'>
            <div  className='relative  w-screen lg:w-[60rem] h-[35rem] lg:h-[40rem] bg-teamMobileBg  lg:bg-teamBg  bg-cover bg-center '  />
            <div className='absolute flex justify-center items-center   w-full h-full bg-black bg-opacity-[20%]'>
            <h1 className='absolute font-oldStandard text-[64px] mt-[10rem] font-bold text-white'>ECHIPA</h1>
            <h2 className='flex items-center font-montSerrat w-[20rem] mt-[20rem] text-center text-white'><span className='w-[4rem] h-[1px] bg-white'/>DESCOPERA ECHIPA NOASTRA DE OAMENI TALENTATI<span className='w-[4rem] h-[1px] bg-white'/></h2>
            </div>
            </div>
            <div className='w-full lg:w-[60rem]  flex lg:flex-row flex-col items-center lg:items-start flex-wrap justify-between'>
                <div onClick={()=>setShowFullImg(0)}><Member poze={[lorena1,lorena2,lorena3,lorena4,lorena5]} nume="Lorena Danoiu" rol="Trainer" descriere="Buna! Ma numesc Lorena Danoiu, sunt de 5 ani in domeniu si in prezent activitatea mea se desfasoara atat in academie ca trainer, cat si in salon ca tehnician. Eu te pot ajuta cu lucrari foarte rapide, voluminoase si efecte speciale, ador sa creez look-uri noi asa ca iti voi asculta ideile urmand sa le pun in aplicare, te astept cu drag"/>
                </div>
                <div onClick={()=>setShowFullImg(1)}><Member poze={[diana1,diana2,diana3,diana4,diana5]} nume="Diana Elena Cotet" rol="Master" descriere="Buna! Ma numesc Diana Elena Cotet si activez de 1 an jumatate in salon, cariera mea a inceput chiar in academia Lorena Lash Studio, sub indrumarea Lorenei, care mi-a propus apoi sa activez in salon.Iti pot accesoriza privirea cu extensii de gene Foxy, Dark Illusion si efecte speciale! Abia astept sa ne vedem! "/>
                </div>
                <div onClick={()=>setShowFullImg(2)}><Member poze={[denisa1,denisa2,denisa3,denisa4]} nume="Damian Denisa" rol="Master" descriere="Buna! Eu sunt Denisa Damian si m-am alaturat Lorenei in urma cu 1 an imediat ce am terminat cursul de baza in academie, am decis sa fac parte din echipa ei!  Daca iti doresti un look natural, fresh, care sa te scoata din anonimat, atunci te astept cu drag la programare! "/>
                </div>
                <div onClick={()=>setShowFullImg(3)}>
                <Member poze={[catalina1,catalina2,catalina3,catalina4,catalina5]} nume="Catalina Trica " rol="Brow Artist" descriere="Buna, sunt Catalina si iti pot spune ca eu iti pot creea sprancenele la care ai visat dintotdeauna! Fie ca vrei stilizare, vopsit sau laminare, eu te voi asculta si iti voi reda o privire armonioasa conform preferintelor tale! Haide si tu sa iti conturezi privirea!"/>
                </div>
            </div>
            <h2 className='relative whitespace-nowrap  text-[28px] lg:text-[48px] font-bold   px-[10rem] py-[.5rem] rounded-[8px] bg-[#0b2a24] text-white mt-[10rem]'>
             LISTA PRETURI
          </h2> 
          <ul className='grid grid-cols-2 place-items-center w-[90%] lg:w-[60rem] mt-[3rem] mb-[10rem] text-[14px] lg:text-[15px]' >
            <li className='font-bold text-[18px]'>Extensii Gene by Lorena</li>
            <li className='text-[16px] ml-4 lg:ml-0 w-[9rem]'>Aplicare (Intretinere)</li>
            <li className='w-[10rem]'>2D</li>
            <li className='w-[7rem]'>230 lei (200 lei)</li>
            <li className='w-[10rem]'>2D&3D</li>
            <li className='w-[7rem]'>250 lei (220 lei)</li>
            <li className='w-[10rem]'>3D</li>
            <li className='w-[7rem]'>270 lei (240 lei)</li>
            <li className='w-[10rem]'>Russian Volume</li>
            <li className='w-[7rem]'>300 lei</li>
            <li className='w-[10rem]'>Hollywood Volume</li>
            <li className='w-[7rem]'>330 lei</li>
            <li className='w-[10rem]'>Wet, Eyeliner, Raze</li>
            <li className='w-[7rem]'>300 lei (270 lei)</li>
            <li className='w-[10rem]'>Accesorii</li>
            <li className='w-[7rem]'>30 lei</li>
            <li className='w-[10rem]'>Demontare Extensii</li>
            <li className='w-[7rem]'>30 lei</li>
            <li className='font-bold text-[18px] mt-[1rem]'>Extensii Gene by Master</li>
            <li></li>
            <li className='w-[10rem]'>1D&2D</li>
            <li className='w-[7rem]'>170 lei (140 lei)</li>
            <li className='w-[10rem]'>2D</li>
            <li className='w-[7rem]'>200 lei (170 lei)</li>
            <li className='w-[10rem]'>2D&3D</li>
            <li className='w-[7rem]'>220 lei (190 lei)</li>
            <li className='w-[10rem]'>3D</li>
            <li className='w-[7rem]'>240 lei (210 lei)</li>
            <li className='w-[10rem]'>Wet,  Eyeliner, Raze</li>
            <li className='w-[7rem]'>270 lei (240 lei)</li>
            <li className='w-[10rem]'>Demontare</li>
            <li className='w-[7rem]'>30 lei</li>
            <li className='font-bold text-[18px] mt-[1rem]'>BROWS by Catalina</li>
            <li></li>
            <li className=' w-[10rem]'>Stilizare Sprancene</li>
            <li className='w-[7rem]'>60 lei</li>
            <li className='w-[10rem]'> Laminare Sprancene</li>
            <li className='w-[7rem]'>120 lei</li>
            <li className='w-[10rem]'>Stilizare+Vopsire</li>
            <li className='w-[7rem]'>100 lei</li>
            <li className='w-[10rem]'>Stilizare+Laminare</li>
            <li className='w-[7rem]'>150 lei</li>
            <li className='w-[10rem]'>Stilizare+Lami+Vopsire</li>
            <li className='w-[7rem]'>200 lei</li>
          </ul>
        </div>
          
            
          <div className={`z-40 fixed flex justify-center items-center left-0 top-0 w-screen h-screen ${showFullImg===-1 && "hidden"}`}>
          <div onClick={()=>setShowFullImg(-1)} className={`fixed ${showFullImg===-1 && "hidden"} z-10 w-screen h-screen bg-black bg-opacity-[40%]`}>
         
         </div>
         <div className={`z-20 ${showFullImg!==0 && "hidden" } `}  >
          <FullImg imagini={[lorena1,lorena2,lorena3,lorena4,lorena5]} />
          </div>
          <div className={`z-20 ${showFullImg!==1 && "hidden" } `}  >
          <FullImg imagini={[diana1,diana2,diana3,diana4,diana5]} />
          </div>
          <div className={`z-20 ${showFullImg!==2 && "hidden" } `}  >
          <FullImg imagini={[denisa1,denisa2,denisa3,denisa4]} />
          </div>
          <div className={`z-20 ${showFullImg!==3 && "hidden" } `}  >
          <FullImg imagini={[catalina1,catalina2,catalina3,catalina4,catalina5]} />
          </div>
          </div>
              </div>
  )
}

export default Salon