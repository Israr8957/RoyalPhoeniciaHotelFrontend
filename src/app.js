import React from "react";
import HeroPage from "./components/pages/home/HeroPage.js";
import Footer from "./components/pages/footer/Footer.js";
import SecondPage from "./components/pages/secondPage/SecondPage.js";
import ThirdPage from "./components/pages/thirdPage/ThirdPage.js";
import FourPage from "./components/pages/fourPage/FourPage.js";

function app() {
  return (
    <div>
      <HeroPage />
      <SecondPage />
      <ThirdPage />
      <FourPage />
      <Footer />
    </div>
  );
}

export default app;
