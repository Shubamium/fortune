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
			art{
				ft
			}
		}
	`);

  const randomTalentArt = tl[Math.floor(Math.random() * tl.length)].art?.ft;

  console.log(tl, randomTalentArt);
  return (
    <>
      <footer id="footer">
        <div className="l">
          <img src="/b/ftbgl.png" alt="" />
        </div>
        <div className="r">
          <img src="/b/ftbgr.png" alt="" className="ftbgr" />
          <div className="c">
            <div className="navigation">
              <h2>NAVIGATION</h2>
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
              <a href="#" className="btn btn-soc">
                <FaDiscord />
                <img src="/d/ctbg.png" alt="" className="bg" />
              </a>
              <a href="#" className="btn btn-soc">
                <img src="/d/ctbg.png" alt="" className="bg" />
                <FaYoutube />
              </a>
              <a href="#" className="btn btn-soc">
                <img src="/d/ctbg.png" alt="" className="bg" />
                <FaXTwitter />
              </a>
            </div>
          </div>
          <div className="a">
            <img
              src={randomTalentArt && urlFor(randomTalentArt).height(600).url()}
            />
          </div>
        </div>
      </footer>
      <div id="fcopymini">
        <p>© 2025 FORTUNE VSTUDIOS</p>
        <hr />
      </div>
    </>
  );
}
