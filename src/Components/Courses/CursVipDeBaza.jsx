import React,{useRef,useEffect} from 'react'
import cursVipDeBaza from './Imagini/curs_preview.jpg'
import videoVip from './Imagini/cursVipVideo.mp4'
const CursVipDeBaza = () => {
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

  return (
    <div className='flex justify-center items-center w-full h-full py-[5rem] lg:py-[10rem]'>
        <div className='flex flex-col lg:flex-row items-center lg:items-start'>
        <div className=' lg:ml-[2rem] flex flex-col items-center w-[90%] lg:w-[25rem]'>           
            <img src={cursVipDeBaza} className=" w-[20rem] lg:w-[25rem] h-[28rem]" />
            <button className='mt-[2rem] border-[2px] border-black w-full text-[18px]  h-[3rem] rounded-[8px] tracking-[6px]'>CUMPARA ACUM</button>
            <div className='relative flex flex-col items-left w-full mt-[2rem]'>
                <h3 className='mb-[1rem] lg:text-[18px] text-justify'>Achiti   <span className='font-bold'>AVANSUL</span> de <span className='font-bold'>300 de lei </span> aici sau la locatie pentru a-ti rezerva locul, restul sumei se achita in prima zi de curs</h3>
                <h3 className='text-[24px] font-thin'><span className='relative top-4'>2 ZILE :</span>   <span className='absolute right-2 font-extrabold text-[#DAA520]'> 3000 lei(Fara Kit) </span></h3>
                <h3 className='text-[24px] font-thin mt-[.5rem]'><span className='absolute right-2  font-extrabold text-[#DAA520] '>3500 lei(Kit Inclus)</span> </h3>

                <h3 className='text-[24px] font-thin mt-[5rem]'><span className='relative top-4'>3 ZILE : </span> <span className='absolute right-2  font-extrabold text-[#DAA520]'> 3500 lei(Fara Kit) </span></h3>
                <h3 className='text-[24px] font-thin mt-[.5rem]'><span className='absolute right-2  font-extrabold text-[#DAA520]'>4000 lei(Kit Inclus)</span> </h3>
                <div className='h-[40rem] mt-[5rem]'>
                            <video
                                style={{ maxWidth: "100%", width: "100%",height:"100%", margin: "100 auto",objectFit:"cover"}}
                                playsInline
                                loop
                                muted
                                controls
                                alt="All the devices"
                                src={videoVip}
                                ref={videoEl}
                                />
                </div>
            </div>
            </div>
            <div className='relative lg:ml-[4rem] mt-[2rem] lg:mt-0  flex flex-col items-center w-[90%] lg:w-[40rem]'>
                    <h4 className='text-[28px] font-norican'>Doar tu si trainerul</h4>
                    <h3 className='text-[42px] font-norican font-bold text-center'>Curs VIP de baza </h3>
                    <div className='w-[90%]  text-justify mt-[2rem] font-montSerrat'>
                        <h4 className='font-bold text-center text-[20px] py-[1rem]'>*Posibilitate cu translator & alegerea datelor </h4> 
                     <p>
                     Te-ai gandit vreodata ca iti doresti sa participi la un curs de baza unde toata atentia trainerului sa fie indreptata asupra ta? Atunci cursul VIP este alegerea perfcta pentru tine! 

Iti doresti sa ai propria ta AFACERE si sa-ti urmezi visul in domeniul BEAUTY? Acum este momentul sa CREZI in tine si sa FACI primul pas catre o noua CARIERA! Ne vom asigura ca drumul tau in lumea extensiilor de gene va duce catre SUCCES
                    </p>
                    <h4 className='font-bold mt-[1rem] text-[20px] text-center '>Ce iti punem la dispozitie?</h4>
                    
                    <ol>
                        <li className='mt-[.5rem]'>DIPLOMA cu RECUNOASTERE INTERNATIONALA (Holograma ce se regaseste pe diploma fiecarui participant la curs)</li>
                        <li className='mt-[.5rem]'>Teorie pe care sa o studiezi acasa in confortul tau, urmand ca la curs sa discutam pe temele din document. </li>
                        <li className='mt-[.5rem]'>Ma voi implica atat eu, cat si asistenta mea in pregatirea ta, deci vei avea 2 persoane de la care poti invata</li>
                        <li className='mt-[.5rem]'>Practica pe 2 MODELE UMANE</li> 
                        <li className='mt-[.5rem]'>EXERCITII atat pe manechin, cat si pe sponge </li>
                        <li className='mt-[.5rem]'>O APLICARE FOXY(NEW TREND) </li>
                        <li className='mt-[.5rem]'>MODUL special dedicat INSTAGRAM, TIK TOK, FACEBOOK ADS </li>
                        <li className='mt-[.5rem]'>CUM sa te PROMOVEZI?  </li>
                        <li className='mt-[.5rem]'>APLICATII pentru EDITARE FOTO/VIDEO </li>
                        <li className='mt-[.5rem]'>Se poate oferi KIT COMPLET pentru a exersa urmatoarea luna </li>
                        <li className='mt-[.5rem]'>Toate PRODUSELE necesare in zilele de curs sunt puse la dispozitie de catre noi  </li>
                        <li className='mt-[.5rem]'>Posibilitate de COLABORARE in salon</li>
                    </ol>
                    <h4 className='font-bold mt-[1rem] text-[20px] text-center '>De ce sa dai startul VISULUI tau alaturi de MINE? </h4>
                    <p className='mt-[.5rem]'>Sunt FONDATOAREA •Lorena Lash Studio• Salon specializat pe Extensii De Gene&Sprancene</p>
                    <ol>    
                        <li className='mt-[1rem]'>Dincolo de munca pe care am depus-o pentru a ajunge aici, PASIUNEA a facut diferenta! Exact asta te voi invata pe tine sa faci, sa transformi MUNCA in PASIUNE! </li>
                        <li className='mt-[.5rem]'>Inca de INCEPUT am stiut ca PROMOVAREA trebuie sa fie pe primul plan, iti voi arata diferenta dintre cei care se promoveaza constant si cei care asteapta sa fie descoperiti, imi doresc ca TU sa nu duci lipsa de cliente si sa fii in TOP inca de la inceput</li>
                        <li className='mt-[.5rem]'>Am constientizat ca EU sunt propriul BRAND pe care trebuie sa-l promovez, desi auzeam constant ca este necesar sa stiu cum sa “VAND”, vreau ca TU sa stii CUM sa te promovezi pe TINE.</li>
                    
                    </ol>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default CursVipDeBaza