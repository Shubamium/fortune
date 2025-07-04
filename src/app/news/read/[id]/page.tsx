import React from "react";

type Props = {};
import "./newsread.scss";
import TLink from "@/app/components/tlink/TLink";
export default function page({}: Props) {
  return (
    <main id="p_read">
      <div className="ban">
        <img src="/g/news-place.png" alt="" />
      </div>
      <div className="n-head">
        <h2 className="title">News Title</h2>
        <hr />
        <p className="date">17 March 2025</p>
        <img src="/d/scratched2.png" alt="" />
      </div>

      <div className="n-body confine">
        <div className="ctrl">
          <TLink href="/news" className="btn btn-back">
            <img src="/g/nlbutton.png" alt="" />
          </TLink>
        </div>
        <article>
          <h1>Hello</h1>
          <h2>H2</h2>
          <h3>h3</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus blanditiis modi, voluptas ipsam corrupti dolore,
            reiciendis laborum ullam ducimus, ipsa voluptatem quibusdam!
            Explicabo vero minus odit vitae. Ea, dolor, nisi facilis tempora
            perspiciatis molestiae est mollitia, eaque voluptatum aspernatur
            reiciendis dolorum consequatur! Eos perspiciatis libero ullam
            tempora ar fugiat veniam quae corrupti aperiam repellat dignissimos
            beatae!
          </p>
          <img src="/b/fortunefire.png" alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus blanditiis modi, voluptas ipsam corrupti dolore,
            reiciendis laborum ullam ducimus, ipsa voluptatem quibusdam!
            Explicabo vero minus odit vitae. Ea, dolor, nisi facilis tempora
            perspiciatis molestiae est mollitia, eaque voluptatum aspernatur
            reiciendis dolorum consequatur! Eos perspiciatis libero ullam
            tempora ar fugiat veniam quae corrupti aperiam repellat dignissimos
            beatae!
          </p>
        </article>
      </div>
    </main>
  );
}
