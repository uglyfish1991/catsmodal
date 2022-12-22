import React, {useState} from "react";
import './App.css'
import Header from "./components/Header"
import Routes from "./components/Routes"
import Footer from "./components/Footer";
import { CounterProvider } from "./contexts/CatContext"; // brackes c0s n0t default export

const App = () => {

  return (
    <CounterProvider>
      <Header />
      <Routes />
      <Footer />
    </CounterProvider>
  );
}

export default App;