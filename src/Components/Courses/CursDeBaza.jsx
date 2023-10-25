import React,{useRef,useEffect} from 'react'
import cursDeBaza from './Imagini/cursDeBaza_preview.jpeg'
import cursDeBazaVideo from './Imagini/cursDeBazaZiua1video.mp4'
import { useNavigate } from 'react-router-dom';
const CursDeBaza = () => {
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

      const navigate=useNavigate();
  return (
    <div className='flex justify-center items-center w-full h-full py-[5rem] lg:py-[10rem]'>
        
        <div className='flex lg:flex-row flex-col items-center lg:items-start'>
            <div className='relative lg:ml-[2rem] flex flex-col items-center w-[90%] lg:w-[25rem]'>           
            <img alt="Curs de Baza" src={cursDeBaza} className=" w-[21rem] lg:w-[25rem] " />
            <button onClick={()=>{localStorage.setItem("cumparaCurs","Curs De Baza (Avans)");navigate("/checkout");window.scrollTo({top:0,left:0})}} className='mt-[2rem] border-[2px] border-black w-full text-[18px] font-bold  h-[3rem] rounded-[8px] tracking-[6px] animate-[buyBtnReverse_.3s_ease-in-out_forwards] hover:animate-[buyBtn_.3s_ease-in-out_forwards]'>CUMPARA ACUM</button>
            <div className='relative flex flex-col items-left w-full mt-[2rem]'>
                <h3 className='mb-[1rem]  lg:text-[18px] text-justify'>Achiti   <span className='font-bold'>AVANSUL</span> de <span className='font-bold'>300 de lei </span> aici sau la locatie pentru a-ti rezerva locul, restul sumei se achita in prima zi de curs</h3>
           
                <h3 className='flex    justify-between w-full text-[18px] lg:text-[20px] font-thin mt-[1rem]'>CURS FARA KIT <div  className='flex flex-col items-center '><h3 className='relative  text-[24px] font-extrabold text-[#DAA520]'> 1500 lei </h3> <h3 className='relative flex flex-col justify-center items-center text-[18px] font-extrabold text-gray-300'> <span>(500 Lei Reducere)</span> De la 2000 lei  </h3> </div> </h3>

             
                <p className='w-[90%] lg:w-[30rem] text-[18px] mt-[1rem] text-justify'><span className='font-bold text-[18px] lg:text-[20px] text-[#DAA520]'>Kitul include :</span> <ol className='list-decimal ml-6 grid grid-cols-2 w-full text-[13px] lg:text-[16px]'><li>Adeziv</li> <li>2 Pensete</li> <li className='text-left'> Caseta Extensii Gene</li> <li> Placuta</li> <li> Piatra</li> <li> Remover</li> <li> Aplicatoare</li> <li> Microbrosh-uri</li> <li>Periute</li> <li> Cleanser</li> <li> Primer</li></ol></p>
            </div>
            <div className='h-[40rem] mt-[5rem]'>
                            <video
                                style={{ maxWidth: "100%", width: "100%",height:"100%", margin: "100 auto",objectFit:"cover"}}
                                playsInline
                                loop
                                muted
                                controls
                                alt="All the devices"
                                src={cursDeBazaVideo}
                                ref={videoEl}
                                />
                </div>
            </div>
            <div className='relative  lg:ml-[4rem] mt-[2rem] lg:mt-0 flex flex-col items-center w-[90%] lg:w-[40rem]'>
                    <h4 className='text-[28px] font-norican'>Curs de baza</h4>
                    <h2 className='text-[42px] font-oswald font-bold text-center'>Curs de baza 1D-3D & Foxy Intensiv</h2>
                    <div className='w-[90%]  text-justify mt-[2rem] font-montSerrat'>
                        <p>
                    Iti doresti sa ai propria ta AFACERE si sa-ti urmezi visul in domeniul BEAUTY? Acum este momentul sa CREZI in tine si sa FACI primul pas catre o noua CARIERA! Ne vom asigura ca drumul tau in lumea extensiilor de gene va duce catre SUCCES
                     </p>
                    <h4 className='py-[1rem] text-[20px] font-bold text-center'> Ce iti punem la dispozitie ? </h4>
                    <ol className='list-decimal '>
                   <li className='py-2'> 
                    DIPLOMA cu RECUNOASTERE INTERNATIONALA (Holograma ce se regaseste pe diploma fiecarui participant la curs)
                   </li>
                   <li className='py-2'> 
                    Teorie pe care sa o studiezi acasa in confortul tau, urmand ca la curs sa discutam pe temele din document. 
                    </li>
                    <li className='py-2'> 
                    Ma voi implica atat eu, cat si asistenta mea in pregatirea ta, deci vei avea 2 persoane de la care poti invata
                    </li>
                    <li className='py-2'>
                    Practica pe 2 MODELE UMANE
                    </li>
                    <li className='py-2'> 
                    EXERCITII atat pe manechin, cat si pe sponge
                    </li>
                    <li className='py-2'>
                    O APLICARE FOXY(NEW TREND)
                    </li> 
                    <li className='py-2'> 
                    MODUL special dedicat INSTAGRAM, TIK TOK, FACEBOOK ADS
                    </li>
                    <li className='py-2'>
                    CUM sa te PROMOVEZI? 
                    </li>
                    <li className='py-2'> 
                    APLICATII pentru EDITARE FOTO/VIDEO
                    </li>
                    <li className='py-2'> 
                    Se poate oferi KIT COMPLET pentru a exersa urmatoarea luna
                    </li>
                    <li className='py-2'    >
                    Toate PRODUSELE necesare in zilele de curs sunt puse la dispozitie de catre noi 
                    Posibilitate de COLABORARE in salon
                    </li>
                    </ol>
                    <h4 className='mt-[1rem] text-[20px] font-bold text-center'>Structurat in 3 zile</h4> 
                    <p className='mt-[.5rem]'>
                        <span className='font-bold'>Ziua 1 :</span><br /> Partea Teoretica o vei primi Online(Suport de Curs) 
                    </p>
                    <p className='mt-[.5rem]'>
                        <span className='font-bold'>Ziua 2 : </span> 
                        <ul>
                        <li>Intrebari si Raspunsuri partea Teoretica</li>
                        <li>Practica pe manechin 1D(Manechin)</li>
                        <li>Pauza de masa</li>
                        <li>Practica 1D pe model uman(Clasic)</li>
                        </ul>
                    </p>
                    <p className='mt-[.5rem]'>
                    <span className='font-bold'>Ziua 3 : </span> 
                    <ul>
                    <li>Practica pe manechin(2D&3D)(Sponge)</li>
                    <li>Pauza de masa</li>
                    <li>Practica 2D&3Dpe model uman(Foxy- NEW) </li>
                    <li>Inmanarea diplomelor & Editare Foto & Promovare</li>
                    </ul>
                    </p>
                    <p className='mt-[.7rem]'>Mesele & Bauturile sunt asigurate de catre noi. </p>
                    <p className='mt-[.5rem]'>
                    <span className='font-bold'>Bonus! </span> 
                    <br />Foxy & Curbura ML - noul TREND
                    </p>
                    <h4 className='mt-[2rem] text-[20px] font-bold text-center'>
                    De ce sa dai startul VISULUI tau alaturi de MINE? 
                    </h4>
                    <p className='mt-[1rem]'>
                    Sunt FONDATOAREA •Lorena Lash Studio• Salon specializat pe Extensii De Gene&Sprancene
                    </p>
                    <p className='mt-[.5rem]'>
                    Dincolo de munca pe care am depus-o pentru a ajunge aici, PASIUNEA a facut diferenta! Exact asta te voi invata pe tine sa faci, sa transformi MUNCA in PASIUNE! 
                    </p>
                    <p className='mt-[.5rem]'>
                    Inca de INCEPUT am stiut ca PROMOVAREA trebuie sa fie pe primul plan, iti voi arata diferenta dintre cei care se promoveaza constant si cei care asteapta sa fie descoperiti, imi doresc ca TU sa nu duci lipsa de cliente si sa fii in TOP inca de la inceput
                    </p>
                    <p className='mt-[.5rem]'>
                    Am constientizat ca EU sunt propriul BRAND pe care trebuie sa-l promovez, desi auzeam constant ca este necesar sa stiu cum sa “VAND”, vreau ca TU sa stii CUM sa te promovezi pe TINE.
                    </p>
                    </div>
              
            </div>
        </div>
    </div>
  )
}

export default CursDeBaza