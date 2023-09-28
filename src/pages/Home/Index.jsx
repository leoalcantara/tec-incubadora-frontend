import { About } from "../../components/About";
import {Services} from "../../components/Services/Index";
import {IncubationProgram} from "../../components/IncubationProgram";

export function Home() {
  return (
    <>        
      <About/> 
      <IncubationProgram/>  
      <Services/>    
    </> 
   
  );
}
