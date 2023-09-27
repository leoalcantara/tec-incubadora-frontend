import styles from "./App.module.css";


import "./global.css";

import { Header } from "./components/Header";

import { Home } from "./pages/Home";
import {PageNotFound} from "./pages/PageNotFound";
import { NotFound } from "./components/NotFound";

import { Footer } from "./components/Footer";


function App() {
  return (
    <> 
      <Header />    
      <Home /> 
      <Footer />     
    </>
  );
}

export default App;
