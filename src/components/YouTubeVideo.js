import React from "react";


const YoutubeEmbed = ({ embedId }) => (
    <div className="h-full p-2 border-2 border-black border-none rounded-xl">
        <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
);



export default YoutubeEmbed;