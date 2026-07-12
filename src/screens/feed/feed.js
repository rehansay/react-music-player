import React,{useState,useEffect} from 'react';
import deezer from '../../api/deezer';
import SongCard from '../../components/songCard/songCard';
import "./feed.css"
function Feed() {
  const [tracks, setTracks]=useState([]);

   useEffect(() => {
    deezer
      .get("/search?q=eminem")
      .then((response) => {
        console.log(response.data);
        setTracks(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

return (
  <div className="songContainer">
    {tracks.map((track) => (
      <SongCard
        key={track.id}
        track={track}
      />
    ))}
  </div>
);
}

export default Feed