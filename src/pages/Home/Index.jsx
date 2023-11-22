import { About } from "../../components/About";
import {Services} from "../../components/Services/Index";
import {IncubationProgram} from "../../components/IncubationProgram";
import { Contact } from "../../components/Contact";
import { Banner } from "../../components/Banner";

export function Home() {
  return (
    <> 
      <Banner/>       
      <About/> 
      <IncubationProgram/>  
      <Services/> 
      <Contact/>   
    </> 
   
  );
}
