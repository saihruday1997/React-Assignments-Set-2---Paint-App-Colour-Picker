import React, { useState } from "react";

export default function Selection(props) {
  let [style, setStyle] = useState({ background: "" });

  return (
    <div className="fix-box">
      <h2 className="subheading">Selection</h2>
    </div>
  );
}
