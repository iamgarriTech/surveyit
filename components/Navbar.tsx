"use client"

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";

interface Menu {
  text: string;
  href: string;
}

const MENU_LIST: Menu[] = [
  { text: "Home", href: "/" },
  { text: "Sign Up", href: "/signup" },
  { text: "Create", href: "/create" },
];

const Navbar: React.FC = () => {
  const [navActive, setNavActive] = useState<boolean | null>(null);
  const [activeIdx, setActiveIdx] = useState<number>(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
            <h1 className="logo">SurveyIt</h1>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu: Menu, idx: number) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;