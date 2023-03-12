import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import Sidebar from '../Components/Sidebar';
import SearchCard from '../Components/SearchCard';
import { toast } from 'react-toastify';
import { Link, useLocation } from 'react-router-dom';
import "./Search.css";

import { viteApi } from '../Components/Display';





function Search() {

   

    const location = useLocation()


     const [isError, setIsError] = useState(false);
     const [isLoading, setIsLoading] = useState(true);
       const [snippetData, setSnippetData] = useState([]);

     const data = location.state
     const searchValue = data.nav


console.log(searchValue);

async function searchQuery(){
   

    try {
        const response =  await axios.get(
           `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchValue}&key=${viteApi}`
         )
         getSearchData(response.data.items);
        
    } catch (error) {
        toast.error('something went wrong')
        setIsError(true)
        console.log(error);
        
        
    }
          
         
        

        }

    
     useEffect((e) => {
        
       searchQuery()
     }, [searchValue]);

   
    
   
    async function getSearchData (snippet){

        
      

        const newSnippet = [];

        for (const search of snippet){


             
            const videoId = search.id?.videoId
            const videoTitle = search.snippet.title
            const channelId = search.snippet.channelId
            const channelTitle = search.snippet.channelTitle
            const description = search.snippet.description
            const thumbnail = search.snippet?.thumbnails.medium.url
            const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key={process.env.REACT_APP_YOUTUBE_KEY}`
      );
      const channelImage =
        response.data.items[0].snippet.thumbnails.default?.url;
            
            
            

            newSnippet.push({
            videoId,
            videoTitle,
            channelTitle ,
            description ,
            thumbnail,
            channelImage,
          
            });
            
        };
        setSnippetData(newSnippet);
        setIsLoading(false)
    }



   

  

    const dispatchSearch = useDispatch();

    return(
    <>
    <div className='search-main'>
         <Sidebar/>
         <SearchDisplay snippetData = {snippetData}/>
    </div>

   
    </>
    )

}

 function SearchDisplay( {snippetData}){

    return(
        <>
        <div className="search-display">

        {(snippetData?.map(item =>{
            
            return <div key={item.videoId}><Link  to={`/video/${item.videoId}`} style={{textDecoration:"none"}} > <SearchCard key={item.videoId} thumbnail={item.thumbnail} title={item.videoTitle} description={item.description} channelTitle={item.channelTitle} channelPic={item.channelImage}  /></Link></div>
            
            
        })
        
        
        )}
        </div>
           
        </>
    )
 }




export default Search