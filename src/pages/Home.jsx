import React from "react";
import { useState } from "react";

import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

import "./Home.css";

function Home() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="Home">
      <Navbar visible={visible} setVisible={setVisible} />
      <Footer visible={visible} setVisible={setVisible} />
    </div>
  );
}

export default Home;
