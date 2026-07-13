import React, {useState ,useRef} from "react";
import { useLocation } from "react-router-dom";

function Player() {
  const location = useLocation();

  console.log(location);
  console.log(location.state);

  const track = location.state?.track;

  const [isPlaying , setIsPlaying]=useState(false);

  const [currentTime, setCurrentTime]=useState(0);
  const[duration, setDuration]=useState(0);

  const audioRef=useRef(null);

  const handlePlayPause=()=>{
    if(isPlaying){
      audioRef.current.pause();
      setIsPlaying(false);
    }

    else{
      audioRef.current.play();
      setIsPlaying(true);
    }
  }

  if (!track) {
    return <h2>Select a song from the Feed page.</h2>;
  }

  return (
    <div>
      <h1>{track.title}</h1>
      <h2>{track.artist.name}</h2>

      <img
        src={track.album.cover_big}
        alt={track.title}
        width="300"
      />

      <button
        onClick={handlePlayPause} 
      >
        {isPlaying?"Pause ⏸️ ": "Play ▶️"}
      </button>

      <p>
        {Math.floor(currentTime)} / {Math.floor(duration )} sec
      </p>

      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={(e)=>{
          const time=Number(e.target.value)
          audioRef.current.currentTime=time;
          setCurrentTime(time);
        }}
      />

      <audio 
        ref={audioRef}
        src={track.preview}

        onTimeUpdate={()=>{
          setCurrentTime(audioRef.current.currentTime);
        }}
        onLoadedMetadata={()=>{
          setDuration(audioRef.current.duration)
        }}
        onEnded={()=>{
          setIsPlaying(false);
          setCurrentTime(0);
        }}

      />
    </div>
  );
}

export default Player;