import { FaArrowRight, FaNewspaper } from "react-icons/fa";
import TLink from "./components/tlink/TLink";
import "./home.scss";
export default function Home() {
  return (
    <main id={"page_home"}>
      <video
        src="https://ik.imagekit.io/h4fj7874u/output.mp4?updatedAt=1751100721117"
        autoPlay
        muted
        id="hero-vid"
        loop
      ></video>

      <section id="hero">
        <article>
          <h2>Innovating VTubers</h2>
          <p className="sub">BEYOND CREATIVITY</p>
          <p className="desc">
            Pioneering the Next Generation of VTubing, we accomplish what's
            never been done before
          </p>
          <button className="btn btn-sketch">Learn More</button>
        </article>
        <div className="arrow">
          <img src="/d/arr.svg" alt="" />
        </div>
        <div className="sketcher"></div>
      </section>

      <div className="section-divider"></div>
      <section id="talent-scroll">
        <div className="heading">
          <div className="l">
            <img src="/d/fragmentbg.png" className="frag" alt="" />
            <h2>TALENTS</h2>
          </div>
          <div className="r">
            <TLink href="#" className="btn btn-sketch">
              All Talents <FaArrowRight />
            </TLink>
          </div>
        </div>
        <img src="/d/dust.png" alt="" className="dust" />
        <div className="scroller">
          <div className="scroll">
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
      </section>
      <div className="section-divider"></div>

      <section id="contact">
        <div className="confine">
          <div className="l">
            <div className="t">
              <div className="btn btn-ct">
                <FaNewspaper />
                <p>NEWS</p>
              </div>
            </div>
            <div className="c">
              <div className="btn btn-ct">
                <FaNewspaper />
                <p>NEWS</p>
              </div>
              <div className="btn btn-ct">
                <FaNewspaper />
                <p>NEWS</p>
              </div>
            </div>
            <div className="b">
              <div className="btn btn-ct">
                <FaNewspaper />
                <p>NEWS</p>
              </div>
            </div>
          </div>
          <div className="r">
            <img src="/g/thronet.png" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}
