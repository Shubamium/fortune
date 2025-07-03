import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

type Props = {};

export default function Units({}: Props) {
  return (
    <section id="units">
      <div className="l">
        <div className="ul">
          <h2>OUR UNIT</h2>
          <button className="btn btn-unit"> Member Name</button>
          <button className="btn btn-unit"> Member Name</button>
          <button className="btn btn-unit"> Member Name</button>
          <button className="btn btn-unit"> Member Name</button>
          <button className="btn btn-unit"> Member Name</button>
          <button className="btn btn-unit"> Member Name</button>
        </div>
        <div className="md">
          <div className="md-h">
            <div className="title">
              <h2>VLII_SHADOW</h2>
              <p>My Emote/Logo Artist</p>
            </div>
            <div className="icon">
              <img src="/g/unitico.png" alt="" />
            </div>
          </div>
          <img src="/d/gold-dash.png" alt="" className="dash" />
          <p className="desc">
            Shadow is one of the most unique artist I've met in terms of style &
            design. Originally when I came to her with the idea of Glow in the
            Dark Emotes I wasn't sure how it would turn out since it wasn't
            really something that I've seen done before. But after the design
            sketches we're done I knew i definitely chose the right person &
            from there she's been a really good friend even going on to work on
            bigger projects like My Official logo
          </p>

          <div className="md-ct">
            <a href="https://x.com" className="btn xl">
              <FaXTwitter /> @member_name
            </a>
            <a href="mailto:https://x.com" className="btn mail">
              <MdMail /> nonexistantshadowx@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="r">
        <img src="/g/unitpfp.png" alt="" />
      </div>
    </section>
  );
}
