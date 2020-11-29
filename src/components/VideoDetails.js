import React from 'react';


const VideoDetail =({video})=>{
    if(!video){
        return<div>Loading..</div>
    };

    const videosrc= `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videosrc}/>
            </div>
            <div className="ui segemnt">
                <h4 className="ui header mt-4">{video.snippet.title}</h4>
                <p className="ui content mb-4">{video.snippet.description}</p>
            </div>
        </div>
    )
};


export default VideoDetail;