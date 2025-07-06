import TLink from "../components/tlink/TLink";
import "./about.scss";
import React from "react";
import Units from "./Units";
import { fetchData, urlFor } from "../db/db";

type Props = {};

export default async function page({}: Props) {
  const gd = await fetchData<any>(`
			*[_type == "general" && preset == "main"][0]{
				ul,
				pt,
			}
	`);
  return (
    <main id="p_about">
      <section id="main-about">
        <img src="/b/campfirebg.png" alt="" className="deco-camp" />

        <div className="l">
          <img src="/g/fminilogo.png" alt="" />
          <h2>ABOUT US</h2>
          <p>
            Fortune VStudios is a US based Multimedia Studio that specialises in
            the entertainment industry focusing primarily on Creative Content,
            Music, & Gaming. Through the medium of VTubing.
          </p>
        </div>
        <div className="r">
          <img src="/g/throne.png" alt="" />
        </div>
      </section>
      <section id="curated">
        <div className="confine">
          <p>
            Our Team is Curated Entirely of <strong>Passionate VTubers</strong>{" "}
            & VTuber enthusiasts who want to push the boundaries of what VTubing
            could be! Together we strive to do what's never been done before and
            we work hard everyday to guide the ever evolving VTuber Community to
            a <u>more Creative Future.</u>
          </p>
        </div>
      </section>
      <section id="goal-main">
        <img src="/d/chain.png" alt="" className="chain l" />
        <img src="/d/chain.png" alt="" className="chain r" />

        <img src="/d/clock.png" alt="" className="clock r" />
        <img src="/d/clock.png" alt="" className="clock l" />
        <img src="/g/goaldiamond.png" alt="" className="dia" />
        <h2>GOAL</h2>
        <img src="/d/dash2.png" alt="" className="dash" />

        <div className="crep">
          <h3>The Creativity Project</h3>
          <svg
            width="143"
            height="211"
            viewBox="0 0 143 211"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M71.3555 0C84.7679 40.8023 95.6057 60.5981 142.066 70.7107C94.6603 83.302 81.4616 118.85 71.3555 210.711C61.434 121.744 45.5399 91.3268 0.644792 70.7107C41.5442 59.9998 55.5666 42.6602 71.3555 0Z"
              fill="white"
              fill-opacity="0.07"
            />
          </svg>

          <p>
            The VTuber Community is a unique & untapped market offering so much
            if you have the willingness & aspiration to create it!
          </p>
        </div>
      </section>
      <section id="goal-expand">
        <div className="l">
          <h2>Our goal? To expand it!</h2>
          <img src="/d/dash2.png" alt="" className="dash" />
          <p>
            As we move forward we will continually innovate past the boundaries
            of what was thought to be achievable using media, music, animation,
            & much more! Our hope is to inspire the VTuber community to
            accomplish more than what was previously the status quo.{" "}
          </p>

          <p>
            When imagination is the limit, the possibilities are endless so why
            should we stop before we’ve even begun?{" "}
          </p>

          <TLink href="/minigame" className="chibfor">
            <p>Click Me!</p>
            <img src="/g/forchib.png" alt="" />
          </TLink>
        </div>
        <div className="r">
          <img src="/g/goalim.png" alt="" />
        </div>
      </section>

      <Units ul={gd.ul} />

      <section id="generation">
        <div className="top">
          <img src="/g/fminilogo.png" alt="" />
          <p>It’s time to become </p>
          <h2>THE NEXT GENERATION OF VTUBERS.</h2>
        </div>
        <div className="bottom">
          <button className="btn btn-sketch">Apply Now</button>
        </div>
      </section>

      <section id="partners">
        <h2>PARTNERS</h2>
        <img src="/d/dash2.png" alt="" className="dash" />
        <div className="plist">
          {gd.pt?.map((p: any, i: number) => (
            <img src={p && urlFor(p).height(500).url()} alt="" />
          ))}
        </div>
      </section>
    </main>
  );
}
