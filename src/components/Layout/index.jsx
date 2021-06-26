import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="content-wrap">{children}</div>
      <Footer />
    </>
  );
}
