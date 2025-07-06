import React from "react";

import "./talent.scss";
import { FaArrowRight, FaPlay, FaSpotify, FaTwitch } from "react-icons/fa";
import { CgArrowRight } from "react-icons/cg";
import { BsTiktok, BsYoutube } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import Vocal from "./Vocal";
import { fetchData, urlFor } from "@/app/db/db";
import { redirect } from "next/navigation";
import TLink from "@/app/components/tlink/TLink";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function page({ params }: Props) {
  const slug = await params;

  const td = await fetchData<any>(
    `*[_type == "talents" && slug.current == "${slug.id}"][0]{
			...,
			vo{
				ts,
				'af': af.asset->url
			},
			'gen': gen -> gn,
		}`
  );

  if (!td) {
    redirect("/");
  }
  console.log(td);
  return (
    <main id="p_taldat">
      <section id="main-art">
        <img
          src={urlFor(td?.art?.fb).height(1440).url()}
          alt=""
          className="mart"
        />
        <img src="/d/taldiamon.png" alt="" className="deco-tal" />
        <img src="/d/talline.png" alt="" className="deco-talline" />
      </section>
      <section id="tal-dat">
        <div className="l">
          {td.vo && <Vocal line={td.vo.ts} audio={td.vo.af} />}
          <div className="mascot">
            <img
              src={td?.art?.pt && urlFor(td?.art?.pt).height(500).url()}
              alt=""
            />
          </div>
        </div>
        <div className="r">
          <div className="vid">
            <img src="/d/tal-side.png" alt="" className="side" />
            <img src="/d/chain.png" alt="" className="chain" />
            {td.v_trailer && (
              <iframe
                src={`https://www.youtube.com/embed/${td.v_trailer}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
          </div>
          <TLink href="/talents" className="btn btn-sketch">
            All Talents <CgArrowRight />
          </TLink>
        </div>
      </section>

      <div className="section-divider"></div>
      <img src="/d/taldivider.png" alt="" className="tal-line" />

      <section id="tal-pro">
        <div className="l">
          <img
            src={td.art?.pfp && urlFor(td.art.pfp).height(1000).url()}
            alt=""
            className="pfp"
          />
          <img src="/g/pfpedge.png" alt="" className="edge" />

          <img src="/d/tal-side.png" alt="" className="side" />
          {td.cl && (
            <div className="contacts">
              {td.cl.x && (
                <a href={td.cl.x} target="_blank" className="btn btn-pfpct">
                  <FaXTwitter />
                </a>
              )}
              {td.cl.yt && (
                <a href={td.cl.yt} target="_blank" className="btn btn-pfpct">
                  <BsYoutube />
                </a>
              )}
              {td.cl.tt && (
                <a href={td.cl.tt} target="_blank" className="btn btn-pfpct">
                  <BsTiktok />
                </a>
              )}
              {td.cl.tw && (
                <a href={td.cl.tw} target="_blank" className="btn btn-pfpct">
                  <FaTwitch />
                </a>
              )}
              {td.cl.sp && (
                <a href={td.cl.sp} target="_blank" className="btn btn-pfpct">
                  <FaSpotify />
                </a>
              )}
            </div>
          )}
        </div>
        <div className="r">
          <div className="top-head">
            <h2>TALENT PROFILE</h2>
            <hr></hr>
          </div>
          <div className="profile-panel">
            <img src="/d/chain.png" alt="" className="chain" />

            <div className="top">
              <div className="pp-head">
                <img
                  src={td.art?.l && urlFor(td.art.l).height(500).url()}
                  alt=""
                  className="logo"
                />
                <div className="gen">
                  <p>{td.gen}</p>
                  <img src="/d/dash2.png" alt="" />
                </div>
              </div>
              <div className="kanji">
                <p>{td.an}</p>
              </div>

              <p className="bio">{td.bio}</p>
            </div>
            <div className="bottom">
              <div className="il">
                {td.il &&
                  td.il.map((il: any, i: number) => {
                    return (
                      <div className="info" key={il._key}>
                        <h2>{il.i}</h2>
                        <p>{il.v}</p>
                      </div>
                    );
                  })}
              </div>

              <div className="counter">
                <img
                  src={td.art?.ms && urlFor(td.art.ms).height(300).url()}
                  alt=""
                  className="mascot"
                />
                {td.cl?.tt && (
                  <a href={td.cl.tt} className="count tt btn">
                    <div className="data">
                      <h2>{td.cl.ttc}</h2>
                      <p>Tiktok</p>
                    </div>
                    <div className="icon">
                      <BsTiktok />
                    </div>
                  </a>
                )}
                {td.cl?.yt && (
                  <a href={td.cl.yt} className="count yt btn">
                    <div className="data">
                      <h2>{td.cl.ytc}</h2>
                      <p>Youtuber</p>
                    </div>
                    <div className="icon">
                      <BsYoutube />
                    </div>
                  </a>
                )}
                {td.cl?.x && (
                  <a href={td.cl.x} className="count x btn">
                    <div className="data">
                      <h2>{td.cl.xc}</h2>
                      <p>Twitter</p>
                    </div>
                    <div className="icon">
                      <FaXTwitter />
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
          <img src="/d/chain.png" alt="" className="chain-bot" />
        </div>
      </section>

      {td.v_list && (
        <section id="videos">
          <div className="top-btn">
            <a href={td.cl?.yt} target="_blank" className="btn btn-sketch">
              All Videos <CgArrowRight />
            </a>
          </div>

          <div className="vid-list">
            <div className="h">
              <h2>VIDEOS</h2>
              <img src="/d/dash2.png" alt="" />
            </div>
            <div className="l ">
              {td.v_list.map((v: any, i: number) => {
                return (
                  <div className="video" key={v + i}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
