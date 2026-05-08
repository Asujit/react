import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Men from "./pages/Subpages/Men";
import Women from "./pages/Subpages/Women";
import Kids from "./pages/Subpages/Kids";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div className="h-screen text-white bg-black">
      <Navbar />
      <Navbar2/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {/* // nested routes */}

        <Route path="/about" element={<About />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids/>} />
        </Route>

        {/* // dynamic routing */}

        <Route path="/courses" element={<Courses/>} />
        <Route path="/courses/:id" element={<CourseDetails/>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
