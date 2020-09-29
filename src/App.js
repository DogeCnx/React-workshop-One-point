import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}
