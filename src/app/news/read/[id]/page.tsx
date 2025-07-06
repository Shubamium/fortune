import React from "react";

import "./newsread.scss";
import TLink from "@/app/components/tlink/TLink";
import { fetchData, urlFor } from "@/app/db/db";
import { redirect } from "next/navigation";
import { PortableText } from "next-sanity";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function page({ params }: Props) {
  const slug = (await params).id;

  const n = await fetchData<any>(
    `*[_type == "news" && slug.current == "${slug}"][0]{...}`
  );

  if (!n) {
    redirect("/news");
  }
  return (
    <main id="p_read">
      <div className="ban">
        <img src={n.bn && urlFor(n.bn).height(1024).url()} alt="" />
      </div>
      <div className="n-head">
        <h2 className="title">{n.t}</h2>
        <hr />
        <p className="date">{new Date(n.d).toDateString()}</p>
        <img src="/d/scratched2.png" alt="" />
      </div>

      <div className="n-body confine">
        <div className="ctrl">
          <TLink href="/news" className="btn btn-back">
            <img src="/g/nlbutton.png" alt="" />
          </TLink>
        </div>
        <article>
          <PortableText
            value={n.at}
            components={{
              types: {
                image: ({ value }) => <img src={urlFor(value).url()} alt="" />,
              },
            }}
          />
        </article>
      </div>
    </main>
  );
}
