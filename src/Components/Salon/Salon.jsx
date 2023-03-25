import React from 'react'
import teamGeneral from './Images/Team.jpeg'
import Member from './Member'
const Salon = () => {
  return (
    <div className='relative flex  flex-col items-center w-full h-full '>
        <div className='flex flex-col items-center w-[65rem] bg-[FEFEFE] top-[6rem] h-full'>
   
            <div className='relative flex justify-center items-center h-[40rem]'>
            <img src={teamGeneral} className="w-full h-[40rem]" />
            <div className='absolute flex justify-center items-center   w-full h-[40rem] bg-black bg-opacity-[20%]'>
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
        </div>
    </div>
  )
}

export default Salon