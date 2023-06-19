import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'; //!

export function Home() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&q=&type=video&part=snippet&maxResults=8`)
        .then(res => res.json())
        .then(res => setData(res))
        .then(() => setIsLoading(false))
        .then(() => document.querySelector("#searchBox").value = '')
        .catch(() => {
            setError(true)
        })
    }, [])
    if(isLoading){
        return(
            <p>loading...</p>
        )
    }
    if(error){
        return(
            <p>Something went wrong, please try again later.</p>
        )
    }
    return(
        <div id="mainContent">
            <div class="videoBox" id={data.items[0].id.videoId}>
                <img class="videoImg" src={data.items[0].snippet.thumbnails.high.url} onClick={(event) => navigate(`/watch/${event.target.parentElement.id}`)}/>
                <p class="videoTitle" onClick={(event) => navigate(`/watch/${event.target.parentElement.id}`)}>{data.items[0].snippet.title}</p>
            </div>
            <div class="videoBox" id={data.items[1].id.videoId}>
                <img class="videoImg" src={data.items[1].snippet.thumbnails.high.url} onClick={(event) => navigate(`/watch/${event.target.parentElement.id}`)}/>
                <p class="videoTitle" onClick={(event) => navigate(`/watch/${event.target.parentElement.id}`)}>{data.items[1].snippet.title}</p>
            </div>
            <div class="videoBox" id={data.items[2].id.videoId}>
                <img class="videoImg" src={data.items[2].snippet.thumbnails.high.url} onClick={(event) => navigate(`/watch/${event.target.parentElement.id}`)}/>
                <p class="videoTitle" onClick={(event) => navigate(`/watch/${event.target.parentElement.id}`)}>{data.items[2].snippet.title}</p>
            </div>
            <div class="videoBox" id={data.items[3].id.videoId}>
                <img class="videoImg" src={data.items[3].snippet.thumbnails.high.url} onClick={(event) => navigate(`/watch/${event.target.parentElement.id}`)}/>
                <p class="videoTitle" onClick={(event) => navigate(`/watch/${event.target.parentElement.id}`)}>{data.items[3].snippet.title}</p>
            </div>
            <div class="videoBox" id={data.items[4].id.videoId}>
                <img class="videoImg" src={data.items[4].snippet.thumbnails.high.url} onClick={(event) => navigate(`/watch/${event.target.parentElement.id}`)}/>
                <p class="videoTitle" onClick={(event) => navigate(`/watch/${event.target.parentElement.id}`)}>{data.items[4].snippet.title}</p>
            </div>
            <div class="videoBox" id={data.items[5].id.videoId}>
                <img class="videoImg" src={data.items[5].snippet.thumbnails.high.url} onClick={(event) => navigate(`/watch/${event.target.parentElement.id}`)}/>
                <p class="videoTitle" onClick={(event) => navigate(`/watch/${event.target.parentElement.id}`)}>{data.items[5].snippet.title}</p>
            </div>
            <div class="videoBox" id={data.items[6].id.videoId}>
                <img class="videoImg" src={data.items[6].snippet.thumbnails.high.url} onClick={(event) => navigate(`/watch/${event.target.parentElement.id}`)}/>
                <p class="videoTitle" onClick={(event) => navigate(`/watch/${event.target.parentElement.id}`)}>{data.items[6].snippet.title}</p>
            </div>
            <div class="videoBox" id={data.items[7].id.videoId}>
                <img class="videoImg" src={data.items[7].snippet.thumbnails.high.url} onClick={(event) => navigate(`/watch/${event.target.parentElement.id}`)}/>
                <p class="videoTitle" onClick={(event) => navigate(`/watch/${event.target.parentElement.id}`)}>{data.items[7].snippet.title}</p>
            </div>
        </div>
        )
}

//http://localhost:51855/