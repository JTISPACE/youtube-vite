import React, {useState, useEffect} from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { search } from '../States/Search';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';




function SearchBox() {

   const [searchText, setSearchText] = useState({})
   const [getSearchText, setGetSearchText] = useState('')
  
     

     const navigate = useNavigate()


    function onSearch(e){
    
      if (e.key === 'Enter'){
         const data = {
      name: 'search',
      nav: getSearchText     
                  
      }

         navigate('/search', {state:data})
    
      }
      
    }

    function onClick(){

     
    
      if (getSearchText === ''){
        return false
         
      } else{
        const data = {
      name: 'search',
      nav: getSearchText     
                  
      }

         navigate('/search', {state:data})
    
      }
      
    }

    
    
   

  return (
    <>
    <div className="search-box"><input className="search" id='searchText' type="text" onChange={(e)=>setGetSearchText(e.target.value)} onKeyDown={onSearch} placeholder="Search" ></input>
          <button className="search-btn" onClick={onClick} >
            <FiSearch className="fa-icon"  />
          </button>
          </div>
    
      
    </>

  )
}

export default SearchBox;