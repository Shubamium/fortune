"use client";
import React, { useEffect, useState } from "react";
import "./loading.scss";
type Props = {};

export default function Loading({}: Props) {
  const [l, setL] = useState(false);
  const [remove, setRemove] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // setL(true);
    }, 3000);

    setTimeout(() => {
      // setRemove(true);
    }, 4500);
  }, []);

  return (
    !remove && (
      <div id="loading" className={` ${l ? "hide" : "show"}`}>
        <img src="g/mini/4.png" alt="" className="mini-for" />
        <img src="/g/icon2.png" alt="" className="icon" />
        <p className="text">Loading . . .</p>
      </div>
    )
  );
}
