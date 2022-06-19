import React from "react";

export default function Hisobot({short}) {
  return (
    <div>
      <div className={`container ${short ? "container-use" : ""}`}>
        <div className="content">
          <h1>Hisobot Holati</h1>
        </div>
      </div>
      
    </div>
  );
}
