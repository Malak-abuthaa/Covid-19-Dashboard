import React from 'react';
import Dashborad from "./Views/Dashboard.jsx";
import Navbar from "./components/Navbars/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div><Navbar></Navbar>
    <div  className = 'main-Panel'> 
    <Dashborad />
   <Footer/>
   </div>
   </div>
  );
}

export default App;

