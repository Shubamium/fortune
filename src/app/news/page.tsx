import React from "react";
import TLink from "../components/tlink/TLink";
import "./newslist.scss";
type Props = {};

export default function page({}: Props) {
  return (
    <main id="p_nl">
      <div id="featured">
        <div className="banner">
          <img src="/g/news-place.png" alt="" className="ban" />
        </div>
        <div className="ni">
          <p className="date">17 March 2025</p>
          <h2 className="title">News Title</h2>
          <p className="ex">
            (News Excerpt) VStudios is a US based Multimedia Studio that
            specialises in the entertainment industry focusing primarily...
          </p>

          {/* underline */}
          <TLink href="#" className="btn btn-ru">
            Read More
          </TLink>
        </div>
        <div className="pager">
          <div className="btn p"></div>
          <div className="btn p"></div>
          <div className="btn p act"></div>
          <div className="btn p"></div>
        </div>
      </div>
      <div id="cat-list">
        <div className="btn btn-cat act">All News</div>
        <div className="btn btn-cat">Category 1</div>
        <div className="btn btn-cat">Category 2</div>
        <div className="btn btn-cat">Category 3</div>
        <div className="btn btn-cat">Category 4</div>
        <div className="btn btn-cat">Category 5</div>
        <div className="btn btn-cat">Category 6</div>
      </div>
      <div id="nlist">
        <img src="/d/chain.png" alt="" className="chain l" />
        <img src="/d/chain.png" alt="" className="chain r" />

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
        </div>
      </div>
    </main>
  );
}
