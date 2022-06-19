import React from "react";

export default function Sozlamalar({short}) {
  return (
    <div>
      <div className={`container ${short ? "container-use": ""}`}>
        <div className="content">
          <h1>Sozlamalar</h1>
        </div>
      </div>
    </div>
  );
}
