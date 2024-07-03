import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/page/home/Home";
import Footer from "./components/footer/Footer";
import About from "./components/page/about/About";
import Login from "./components/page/login/Login";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/my-account" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
