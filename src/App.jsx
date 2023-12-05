import styles from "./App.module.css";
import { Outlet } from "react-router-dom";


import "./global.css";

import { Header } from "@/components/Header";

import { Home } from "@/pages/Home";
import { PageNotFound } from "@/pages/PageNotFound";
import { NotFound } from "@/components/NotFound";

import { Footer } from "@/components/Footer";


function App() {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
