import React, {useState} from "react";
import './App.css'
import Header from "./components/Header"
import Routes from "./components/Routes"
import Footer from "./components/Footer";
import { Context } from "./contexts/Counter";

const App = () => {
  const [context, setContext]=useState("I have not proved my concept")

  return (
    <Context.Provider value={[context,setContext]} >
      <Header />
      <Routes />
      <Footer />
      </Context.Provider >
  );
}

export default App;