import React, { useState } from "react";

export default function Selection(props) {
  let [style, setStyle] = useState({ background: "" });

  let applyColor = props.applyColor;
  let background = props.nextBackground;

  return (
    <div className="fix-box" onClick={() => setStyle(applyColor)} style={style}>
      <h2 className="subheading">Selection</h2>
    </div>
  );
}
