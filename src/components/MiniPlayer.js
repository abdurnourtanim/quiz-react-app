import React, { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import classes from "../styles/MiniPlayer.module.css";

const MiniPlayer = ({ videoID, title }) => {
  const [status, setStatus] = useState(false);
  const buttonRef = useRef();
  const videoUrl = `https://www.youtube.com/watch?v=${videoID}`;

  const toogleMiniPlayer = () => {
    if (!status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  };

  return (
    <>
      <div
        className={`${classes.miniPlayer} ${classes.floatingBtn}`}
        ref={buttonRef}
        onClick={toogleMiniPlayer}
      >
        <span className={`material-icons-outlined ${classes.open}`}>
          play_circle_filled
        </span>
        <span
          className={`material-icons-outlined ${classes.close}`}
          onClick={toogleMiniPlayer}
        >
          close
        </span>
        <ReactPlayer
          controls
          className={classes.player}
          url={videoUrl}
          width="300px"
          height="168px"
          playing={status}
        />
        <p>{title}</p>
      </div>
    </>
  );
};

export default MiniPlayer;
