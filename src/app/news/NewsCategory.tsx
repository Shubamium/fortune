"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  cl: any[];
  cat: any;
};

export default function NewsCategory({ cl, cat }: Props) {
  const router = useRouter();
  return (
    <div id="cat-list">
      <button
        className={!cat ? "btn btn-cat act" : "btn btn-cat"}
        onClick={() => {
          router.push("/news", {
            scroll: false,
          });
        }}
      >
        All News
      </button>
      {cl?.map((c: any, i: number) => (
        <button
          className={`btn btn-cat ${c.slug.current == cat ? "act" : ""}`}
          key={c._id}
          onClick={() => {
            router.push(`/news?cat=${c.slug.current}`, {
              scroll: false,
            });
          }}
        >
          {c.n}
        </button>
      ))}
    </div>
  );
}
