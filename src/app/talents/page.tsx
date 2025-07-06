import React from "react";
import "./talents.scss";
import TLink from "../components/tlink/TLink";
import { fetchData, urlFor } from "../db/db";
type Props = {};

export default async function page({}: Props) {
  const gl = await fetchData<any[]>(`
		*[_type == "gen"]{
			gn,
			gs,
			tl[]->{
				n,
				slug,
				art{
					la}
			}
		}
	`);

  console.log(gl[0]);
  return (
    <main id="p_tal">
      <section id="ptalhead">
        <div className="l">
          <img src="/d/fragmentbg.png" className="frag" alt="" />
          <h2>TALENTS</h2>
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
        </div>
      </section>

      {gl?.map((data: any, index: number) => {
        return (
          <div className="generation" key={data.gs?.current + index}>
            <div className="title">
              <h2>{data.gn}</h2>
              <img src="/d/dash2.png" alt="" />
            </div>
            <div className="tal">
              {data.tl?.map((t: any, i: number) => {
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
          </div>
        );
      })}
    </main>
  );
}
