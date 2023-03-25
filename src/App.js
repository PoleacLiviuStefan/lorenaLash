import About from "./Components/About/About";
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
        <Reviews />
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
      </Routes>
    </div>
  );
}

export default App;
