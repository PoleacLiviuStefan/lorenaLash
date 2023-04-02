import React from 'react'

import Member from './Member'
const Salon = () => {
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
                <Member nume="Lorena DanoiU" rol="Trainer" descriere="Buna! Ma numesc Lorena Danoiu, sunt de 5 ani in domeniu si in prezent activitatea mea de desfasoara atat in academie ca trainer, cat si in salon ca tehnician. Eu te pot ajuta cu lucrari foarte rapide, voluminoase si efecte speciale, ador sa creezi look-uri noi asa ca iti voi asculta ideile urmand sa le pun in aplicare, te astept cu drag"/>
                <Member nume="Diana Elena Cotet" rol="Master" descriere="Buna! Ma numesc Diana Elena Cotet si activez de 1 an jumatate in salon, cariera mea a inceput chiar in academia Lorena Lash Studio, sub indrumarea Lorenei, care mi-a propus apoi sa activez in salon.Iti pot accesoriza privirea cu extensii de gene Foxy, Dark Illusion si efecte speciale! Abia astept sa ne vedem! "/>
                <Member nume="Damian Denisa" rol="Master" descriere="Buna! Eu sunt Denisa Damian si m-am alaturat Lorenei in urma cu 1 an imediat ce am terminat cursul de baza in academie, am decis sa fac parte din echipa ei!  Daca iti doresti un look natural, fresh, care sa te scoata din anonimat, atunci te astept cu drag la programare! "/>
                <Member nume="Catalina Trica " rol="Brow Artist" descriere="Buna, sunt Catalina si iti pot spune ca eu iti pot creea sprancenele la care ai visat dintotdeauna! Fie ca vrei stilizare, vopsit sau laminare, eu te voi asculta si iti voi reda o privire armonioasa conform preferintelor tale! Haide si tu sa iti conturezi privirea!"/>
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
    </div>
  )
}

export default Salon