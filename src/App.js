
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./app.css";
import Home from "./Components/Home/Home";
import About from "./Pages/About Us/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Acheivements from "./Pages/Acheivements/Acheivements";
import Objective from "./Pages/Objectives/Objective";
import Appreciation from "./Pages/Appreciation/Appreciation";
import Project from "./Pages/Projects/Project";
import Event from "./Pages/Events/Event";
import Media from "./Pages/MediaCoverage/MediaCoverages";
import Gallery from "./Pages/Gallery/Gallery";
import MetaFisco from "./Pages/metafiasco/MetaFisco";
import Ticket from "./Pages/ticket/Ticket.jsx";
import Register from "./Register/Register";
import Form from "./Pages/form/Form";
import log from "./Pages/login/log";
import "../src/fonts/potra-font.css";


const App = () => {
  return (
    <div className="App">
      
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/acheivements" element={<Acheivements />} />
          <Route path="/objective" element={<Objective />} />
          <Route path="/appreciation" element={<Appreciation />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/event" element={<Event />} />
          <Route path="/media" element={<Media />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/meta" element={<MetaFisco />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/form" element={<Form/>} />
          
         
        </Routes>
      <Footer />
      
    </div>
  );
};


export default App