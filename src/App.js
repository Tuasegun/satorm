import { useEffect } from "react";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
