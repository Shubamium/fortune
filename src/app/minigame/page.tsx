"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {};
import "./minigame.scss";
import { CgArrowLeft } from "react-icons/cg";
import { getCount, syncCount } from "../db/dbfunc";

const fortuneList = [
  `/g/mini/1.png`,
  `/g/mini/2.png`,
  `/g/mini/3.png`,
  `/g/mini/4.png`,
  `/g/mini/5.png`,
  `/g/mini/6.png`,
  `/g/mini/7.png`,
];

export default function page({}: Props) {
  const [muted, setMuted] = useState(false);
  const [currentCount, setCurrentCount] = useState(0);
  const [totalCount, setTotalCount] = useState(-1);
  const tcRef = useRef(totalCount);
  const lastSync = useRef(totalCount);
  const audiRef = useRef<HTMLAudioElement>(null);

  const miniContRef = useRef<HTMLDivElement>(null);
  const addCount = () => {
    setCurrentCount(currentCount + 1);
    setTotalCount(totalCount + 1);
    spawnFortune();
  };
  useEffect(() => {
    const checkCount = async () => {
      const tc = await getCount();
      setTotalCount(tc);
      lastSync.current = tc;
    };
    checkCount();

    // Sync Count on Server
    const sync = () => {
      if (tcRef.current === lastSync.current || tcRef.current === -1) return;
      syncCount(tcRef.current);
      lastSync.current = tcRef.current;
      console.log("syncing server");
      return tcRef.current;
    };

    // Sync the server every 5s
    setInterval(() => {
      sync();
    }, 3000);
  }, []);

  useEffect(() => {
    tcRef.current = totalCount;
  }, [totalCount]);

  const spawnFortune = () => {
    if (miniContRef.current) {
      const forEl = document.createElement("img");
      forEl.src = fortuneList[Math.floor(Math.random() * fortuneList.length)];
      miniContRef.current.appendChild(forEl);
      forEl.style.left = Math.floor(Math.random() * 90) + 10 + "%";
      forEl.style.top = Math.floor(Math.random() * 90) + 0 + "%";
      forEl.style.rotate = Math.floor(Math.random() * 360) + "deg";
      forEl.style.scale = Math.random() * 1.1 + 0.8 + "";
      if (!muted && audiRef.current) {
        audiRef.current.play();
      }
      setTimeout(() => {
        forEl.remove();
      }, 2000);
    }
  };
  useEffect(() => {
    if (!muted) {
      audiRef.current?.play();
    }
  }, [muted]);
  return (
    <main id="minigame">
      <audio src="/a/bgm.mp3" autoPlay loop muted={muted} ref={audiRef}></audio>
      <h2 className="finalCount">
        {totalCount === -1
          ? "Loading . . ."
          : totalCount.toLocaleString("id-ID")}
      </h2>
      <p className="mainCount">{currentCount.toLocaleString("id-ID")}</p>
      <div className="control">
        <img
          src="/g/logo.png"
          draggable={false}
          alt=""
          className="btn btn-logo"
          onClick={addCount}
        />
        <p>
          {" "}
          <CgArrowLeft /> Click Here
        </p>
      </div>

      <button
        className={`btn btn-mute ${muted ? "muted" : ""}`}
        onClick={() => setMuted(!muted)}
      >
        <img src="/g/btn-sfx.png" alt="" />
      </button>

      <div className="mini-for" ref={miniContRef}></div>
    </main>
  );
}
