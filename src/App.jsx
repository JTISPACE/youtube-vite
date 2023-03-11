import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Home from "./Pages/Home"
import Search from "./Pages/Search";
import Topbar from "./Components/Topbar";
import YoutubePlayer from "./Pages/YoutubePlayer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import { Provider } from 'react-redux'


function App() {
  const client =  new QueryClient({defaultOptions:{
    queries:{
      refetchOnWindowFocus: false,
      staleTime: 3000,
    }
  }});
  return (
    <>
      <QueryClientProvider client={client}>

      <Router>
        <div className="topbarFixed">

        <Topbar/>
        </div>
        
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search/' element={<Search/>}/>
        <Route path='/video/:videoId' element={<YoutubePlayer/>}/>

        
       </Routes>
      
      </Router>
      </QueryClientProvider>
      
          <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
    </>
  );
}

export default App;
