import React from 'react';
 import './YoutubeEmbed.css';

function YoutubeEmbed({url}) {
  return (
    <div className="video-responsive" style={{overflow: "hidden",height: "600px", width: "75%", marginBottom: "10%"}}>
        <iframe
        width="853px"
        height="480px"
        src={`${url}`}
        frameBorder="0"
        allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; muted"
        allowFullScreen
        title="Embedded youtube"
        style={{ width: "100%", height: "100%"}}
        />
    </div>
  )
}

export default YoutubeEmbed