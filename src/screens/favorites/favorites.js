import React ,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import "./favorite.css"

function Favorites() {

  const [favorites, setFavorites]= useState([]);
  const navigate=useNavigate();

  const playFavorite=(index)=>{
    navigate("/player",{
      state:{
        tracks: favorites,
        currentIndex: index,
      },
    });
  };

  const removeFavorite=(id)=>{
    const updatedFavorites=favorites.filter(
      (song)=>song.id !== id
    );

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)

    );

    setFavorites(updatedFavorites);
  }

  useEffect(()=>{
    const storedFavorites=JSON.parse(localStorage.getItem("favorites") || "[]")

      setFavorites(storedFavorites);
      
  },[])


  
if (favorites.length === 0) {
  return (
    <div className="emptyFavorites">

      <div className="emptyIcon">💔</div>

      <h2>No Favorite Songs Yet</h2>

      <p>
        Start exploring music and tap the ❤️
        to save your favorite tracks.
      </p>

      <button
        className="feedButton"
        onClick={() => navigate("/")}
      >
        Explore Music
      </button>

    </div>
  );
}


  return (
    <div className="favoritesPage">
      <h1>❤️ Favorites</h1>
      {favorites.map((song, index)=>(
        <div 
          className="favoriteCard"
          key={song.id}
          onClick={()=>playFavorite(index)}
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
              removeFavorite(song.id);
            }}
          >
            <FaHeart />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Favorites