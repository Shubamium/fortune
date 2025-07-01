"use client";
import React, { useState } from "react";
import "./header.scss";
import TLink from "../tlink/TLink";
import { FaArrowLeft } from "react-icons/fa";
type Props = {};

export default function Header({}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header id={"header"}>
        <div className="logo">
          <img src="/g/logo.png" alt="" />
        </div>
        <nav>
          <div className="btn" onClick={() => setOpen(!open)}>
            <img src="/g/menubtn.png" alt="" />
          </div>
        </nav>
      </header>

      <div
        className={`fs-header ${open ? "open" : "close"}`}
        onClick={() => {
          setOpen(false);
        }}
      >
        <div className="side">
          <TLink href="/" className="btn btn-fnav">
            HOME
          </TLink>
          <TLink href="/about" className="btn btn-fnav">
            ABOUT
          </TLink>

          <TLink href="/talents" className="btn btn-fnav">
            TALENTS
          </TLink>
          <TLink href="/teams" className="btn btn-fnav">
            TEAMS
          </TLink>
          <TLink href="/news" className="btn btn-fnav">
            NEWS
          </TLink>
          <TLink href="/contacts" className="btn btn-fnav">
            CONTACT
          </TLink>
          <a className="btn btn-fnav" onClick={() => setOpen(!open)}>
            CLOSE
          </a>
        </div>
      </div>
    </>
  );
}
