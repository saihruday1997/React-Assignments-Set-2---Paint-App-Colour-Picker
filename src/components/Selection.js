import React, { useState } from "react";

export default function Selection(props) {
  let [selectionStyle, updateSelectionStyle] = useState({ background: "" });

  let applyColor = props.applyColor;

  return (
    <div
      className="fix-box"
      onClick={() => applyColor(updateSelectionStyle)}
      style={selectionStyle}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
}
