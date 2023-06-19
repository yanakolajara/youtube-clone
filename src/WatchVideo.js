import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export function WatchVideo(videoId){
    const { id } = useParams()
    const source = `https://www.youtube.com/embed/${id}`
    useEffect(() =>{
        document.querySelector("#searchBox").value = ''
    }, [])
    return (
        <div class="playVideo">
            <iframe width="854" height="480" src={source} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}