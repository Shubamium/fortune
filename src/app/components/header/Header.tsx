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
        <img src="/d/chain-h.png" alt="" className="chain-r" />
        <TLink href="/" className="logo">
          <img src="/g/logo.png" alt="" />
        </TLink>
        <nav>
          <img src="/d/chain.png" alt="" className="chain-l" />
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
          <img src="/g/iconbig.png" alt="" height={300} />
          <TLink href="/" className="btn btn-fnav">
            <span>HOME</span>
          </TLink>
          <TLink href="/about" className="btn btn-fnav">
            <span>ABOUT</span>
          </TLink>

          <TLink href="/talents" className="btn btn-fnav">
            <span>TALENTS</span>
          </TLink>

          <TLink href="/news" className="btn btn-fnav">
            <span>NEWS</span>
          </TLink>
          <TLink href="/contacts" className="btn btn-fnav">
            <span>CONTACT</span>
          </TLink>
          <a className="btn btn-fnav" onClick={() => setOpen(!open)}>
            <span>CLOSE</span>
          </a>
        </div>
      </div>
    </>
  );
}
