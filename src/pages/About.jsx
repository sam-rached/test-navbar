import React from "react";
import { useState } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

function About() {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <h1>about</h1>
      <Navbar visible={visible} setVisible={setVisible} />
      <Footer visible={visible} setVisible={setVisible} />
    </div>
  );
}

export default About;
