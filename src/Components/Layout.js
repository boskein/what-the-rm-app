import React from "react";

export default function Layout(props) {
  return (
    <div className="Layout">
      <div className="container">{props.children}</div>
    </div>
  );
}
