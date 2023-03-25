import React from 'react'
import CursMainPreview from './CursMainPreview'
import cursDeBaza from './Imagini/curs_preview.jpg'
const CursMain = () => {

  return (
  <div className='relative font-montSerrat flex flex-col items-center justify-center h-full w-full py-[10rem]   bg-cover' >

        <h2 className='relative  text-[28px] lg:text-[48px] font-bold  px-[10rem] py-[.5rem] rounded-[8px] bg-[#0b2a24] text-white'>
          Cursuri
        </h2>
        <div className='relative lg:mt-[10rem] flex flex-col items-center '>
            <CursMainPreview imagine={cursDeBaza} titlu="Curs de baza 1D-3D & Foxy Intensiv" subTitlu="Curs de baza" descriere="Iti doresti sa ai propria ta AFACERE si sa-ti urmezi visul in domeniul BEAUTY? Acum este momentul sa CREZI in tine si sa FACI primul pas catre o noua CARIERA! Ne vom asigura ca drumul tau in lumea extensiilor de gene va duce catre SUCCES" redirectionare="curs-de-baza" />
            <CursMainPreview imagine={cursDeBaza} titlu="Curs de perfectionare 2D&3D" subTitlu="Curs de perfectionare" secondTitle="Cui i se adreseaza?"  descriere=" 

Tehnicienilor care au finalizat un curs de baza, au experienta minim 3 luni si doresc sa-si imbunatateasca tehnica, de asemenea, pot invata sa aplice noi curburi, tehnici si metode!
Vom rezolva problemele fiecarui cursant si vom adapta totul in functie acestia! " redirectionare="curs-de-perfectionare" />
          <CursMainPreview imagine={cursDeBaza} subTitlu="Doar tu si trainerul" secondTitle="*Posibilitate cu translator & alegerea datelor 
" titlu="Curs VIP de baza"  descriere="Te-ai gandit vreodata ca iti doresti sa participi la un curs de baza unde toata atentia trainerului sa fie indreptata asupra ta? Atunci cursul VIP este alegerea perfcta pentru tine! 

Iti doresti sa ai propria ta AFACERE si sa-ti urmezi visul in domeniul BEAUTY? Acum este momentul sa CREZI in tine si sa FACI primul pas catre o noua CARIERA! Ne vom asigura ca drumul tau in lumea extensiilor de gene va duce catre SUCCES"  redirectionare="curs-vip-de-baza" />
          <CursMainPreview imagine={cursDeBaza} titlu="Curs Efecte Speciale " secondTitle="Avansati"  descriere="Acest curs este dedicat tehnicienilor cu experienta de minim 6 luni ce isi doresc sa treaca la urmatorul nivel si sa ofere cele mai ravnite efecte precum: Foxy, Eyeliner, Kim K, Wet, s.a. 

Daca te-ai plafonat si iti doresti sa incerci noi efecte, acesta este cursul perfect pentru tine, 90% dintre clientii nostri aleg efectul Foxy, trendul anului! Haide cu noi sa iti aratam cum poti sa iti maresti baza de clienti cu aceste efecte!  " redirectionare="curs-efecte-speciale" />

        </div>
    
    </div>
  )
}

export default CursMain