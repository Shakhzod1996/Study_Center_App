import React from "react";

export default function DarsJadvali({short}) {
  return (
    <div>
      <div className={`container ${short ? "container-use" : ""}`}>
        <div className="content">
          <h1>DarsJadvali</h1>
        </div>
      </div>
      
    </div>
  );
}
