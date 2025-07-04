import React from "react";
import "./contact.scss";
import { FaXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
type Props = {};

export default function page({}: Props) {
  return (
    <main id="p_con">
      <img src="/b/fortunefire.png" alt="" className="forfire" />
      <section id="main-con">
        <div className="confine">
          <div className="info">
            <div className="mt">
              <h2>Contact Us</h2>
              <p>
                Feel free to contact us about any Questions or Business
                Inquiries related to talents, merchandise, or partnerships you
                may have.
              </p>
            </div>
            <div className="other">
              <h2>Other ways of Contact</h2>
              <div className="ct">
                <a href="#" target="_blank" className="btn ">
                  <span>Reach Out On</span>
                  <FaXTwitter />
                </a>
                <a href="#" target="_blank" className="btn ">
                  <span>Our Email</span>
                  <CgMail />
                </a>
              </div>
            </div>
          </div>

          <form id="ctform">
            <div className="fg">
              <div className="f">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Write your name here"
                />
              </div>
              <div className="f">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Write your email here"
                />
              </div>
            </div>
            <div className="f">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Write your subject here"
              />
            </div>
            <div className="f">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Write your message here"
              ></textarea>
            </div>

            <button className="btn btn-sub" type="submit">
              Submit Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
