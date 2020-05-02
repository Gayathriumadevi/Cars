import React, { Component } from "react";

function Title({ children, title }) {
  return (
    <div>
      <h4 className="section-title">{title}</h4>
      <div>{children}</div>
    </div>
  );
}

export default Title;
