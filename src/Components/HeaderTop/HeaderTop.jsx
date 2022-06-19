import React from "react";
import "./HeaderTop.css";
import { BsSearch, BsFillBellFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function HeaderTop({short}) {
  return (
    <div className={`top-header ${ short ? "new-short" : ""}`}>
      <div className="header-container">
        <div className="inp-div">
          <BsSearch />
          <input
            type="search"
            placeholder="Search transactions, invoices or help"
          />
        </div>
        <div className="right-inf">
          <BsFillBellFill />
          <p>Shaxzod Muradov</p>
          <MdOutlineKeyboardArrowDown />
          <div className="circle">S</div>
        </div>
      </div>
    </div>
  );
}
