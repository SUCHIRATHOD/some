//  import logo from './logo.svg';
//  import './App.css';
//  import NavScrollExample from './components/Navbar'
 import Banner from './components/Banner';
 import  'bootstrap/dist/css/bootstrap.min.css';
import Categories from './components/Categories';
 import Bestsellers from './components/Bestsellers';
 import Artist from './components/Artist';
 import Paragraph from './components/Paragraph';
 import Footer from './components/Footer';
 import Serve from './components/Serve';
 import Searches from './components/Searches';
 import Rights from './components/Rights';
// import About from './components/About';
//  import Services from './components/Services';
import ContactPage from './components/Contact';
//  import Login from './components/Login';
//  import SignupPage from './components/Signup';

// function App() {
//   return (
//      <div >
//      <NavScrollExample />
//      <Banner/>
//      <Categories/>
//      <Bestsellers/>
//      <Artist/>   
//      <Paragraph/>
//      <Footer/>
//      <Serve/>
//       <Searches/>
//       <Rights/>
//       <About/>
//       <Services/>
//      < ContactPage/>
//    <Login/>
//       <SignupPage/>
     
//      </div>
//   );
//  }

//  export default App;
import React from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavScrollExample from "./components/Navbar"

import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';
import SignupPage from './components/Signup';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavScrollExample/>
       
        <Routes>
           <Route path='/' element={<> <Banner/>
      <Categories/>
      <Bestsellers/>
      <Artist/>   
      <Paragraph/>
      <Footer/>
     <Serve/>
      <Searches/><Rights/></>}/>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
