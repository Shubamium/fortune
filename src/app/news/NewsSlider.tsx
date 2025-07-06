"use client";
import React, { useEffect, useState } from "react";
import TLink from "../components/tlink/TLink";
import { urlFor } from "../db/db";
import { AnimatePresence, motion } from "motion/react";

type Props = {
  fl: any[];
};

export default function NewsSlider({ fl }: Props) {
  const [p, setP] = useState(0);
  useEffect(() => {}, []);
  return (
    <div id="featured">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={"Slider News" + p}
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -500,
          }}
          transition={{
            duration: 0.5,
          }}
          className="cover"
        >
          <div className="banner">
            <img
              src={fl[p]?.bn && urlFor(fl[p].bn).height(800).url()}
              alt=""
              className="ban"
            />
          </div>
          <div className="ni">
            <p className="date">{new Date(fl[p]?.d).toDateString()}</p>
            <h2 className="title">{fl[p]?.t}</h2>
            <p className="ex">{fl[p]?.ex}</p>

            {/* underline */}
            <TLink href={`/news/${fl[p]?.slug.current}`} className="btn btn-ru">
              Read More
            </TLink>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="pager">
        {fl?.map((_: any, i: number) => {
          return (
            <button
              className={`btn p ${i == p ? "act" : ""}`}
              key={"pager" + i}
              onClick={() => {
                setP(i);
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
