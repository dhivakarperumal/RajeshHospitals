import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './RouterHeader/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './RouterHeader/Home';
import About from './RouterHeader/About';
import Tretments from './RouterHeader/Tretments';
import Docters from './RouterHeader/Doctors';
import Testimonials from './RouterHeader/Testimonial';
import Contacts from './RouterHeader/Contact';
import Login from './RouterHeader/Login';
import SignUps from './RouterHeader/SingUp';


import Bookapoinment from './BookApoinmet/BookApoiment';
import Footers from './Footers/Footer';
import Abouts from './HomeSectionFulls/About/Abouts';
import Tremarics from './HomeSectionFulls/Treatments/Tretments';
import Docs from './HomeSectionFulls/Doctors/Docs';
import Tests from './HomeSectionFulls/Testimons/Testmon';
import  Conts from './HomeSectionFulls/Contacts/Conts';
import Sings2 from './HomeSectionFulls/SignUp/Singns';





function App() {
  return (
    <>
      <Navbars/>
      <Routes>
         <Route exact path="/" element={<Home/>}> </Route>
         <Route exact path="/about" element={<About/>}></Route>
         <Route exact path="/trements" element={<Tretments/>}></Route>
         <Route exact path="/doctors" element={<Docters/>}></Route>
         <Route exact path="/testimonial" element={<Testimonials/>}></Route>
         <Route exact path="/contacts" element={<Contacts/>}></Route>
         <Route exact path="/login" element={<Login/>}></Route>
         <Route exact path="/singup" element={<SignUps/>}></Route>
      </Routes>
    
    
      <Bookapoinment/>
      <Abouts/>
      <Tremarics/>
      <Docs/>
      <Tests/>
      <Conts/>
      <Sings2/>
     

      <Footers/>
    </>
  );
}

export default App;