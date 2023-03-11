import React,{createContext, useContext} from "react";
import { useQuery } from "@tanstack/react-query"
import Axios from "axios";

import Display from "../Components/Display";
import Sidebar from "../Components/Sidebar";

function Home (){
   
    
    return(
        <>

        <div className="main">

           <Sidebar/>
            <Display/>
        
        </div>
        
        </>

    )
}





export default Home;