import { FaArrowRight, FaNewspaper } from "react-icons/fa";
import TLink from "./components/tlink/TLink";
import "./home.scss";
import { GiScrollQuill, GiSwordAltar } from "react-icons/gi";
import TalentScroll from "./home/TalentScroll";
import { fetchData } from "./db/db";

export default async function Home() {
  const td = await fetchData<any>(`*[_type == "talents"]{
			slug,
			n,
			art{
			la
			}
		}`);
  console.log(td);
  return (
    <main id={"page_home"}>
      <div
        className="main-video
			"
      >
        <video
          src="https://ik.imagekit.io/h4fj7874u/output.mp4?updatedAt=1751100721117"
          autoPlay
          muted
          id="hero-vid"
          loop
        ></video>
        <img src="/g/" alt="" />
        <div className="arrow">
          <img src="/d/arr.svg" alt="" />
        </div>
      </div>

      <section id="hero">
        <article>
          <h2>Innovating VTubers</h2>
          <p className="sub">BEYOND CREATIVITY</p>
          <p className="desc">
            Pioneering the Next Generation of VTubing, we accomplish what's
            never been done before
          </p>
          <a href="/about" className="btn btn-sketch">
            Learn More
          </a>
        </article>
        <div className="arrow">
          <img src="/d/arr.svg" alt="" />
        </div>
        <div className="sketcher"></div>
      </section>

      <div className="section-divider"></div>
      <TalentScroll tl={td} />
      <div className="arrow centerarr">
        <img src="/d/arr.svg" alt="" />
      </div>
      <div className="section-divider"></div>

      <section id="contact">
        <div className="confine">
          <div className="l">
            <div className="t">
              <TLink href="/news" className="btn btn-ct">
                <FaNewspaper />
                <p>NEWS</p>
              </TLink>
            </div>
            <div className="c">
              <TLink href="/talents" className="btn btn-ct">
                <GiSwordAltar />
                <p>TALENTS</p>
              </TLink>
              <TLink href="/contacts" className="btn btn-ct">
                <GiScrollQuill />
                <p>CONTACT</p>
              </TLink>
            </div>
            <div className="b">
              <div className="btn btn-ct">
                <img src="/g/icon2.png" alt="" />
                <p>ABOUT</p>
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
