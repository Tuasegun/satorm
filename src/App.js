import { useEffect } from "react";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactPixel from 'react-facebook-pixel';

const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
};

ReactPixel.init('534112444808446', options);
ReactPixel.pageView();
ReactPixel.revokeConsent();



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
