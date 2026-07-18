import React from "react";

const SongList = ({title, songs}) => {
  return (
    <div>
        <h2>{title}</h2>

        {songs.map((song)=>(
            <div key ={song.id}>
                {song.title}
            </div>
        ))}
    </div>
  );
};

export default SongList;