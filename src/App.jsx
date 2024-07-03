import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/page/home/Home";
import Footer from "./components/footer/Footer";
import About from "./components/page/about/About";
import Login from "./components/page/login/Login";
import Contact from "./components/page/contact/Contact";
import Team from "./components/page/Team/Team";
import Member from "./components/page/Team/Member";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/my-account" element={<Login />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/our-team/:name" element={<Member />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
