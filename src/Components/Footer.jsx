import React from "react";

const Footer = () => {
  return (
    <div
      className="container "
      style={{
        backgroundColor: "#003d3f",
        position: "fixed",
        bottom: "0px",
      }}
    >
      <footer className="d-flex flex-wrap  py-3 mt-3 border-top">
        <div className="col-md-4 d-flex ">
          <span className="mb-3 mb-md-0 text-white">© 2024 Virtuo, Inc</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
