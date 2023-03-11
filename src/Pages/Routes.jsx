import React from 'react'
import {Routes, Route} from 'react-router-dom'
import YoutubePlayer from './YoutubePlayer'
import Home from './Home'


function Routes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='ytplayer' element={<YoutubePlayer/>}/>

        
    </Routes>
    </>
  )
}

export default Routes