import React from "react";
import TLink from "../components/tlink/TLink";
import "./newslist.scss";
import { fetchData, urlFor } from "../db/db";
import NewsCategory from "./NewsCategory";
import { redirect } from "next/navigation";
import NewsSlider from "./NewsSlider";
type Props = {
  searchParams: Promise<{ cat?: string }>;
};

export default async function page({ searchParams }: Props) {
  const sp = await searchParams;

  const cat = sp.cat;

  let news = [];
  if (!cat) {
    // All News
    const an = await fetchData<any[]>(`*[_type == "news"]{...}`);
    news = an;
  } else {
    // Get Specific Category
    const sn = await fetchData<any[]>(
      `*[_type == "news" && cat->slug.current == "${cat}"]{...}`
    );
    if (!sn) {
      redirect("/news");
    }
    news = sn;
  }

  const cl = await fetchData<any>(`*[_type == "news_cat"]{
			...,
	}`);

  const fl = await fetchData<any>(
    `*[_type == "general" && preset == "main"][0]{
			fn[]->{
				...
			}
		}`
  );
  // IF slug then get specific news
  console.log(fl.fn);
  return (
    <main id="p_nl">
      <NewsSlider fl={fl.fn} />
      <NewsCategory cl={cl} cat={cat} />
      <div id="nlist">
        <img src="/d/chain.png" alt="" className="chain l" />
        <img src="/d/chain.png" alt="" className="chain r" />

        {news && news.length > 0 ? (
          news.map((n: any, i: number) => {
            return (
              <div className="n" key={n._id + i}>
                <div className="ban">
                  <img src={n.th && urlFor(n.th).height(500).url()} alt={""} />
                </div>
                <div className="data">
                  <div className="top">
                    <h2 className="t">{n.t}</h2>
                    <hr />
                    <p className="d">{new Date(n.d).toDateString()}</p>
                    <p className="ex">{n.ex}</p>
                  </div>
                  <div className="bottom">
                    <TLink
                      href={`/news/read/${n.slug?.current}`}
                      className="btn btn-ru"
                    >
                      Read More
                    </TLink>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="empty">
            <p>No News Currently, Please check back later!</p>
          </div>
        )}
        {/* <div className="n">
          <div className="ban">
            <img src="/g/news-place.png" alt={""} />
          </div>
          <div className="data">
            <div className="top">
              <h2 className="t">News Title</h2>
              <hr />
              <p className="d">17 March 2025</p>
              <p className="ex">
                (News Excerpt) VStudios is a US based Multimedia Studio that
                specialises in the entertainment industry focusing primarily...
              </p>
            </div>
            <div className="bottom">
              <TLink href="/news/read/news-id" className="btn btn-ru">
                Read More
              </TLink>
            </div>
          </div>
        </div>
        <div className="n">
          <div className="ban">
            <img src="/g/news-place.png" alt={""} />
          </div>
          <div className="data">
            <div className="top">
              <h2 className="t">News Title</h2>
              <hr />
              <p className="d">17 March 2025</p>
              <p className="ex">
                (News Excerpt) VStudios is a US based Multimedia Studio that
                specialises in the entertainment industry focusing primarily...
              </p>
            </div>
            <div className="bottom">
              <TLink href="/news/read/news-id" className="btn btn-ru">
                Read More
              </TLink>
            </div>
          </div>
        </div>
        <div className="n">
          <div className="ban">
            <img src="/g/news-place.png" alt={""} />
          </div>
          <div className="data">
            <div className="top">
              <h2 className="t">News Title</h2>
              <hr />
              <p className="d">17 March 2025</p>
              <p className="ex">
                (News Excerpt) VStudios is a US based Multimedia Studio that
                specialises in the entertainment industry focusing primarily...
              </p>
            </div>
            <div className="bottom">
              <TLink href="/news/read/news-id" className="btn btn-ru">
                Read More
              </TLink>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}
