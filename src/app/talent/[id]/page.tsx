import React from "react";

type Props = {};
import "./talent.scss";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { CgArrowRight } from "react-icons/cg";
import { BsTiktok, BsYoutube } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
export default function page({}: Props) {
  return (
    <main id="p_taldat">
      <section id="main-art">
        <img src="/g/forfull.png" alt="" className="mart" />
        <img src="/d/taldiamon.png" alt="" className="deco-tal" />
        <img src="/d/talline.png" alt="" className="deco-talline" />
      </section>
      <section id="tal-dat">
        <div className="l">
          <div className="vocal">
            <div className="line">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
            <div className="ctrl">
              <div className="btn btn-play">
                <FaPlay />
              </div>
            </div>
          </div>
          <div className="mascot">
            <img src="/g/plush.png" alt="" />
          </div>
        </div>
        <div className="r">
          <div className="vid">
            <iframe
              src="https://www.youtube.com/embed/msqnELT59Nk?si=XPpctBYo8Lhg057I"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="btn btn-sketch">
            All Talents <CgArrowRight />
          </div>
        </div>
      </section>

      <div className="section-divider"></div>
      <img src="/d/taldivider.png" alt="" className="tal-line" />

      <section id="tal-pro">
        <div className="l">
          <img src="/g/talpfp2.png" alt="" className="pfp" />
          <img src="/g/pfpedge.png" alt="" className="edge" />
          <div className="contacts">
            <a href="#" target="_blank" className="btn btn-pfpct">
              {" "}
              <FaXTwitter />
            </a>
            <a href="#" target="_blank" className="btn btn-pfpct">
              {" "}
              <FaXTwitter />
            </a>
            <a href="#" target="_blank" className="btn btn-pfpct">
              {" "}
              <FaXTwitter />
            </a>
          </div>
        </div>
        <div className="r">
          <div className="top-head">
            <h2>TALENT PROFILE</h2>
            <hr></hr>
          </div>
          <div className="profile-panel">
            <div className="top">
              <div className="pp-head">
                <img src="/g/logo.png" alt="" className="logo" />
                <div className="gen">
                  <p>GEN 1</p>
                  <img src="/d/dash2.png" alt="" />
                </div>
              </div>
              <div className="kanji">
                <p>福</p>
              </div>

              <p className="bio">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="bottom">
              <div className="il">
                <div className="info">
                  <h2>Age</h2>
                  <p>UNKNOWN</p>
                </div>
                <div className="info">
                  <h2>Age</h2>
                  <p>UNKNOWN</p>
                </div>
                <div className="info">
                  <h2>Age</h2>
                  <p>UNKNOWN</p>
                </div>
                <div className="info">
                  <h2>Age</h2>
                  <p>UNKNOWN</p>
                </div>
                <div className="info">
                  <h2>Age</h2>
                  <p>UNKNOWN</p>
                </div>
                <div className="info">
                  <h2>Age</h2>
                  <p>UNKNOWN</p>
                </div>
                <div className="info">
                  <h2>Age</h2>
                  <p>UNKNOWN</p>
                </div>
                <div className="info">
                  <h2>Age</h2>
                  <p>UNKNOWN</p>
                </div>
              </div>

              <div className="counter">
                <img src="/g/mascot.png" alt="" className="mascot" />
                <div className="count tt">
                  <div className="data">
                    <h2>25.5k</h2>
                    <p>Tiktok</p>
                  </div>
                  <div className="icon">
                    <BsTiktok />
                  </div>
                </div>
                <div className="count yt">
                  <div className="data">
                    <h2>25.5k</h2>
                    <p>Youtuber</p>
                  </div>
                  <div className="icon">
                    <BsYoutube />
                  </div>
                </div>
                <div className="count x">
                  <div className="data">
                    <h2>25.5k</h2>
                    <p>Twitter</p>
                  </div>
                  <div className="icon">
                    <FaXTwitter />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="videos">
        <div className="top-btn">
          <a href="#" target="_blank" className="btn btn-sketch">
            All Videos <CgArrowRight />
          </a>
        </div>

        <div className="vid-list">
          <div className="h">
            <h2>VIDEOS</h2>
            <img src="/d/dash2.png" alt="" />
          </div>
          <div className="l ">
            <div className="video">
              <iframe
                src="https://www.youtube.com/embed/WvKd91KwTKM?si=mxcOHNei_xMWGWm7"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video">
              <iframe
                src="https://www.youtube.com/embed/WvKd91KwTKM?si=mxcOHNei_xMWGWm7"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video">
              <iframe
                src="https://www.youtube.com/embed/WvKd91KwTKM?si=mxcOHNei_xMWGWm7"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
