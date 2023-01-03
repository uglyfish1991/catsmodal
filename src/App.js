//When it is not the default export, you put {} around it, otherwise you can just use the export name

import React, {useState} from "react";
import './App.css'
import Header from "./components/Header"
import Routes from "./components/Routes"
import Footer from "./components/Footer";
import { CounterProvider } from "./contexts/CatContext"; 
import { BasketProvider } from "./contexts/BasketContext";

const App = () => {

  return (
    <BasketProvider>
    <CounterProvider>
      <Header />
      <Routes />
      <Footer />
    </CounterProvider>
    </BasketProvider>
  );
}

export default App;

// Basket + Counter should be on the same level as each other? How do I achieve this?