import React, { useState } from "react";

export default function Selection(props) {
  let { color } = props.applyColor;

  let [style, setStyle] = useState({ background: "" });

  return (
    <div className="fix-box" onClick={() => color()}>
      <h2 className="subheading">Selection</h2>
    </div>
  );
}
