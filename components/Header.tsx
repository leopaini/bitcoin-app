import React from "react";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

interface IProps {}
const Header: React.SFC<IProps> = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a href="#" className="navbar-brand">
      BitCoin App
    </a>
    <div className="navbar-collaps">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link href="/">
            <a className="nav-link" href="#">
              Home
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about">
            <a className="nav-link" href="#">
              About Us
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
