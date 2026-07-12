import React from "react";
import "./songCard.css";

function SongCard({track}){

    return(
        <div className="songCard">
            <img 
            src={track.album.cover_medium}
            alt={track.title}
            className="songCover"
            />

            <h3>{track.title}</h3>

            <p>{track.artist.name}</p>
        </div>

    );
}

export default SongCard;