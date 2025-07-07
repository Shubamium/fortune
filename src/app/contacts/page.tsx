"use client";
import React, { FormEvent, useState } from "react";
import "./contact.scss";
import { FaXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { BiLoader } from "react-icons/bi";
import { submitContact } from "../db/mail";
type Props = {};

export default function page({}: Props) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <main id="p_con">
      <div className={`loading ${loading ? "load" : "hid"}`}>
        <BiLoader />
        <p>{message}</p>
      </div>
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
                <a
                  href="https://x.com/fortunevtuber?lang=en"
                  target="_blank"
                  className="btn "
                >
                  <span>Reach Out On</span>
                  <FaXTwitter />
                </a>
                <a
                  href="mailto:FortuneVTbusiness@gmail.com"
                  target="_blank"
                  className="btn "
                >
                  <span>Our Email</span>
                  <CgMail />
                </a>
              </div>
            </div>
          </div>

          <form
            id="ctform"
            onSubmit={async (e: FormEvent) => {
              e.preventDefault();
              setLoading(true);
              setMessage("Submitting Message . . .");
              const formData = new FormData(e.target as HTMLFormElement);
              const data: any = Object.fromEntries(formData);
              const submit = await submitContact(
                data.email,
                data.message,
                data.name,
                data.subject
              );

              if (submit) {
                setMessage("Message Submitted Successfully!");
                const form = e.target as HTMLFormElement;
                form.reset();
              } else {
                setMessage("Something wrong, try again later!");
              }
              setTimeout(() => {
                setLoading(false);
              }, 2000);
            }}
          >
            <img src="/g/icon2.png" alt="" className="icon" />
            <div className="fg">
              <div className="f">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Write your name here"
                />
              </div>
              <div className="f">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Write your email here"
                />
              </div>
            </div>
            <div className="f">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Write your subject here"
              />
            </div>
            <div className="f">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                required
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
