export function Home(){
    fetch(
        `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`)
    .then((data) => {
        return data.json()
    }).then((data) => {
        let videos = data.items
        //for(let video of videos){
        //    document.write(video.snippet.title)
        //}
    })
}
