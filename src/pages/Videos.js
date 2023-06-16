import { Link } from "react-router-dom"

export function Videos(videoId){
    return(
        <>
            <h1>This will be a video: </h1>
            <Link to="/video/1">Video 1</Link>
            <Link to="/video/2">Video 2</Link>
        </>
    )
}