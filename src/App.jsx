import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Started from './pages/Started';
import Part from './pages/Part';
import Feature from './pages/Featute';
import Case from './pages/Case';
import Story from './pages/Story';
import Test from './pages/Test';
import Price from './pages/Price';
import Question from './pages/Question';
import Footer from './pages/Footer';

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Hero />
          <Routes>
           <Route path="/test" element={<Test/>} />
          </Routes>
        </Router>
        
        {/* <Started />
        <Part />
        <Feature />
        <Case />
        <Story />
        <Test />
        <Price />
        <Question />
        <Footer /> */}
        
         
    </div>
  )
}
