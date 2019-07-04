import React from "react";
import classNames from "classnames";

const Header = ({ title, classes }) => (
  <header className={classNames("head", classes)}>
    <h1>{title}</h1>
  </header>
);

export default Header;
