import React, { useState, useRef, useEffect } from "react";
import "../Styles/audioplayer.css";
import ProgressCircle from "./ProgressCircle";
import WaveAnimation from "./WaveAnimation";
import Controls from "./Controls";

const AudioPlayer = ({ currentTrack, currentIdx, setCurrentIdx, total, setIsPlaying, IsPlaying }) => {
  const [TrackProgress, setTrackProgress] = useState(0);

  const timeConverter = (ms) => {
    let min = Math.floor(ms / 60000);
    let sec = ((ms % 60000) / 1000).toFixed(0);
    return min + ":" + sec;
  };

  let audioSrc = total[currentIdx]?.track?.preview_url;
  const audioRef = useRef(new Audio(total[0]?.track?.preview_url));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const { duration } = audioRef.current;
  const currentPercentage = duration ? (TrackProgress / duration) * 100 : 0;

  const handleNext = () => {
    setIsPlaying(true);
    if (currentIdx < total?.length - 1) {
      return setCurrentIdx(currentIdx + 1);
    } else {
      return setCurrentIdx(0);
    }
  };

  const handlePrev = () => {
    setIsPlaying(true);
    if (currentIdx - 1 < 0) {
      return setCurrentIdx(total?.length - 1);
    } else {
      return setCurrentIdx(currentIdx - 1);
    }
  };

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  useEffect(() => {
    if (audioRef.current.src) {
      if (IsPlaying) {
        setIsPlaying(true);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      if (IsPlaying) {
        audioRef.current == new Audio(audioSrc);
        setIsPlaying(true);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [IsPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);
    audioRef.current.play();
    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current == true;
    }
  }, [currentIdx]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const addZero = (n) => {
    return n > 9 ? "" + n : "0" + n;
  };

  // console.log(TrackProgress, "track progress audioplayer");
  // console.log(audioRef, "audio ref");

  const artists = [];

  currentTrack?.album?.artists?.forEach((e) => {
    artists.push(e.name);
  });

  return (
    <div className="player-body">
      <div className="player-left-body">
        <ProgressCircle
          percentage={currentPercentage}
          size={300}
          isPlaying={IsPlaying}
          image={currentTrack?.album?.images[0]?.url}
          color="#C96850"
          strokeWidth={20}
        ></ProgressCircle>
      </div>
      <div className="player-right-body">
        <p className="song-title">{currentTrack?.name}</p>
        <p className="song-artist">{artists.join(" | ")}</p>
        <div className="player-right-bottom">
          <div className="song-duration flex">
            <p className="duration">0:{addZero(Math.round(TrackProgress))}</p>
            <WaveAnimation isPlaying={IsPlaying}></WaveAnimation>
            <p className="duration">0:30</p>
          </div>
          <Controls
            isPlaying={IsPlaying}
            setisPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
          ></Controls>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
