
import AboutMain from "./Components/About/AboutMain";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom"
import CursMain from "./Components/Courses/CursMain";
import CursDeBaza from "./Components/Courses/CursDeBaza";
import CursDePerfectionare from "./Components/Courses/CursDePerfectionare";
import Reviews from "./Components/Reviews/Reviews";
import CursVipDeBaza from "./Components/Courses/CursVipDeBaza";
import CursEfecteSpeciale from "./Components/Courses/CursEfecteSpeciale";
import Salon from "./Components/Salon/Salon";
import Contact from "./Components/Contact/Contact";
import Buy from "./Components/Courses/Buy";
import Success from './Components/Courses/Success'
import Cancel from './Components/Courses/Cancel'
import "@stripe/stripe-js"
import Footer from "./Components/Footer/Footer";
import PoliticaDeUtilizare from "./Components/Footer/PoliticaDeUtilizare";
import PoliticaDeInscriere from "./Components/Footer/PoliticaDeInscriere";
import PoliticaDePlata from "./Components/Footer/PoliticaDePlata";
import PoliticaDeReturnare from "./Components/Footer/PoliticaDeReturnare";
import TermeniSiConditii from "./Components/Footer/TermeniSiConditii";
function App() {
  return (
    <div className="App">
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={      
        <main className="">
        <Hero />
        <AboutMain />
        <CursMain />
      
        </main>
         } />
         <Route path="/curs-de-baza" element={
            <CursDeBaza />
         }/>
          <Route path="/curs-de-perfectionare" element={
            <CursDePerfectionare />
         }/>
             <Route path="/curs-vip-de-baza" element={
            <CursVipDeBaza />
         }/>
         <Route path="/curs-efecte-speciale" element={
            <CursEfecteSpeciale />
         }/>
           <Route path="/salon" element={
            <Salon />
         }/>
           <Route path="/checkout" element={
            <Buy />
         }/>
         <Route path="/success" element={<Success />} />
         <Route path="/cancel" element={<Cancel />} />
        <Route path="/politica-de-utilizare" element={<PoliticaDeUtilizare />} />
        <Route path="/politica-de-inscriere" element={<PoliticaDeInscriere/>} />
        <Route path="/politica-de-plata" element={<PoliticaDePlata />} />
        <Route path="/politica-de-returnare" element={<PoliticaDeReturnare />} />
        <Route path="/termeni-si-conditii" element={<TermeniSiConditii />} />

      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
