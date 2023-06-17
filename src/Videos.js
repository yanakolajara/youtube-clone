import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"


export function Videos(videoId){
    const [data , setData] = useState(null);
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&q=${id}&type=video&part=snippet&maxResults=5`)
        .then((data) => data.json())
        .then((data) => setData(data))}, [])
    const videos = data.items
    const videoList = videos.map((video) => {
        return(
            <div class="videoBox" id={video.id.videoId}>
                <img class="videoImg" src={video.snippet.thumbnails.high.url} onClick={(event) => console.log(event.target.parentElement)}/>
                <p class="videoTitle" onClick={(event) => console.log(event.target.parentElement)}>{video.snippet.title}</p>
            </div>
        )
    })
    return(
        <div id="mainContent">
            <h2>Results for: "{id}"</h2>
            {videoList}
        </div>
    )
}