"use client";

import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { urlFor } from "../db/db";
import { AnimatePresence, motion } from "motion/react";

type Props = {
  ul: any;
};

export default function Units({ ul }: Props) {
  const [c, setC] = useState(0);

  let curr = ul[c];
  return (
    <section id="units">
      <div className="l">
        <div className="ul">
          <h2>OUR UNIT</h2>
          {ul.map((u: any, i: number) => {
            return (
              <button
                className={`btn btn-unit ${i == c ? "selected" : ""}`}
                onClick={() => setC(i)}
              >
                {u.un}
              </button>
            );
          })}
        </div>
        <div className="md">
          <div className="md-h">
            <div className="title">
              <h2>{curr?.un}</h2>
              <p>{curr?.ur}</p>
            </div>
            <div className="icon">
              <img src={curr?.ic && urlFor(curr.ic).height(200).url()} alt="" />
            </div>
          </div>
          <img src="/d/gold-dash.png" alt="" className="dash" />
          <p className="desc">{curr?.ub}</p>

          <div className="md-ct">
            {curr?.x && (
              <a href={curr.x} className="btn xl">
                <FaXTwitter /> {curr.xid}
              </a>
            )}
            {curr?.m && (
              <a href={`mailto:${curr.m}`} className="btn mail">
                <MdMail /> {curr.m}
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="r">
        <AnimatePresence mode="popLayout">
          <motion.img
            src={curr?.bn && urlFor(curr.bn).height(1024).url()}
            key={curr._key}
            alt=""
            initial={{
              opacity: 0,
              y: 1000,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -1000,
            }}
            transition={{
              duration: 0.5,
            }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
}
