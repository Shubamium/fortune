import React from "react";
import TLink from "../tlink/TLink";
import { FaDiscord, FaTwitch, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./footer.scss";
import { fetchData, urlFor } from "@/app/db/db";
type Props = {};

export default async function Footer({}: Props) {
  const tl = await fetchData<any[]>(`
		*[_type == "talents"]{
		slug,
			art{
				ft
			}
		}
	`);

  const rt = tl[Math.floor(Math.random() * tl.length)];
  const randomTalentArt = rt?.art?.ft;

  console.log(tl, randomTalentArt);
  return (
    <>
      <footer id="footer">
        <div className="l">
          <img src="/b/ftbgl.png" alt="" />
        </div>
        <div className="r">
          <img src="/b/ftbgr.png" alt="" className="ftbgr" />
          <img src="/d/foc.png" alt="" className="foc" />
          <div className="c">
            <div className="navigation">
              <h2>NAVIGATION</h2>
              <img src="/d/dash2.png" alt="" className="dash" />
              <div className="nav-links">
                <TLink href="/" className="btn btn-fnav">
                  HOME
                </TLink>

                <TLink href="/about" className="btn btn-fnav">
                  ABOUT
                </TLink>
                <TLink href="/news" className="btn btn-fnav">
                  NEWS
                </TLink>
                <TLink href="/talents" className="btn btn-fnav">
                  TALENTS
                </TLink>

                <TLink href="/contacts" className="btn btn-fnav">
                  CONTACTS
                </TLink>
              </div>
            </div>
            <div className="socials">
              <a
                href="https://discord.com/invite/hKP6hWG4W8"
                target="_blank"
                className="btn btn-soc"
              >
                <FaDiscord />
                <img src="/d/ctbg.png" alt="" className="bg" />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCITO-p2fDxC-ZAKQWjJHkIQ"
                className="btn btn-soc"
              >
                <img src="/d/ctbg.png" alt="" className="bg" />
                <FaYoutube />
              </a>
              <a
                href="https://forms.gle/6MTBmnrGXPGTArat7"
                target="_blank"
                className="btn btn-soc"
              >
                <img src="/d/ctbg.png" alt="" className="bg" />
                <FaXTwitter />
              </a>
            </div>
          </div>
          <TLink href={`/talent/${rt.slug.current}`} className="a">
            <img
              src={randomTalentArt && urlFor(randomTalentArt).height(600).url()}
            />
          </TLink>
        </div>
      </footer>
      <div id="fcopymini">
        <p>© 2025 FORTUNE VSTUDIOS</p>
        <hr />
      </div>
    </>
  );
}
