import React from "react";
import "../styles.css";
import Menu from "./Menu";

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => (
  <div>
    <Menu />
    <div className="mt-5">
      <div className={className}> {children} </div>
    </div>
  </div>
);

export default Layout;
