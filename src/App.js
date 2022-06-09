import Navbar from "./Components/Navbar";
import './App.css'
import { themeContext } from "./Context";

import Intro from "./Components/intro/Intro";
import Services from "./Components/services/Services";
import Card from "./Components/card/Card";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Works/Work";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { useContext } from "react";
function App() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="App" 
      style={{background:darkMode? 'black': '',
                color:darkMode? 'white' : ''}}    
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Work/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
