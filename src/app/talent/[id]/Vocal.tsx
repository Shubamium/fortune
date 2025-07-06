"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

type Props = {
  line: string;
  audio?: string;
};

export default function Vocal({ line, audio }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audiRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audiRef.current) {
      if (isPlaying) {
        audiRef.current.play();
      } else {
        audiRef.current.pause();
        audiRef.current.currentTime = 0;
      }
    }
  }, [isPlaying]);
  return (
    audio && (
      <div className="vocal">
        <div className="line">
          <p>{line}</p>
        </div>
        {audio && (
          <>
            <audio ref={audiRef} src={audio}></audio>
            <div className="ctrl">
              <div
                className="btn btn-play"
                onClick={() => {
                  setIsPlaying(!isPlaying);
                }}
              >
                {!isPlaying ? (
                  <FaPlay className="play" />
                ) : (
                  <FaPause className="pause" />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    )
  );
}
