"use client";
import React, { useEffect, useState } from "react";
import TLink from "../components/tlink/TLink";
import { FaArrowRight } from "react-icons/fa";
import { urlFor } from "../db/db";

type Props = {
  tl: any[];
};

export default function TalentScroll({ tl }: Props) {
  const [at, setAt] = useState<any[]>([]);
  useEffect(() => {
    const copied: any[] = [...tl];
    if (tl.length < 4) {
      while (copied.length < 4) {
        copied.push({});
      }
    }
    setAt(copied);
  }, [tl]);
  return (
    <section id="talent-scroll">
      <div className="heading">
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
        <div className="l">
          <img src="/d/fragmentbg.png" className="frag" alt="" />
          <h2>TALENTS</h2>
          <img src="/d/dash2.png" alt="" className="dash" />
        </div>
        <div className="r">
          <TLink href="/talents" className="btn btn-sketch">
            All Talents <FaArrowRight />
          </TLink>
        </div>
      </div>
      <img src="/d/dust.png" alt="" className="dust" />
      <div className="scroller">
        <div
          className="mover"
          style={{ animationDuration: `${at.length * 3.5}s` }}
        >
          <div className="scroll">
            {at.map((t: any, i: number) => {
              if (!t.slug)
                return (
                  <div className="tc" key={"tal" + i + "1"}>
                    <img src="/g/tmiss.png" className="tcart miss" alt="" />
                    <h2 className="fn">???</h2>
                  </div>
                );
              return (
                <TLink
                  href={`/talent/${t.slug.current}`}
                  className="tc"
                  key={t.slug + "1"}
                >
                  <img
                    src={
                      t.art?.la
                        ? urlFor(t.art?.la).height(900).url()
                        : "/g/tmiss.png"
                    }
                    className="tcart"
                    alt=""
                  />
                  <h2 className="fn">{new String(t.n).toUpperCase()}</h2>
                  <img src="/d/tal-side.png" alt="" className="dia-side l" />
                  <img src="/d/tal-side.png" alt="" className="dia-side r" />
                </TLink>
              );
            })}
          </div>
          <div className="scroll">
            {at.map((t: any, i: number) => {
              if (!t.slug)
                return (
                  <div className="tc" key={"tal" + i + "2"}>
                    <img src="/g/tmiss.png" className="tcart miss" alt="" />
                    <h2 className="fn">???</h2>
                  </div>
                );
              return (
                <TLink
                  href={`/talent/${t.slug.current}`}
                  className="tc"
                  key={t.slug + "2"}
                >
                  <img
                    src={
                      t.art?.la
                        ? urlFor(t.art?.la).height(900).url()
                        : "/g/tmiss.png"
                    }
                    className="tcart"
                    alt=""
                  />
                  <h2 className="fn">{new String(t.n).toUpperCase()}</h2>
                  <img src="/d/tal-side.png" alt="" className="dia-side l" />
                  <img src="/d/tal-side.png" alt="" className="dia-side r" />
                </TLink>
              );
            })}
          </div>
          <div className="scroll">
            {at.map((t: any, i: number) => {
              if (!t.slug)
                return (
                  <div className="tc" key={"tal" + i + "3"}>
                    <img src="/g/tmiss.png" className="tcart miss" alt="" />
                    <h2 className="fn">???</h2>
                  </div>
                );
              return (
                <TLink
                  href={`/talent/${t.slug.current}`}
                  className="tc"
                  key={t.slug + "3"}
                >
                  <img
                    src={
                      t.art?.la
                        ? urlFor(t.art?.la).height(900).url()
                        : "/g/tmiss.png"
                    }
                    className="tcart"
                    alt=""
                  />
                  <h2 className="fn">{new String(t.n).toUpperCase()}</h2>
                  <img src="/d/tal-side.png" alt="" className="dia-side l" />
                  <img src="/d/tal-side.png" alt="" className="dia-side r" />
                </TLink>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
