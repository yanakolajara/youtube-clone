import { useState, useEffect } from 'react';

export function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&q=&type=video&part=snippet&maxResults=5`)
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData.items))
        .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
    console.log(data)
    }, [data]);
    const list = data.map((video) => {
        return (
        <div class="videoBox" id={video.id.videoId}>
            <img class="videoImg" src={video.snippet.thumbnails.high.url} onClick={(event) => console.log(event.target.parentElement)}/>
            <p class="videoTitle" onClick={(event) => console.log(event.target.parentElement)}>{video.snippet.title}</p>
        </div>
        )
    })
    return (
    <div id="mainContent">
        {list}
    </div>
    );
}