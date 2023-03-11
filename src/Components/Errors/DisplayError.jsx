import React from 'react'
import {BiErrorCircle} from 'react-icons/bi'
import './error.css'

function DisplayError() {
  return (
    <div className='displayErr'>
        <div className='errorBox'>

        <BiErrorCircle className='BiError'/>
        <h1 className='errorMsg'>Oh no! Something Went Wrong</h1>
        </div>
    </div>
  )
}

export default DisplayError