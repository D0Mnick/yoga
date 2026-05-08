import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ClassesPage from "./pages/ClassesPage";
import Schedule from "./pages/Schedule";
import Instructor from "./pages/Intructor";
import ContactPage from "./pages/ContactPage";
import Video from "./pages/Video";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
