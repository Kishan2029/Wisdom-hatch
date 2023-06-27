import React from "react";


const YoutubeEmbed = ({ embedId }) => (
    <div className="h-full p-2">
        <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/W4Gobl-VFsA`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
);



export default YoutubeEmbed;