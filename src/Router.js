import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./modules/Navbar/Navbar";
import Home from "./modules/Home/container/Home";
import About from "./modules/About/container/About";
import Contact from "./modules/Contact/Contact";
import UserList from './UserList';
import './App.css';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Set the "index" property to "/" for the Home route */}
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/userlist" element={<UserList />} />
       
            
        {/* Define the default route to Home */}
        <Route index element={<Home />} />
        </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Router;
