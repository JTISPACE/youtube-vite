import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import RelatedVidCard from './RelatedVideocard';
import DisplayError from './Errors/DisplayError';
import { DateTime } from 'luxon';
import {useParams} from 'react-router-dom'

function RelatedVideos({relatedVideoId} ) {
 

     const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${relatedVideoId}&type=video&key={process.env.REACT_APP_YOUTUBE_KEY}`
        )
        .then((response) => {
          getvideoSnippet(response.data.items);
        })
        .catch((error) => {
          console.log(error);
          setIsError(true);
        });
    }, [])
    
    
    const [snippetData, setSnippetData] = useState([]);
    
   
    async function getvideoSnippet (snippet){
      

        const newSnippet = [];

        for (const video of snippet){
            const videoId = video.id
            const videoSnippet = video.snippet
            const channelId  = videoSnippet.channelId
            const title  = videoSnippet.title
            const image = videoSnippet.thumbnails.standard?.url;
            
            const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
            const channelTitle = videoSnippet.channelTitle;

            newSnippet.push({
                videoId,
                videoSnippet,
                channelId,
                title,
                image,
                timestamp,
                channelTitle,
                
               
            });
            
        };
        setSnippetData(newSnippet);
        setIsLoading(false)
    }

    //  if(isError) {
    //   return <DisplayError/>
    // }

  return (
    <div>
        {(snippetData?.map(item =>{

             return <Link key={item.videoId} to={`/video/${item.videoId}`} style={{textDecoration:"none"}} > <RelatedVidCard key={item.videoId} thumbnail={item.image} title={item.title}  channelTitle={item.channelTitle} channelPic={item.channelImage}  /></Link>
                
                
            })
            

                )}
        </div>
  )
}

export default RelatedVideos