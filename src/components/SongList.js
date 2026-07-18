// import React from "react";

// const SongList = ({title, songs}) => {
//   return (
//     <div>
//         <h2>{title}</h2>

//         {songs.map((song)=>(
//             <div key ={song.id}>
//                 {song.title}
//             </div>
//                 <SongList
//                 title="❤️ Favorites"
//                 songs={favorites}
//                 onSongClick={playFavorite}
//                 onRemove={removeFavorite}
//                 />
//             </div>
//         ))}
//     </div>
//   );
// };

// export default SongList;

import React from "react";
import "../screens/favorites/favorite.css";

import { FaHeart } from "react-icons/fa";

const SongList = ({
     title,
     songs,
     onSongClick,
     onRemove, 
    }) => {
  return (
    
    <div>
        <h1>{title}</h1>
      {songs.map((song, index) => (
        <div 
          className="favoriteCard"
          key={song.id}
          onClick={()=>onSongClick(index)}
        >
          <img
          className='favoriteImage'
            src={song.album.cover_medium}
            alt={song.title}
            width={80}
          
          />
        <div className="favoriteInfo">
          <h3>{song.title}</h3>
          <p>{song.artist.name}</p>
        </div>

          <button 
            className="removeButton"
            onClick={(e)=>{
              e.stopPropagation();
              onRemove(song.id);
            }}
          >
            <FaHeart />
          </button>
        </div>


      ))}
    </div>
  );
};

export default SongList;

        // <div key={song.id}>
        //   {song.title}
        // </div>
