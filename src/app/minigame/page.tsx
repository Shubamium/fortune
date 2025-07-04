import React from "react";

type Props = {};
import "./minigame.scss";
import { CgArrowLeft } from "react-icons/cg";
export default function page({}: Props) {
  return (
    <main id="minigame">
      <h2 className="finalCount">1.243.004.943</h2>
      <p className="mainCount">142</p>
      <div className="control">
        <img
          src="/g/logo.png"
          draggable={false}
          alt=""
          className="btn btn-logo"
        />
        <p>
          {" "}
          <CgArrowLeft /> Click Here
        </p>
      </div>

      <button className="btn btn-mute">
        <img src="/g/btn-sfx.png" alt="" />
      </button>
    </main>
  );
}
