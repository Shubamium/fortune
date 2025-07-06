import React from "react";
import "./talents.scss";
import TLink from "../components/tlink/TLink";
type Props = {};

export default function page({}: Props) {
  return (
    <main id="p_tal">
      <section id="ptalhead">
        <div className="l">
          <img src="/d/fragmentbg.png" className="frag" alt="" />
          <h2>TALENTS</h2>
          <div className="infitext">
            <p>TALENTS</p>
            <p>TALENTS</p>
            <p>TALENTS</p>
            <p>TALENTS</p>
            <p>TALENTS</p>
            <p>TALENTS</p>
            <p>TALENTS</p>
            <p>TALENTS</p>
            <p>TALENTS</p>
            <p>TALENTS</p>
            <p>TALENTS</p>
            <p>TALENTS</p>
            <p>TALENTS</p>
            <p>TALENTS</p>
            <p>TALENTS</p>
            <p>TALENTS</p>
            <p>TALENTS</p>
            <p>TALENTS</p>
            <p>TALENTS</p>
            <p>TALENTS</p>
            <p>TALENTS</p>
            <p>TALENTS</p>
          </div>
        </div>
      </section>

      <div className="generation">
        <div className="title">
          <h2>GEN 1</h2>
          <img src="/d/dash2.png" alt="" />
        </div>
        <div className="tal">
          <TLink href="/talent/fortune" className="tc">
            <img src="/g/tcart.png" className="tcart" alt="" />
            <h2 className="fn">FORTUNE</h2>
          </TLink>
          <TLink href="/talent/fortune" className="tc">
            <img src="/g/tcart.png" className="tcart" alt="" />
            <h2 className="fn">FORTUNE</h2>
          </TLink>
          <TLink href="/talent/fortune" className="tc">
            <img src="/g/tcart.png" className="tcart" alt="" />
            <h2 className="fn">FORTUNE</h2>
          </TLink>
          <TLink href="/talent/fortune" className="tc">
            <img src="/g/tcart.png" className="tcart" alt="" />
            <h2 className="fn">FORTUNE</h2>
          </TLink>
          <TLink href="/talent/fortune" className="tc">
            <img src="/g/tcart.png" className="tcart" alt="" />
            <h2 className="fn">FORTUNE</h2>
          </TLink>
        </div>
      </div>
      <div className="generation">
        <div className="title">
          <h2>GEN 2</h2>
          <img src="/d/dash2.png" alt="" />
        </div>
        <div className="tal">
          <TLink href="/talent/fortune" className="tc">
            <img src="/g/tcart.png" className="tcart" alt="" />
            <h2 className="fn">FORTUNE</h2>
          </TLink>
          <TLink href="/talent/fortune" className="tc">
            <img src="/g/tcart.png" className="tcart" alt="" />
            <h2 className="fn">FORTUNE</h2>
          </TLink>
          <TLink href="/talent/fortune" className="tc">
            <img src="/g/tcart.png" className="tcart" alt="" />
            <h2 className="fn">FORTUNE</h2>
          </TLink>
          <TLink href="/talent/fortune" className="tc">
            <img src="/g/tcart.png" className="tcart" alt="" />
            <h2 className="fn">FORTUNE</h2>
          </TLink>
          <TLink href="/talent/fortune" className="tc">
            <img src="/g/tcart.png" className="tcart" alt="" />
            <h2 className="fn">FORTUNE</h2>
          </TLink>
        </div>
      </div>
      <div className="generation">
        <div className="title">
          <h2>GEN 3</h2>
          <img src="/d/dash2.png" alt="" />
        </div>
        <div className="tal">
          <div className="tc">
            <img src="/g/tcart.png" className="tcart" alt="" />
            <h2 className="fn">FORTUNE</h2>
          </div>
          <div className="tc">
            <img src="/g/tcart.png" className="tcart" alt="" />
            <h2 className="fn">FORTUNE</h2>
          </div>
          <div className="tc">
            <img src="/g/tcart.png" className="tcart" alt="" />
            <h2 className="fn">FORTUNE</h2>
          </div>
          <div className="tc">
            <img src="/g/tcart.png" className="tcart" alt="" />
            <h2 className="fn">FORTUNE</h2>
          </div>
          <div className="tc">
            <img src="/g/tcart.png" className="tcart" alt="" />
            <h2 className="fn">FORTUNE</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
