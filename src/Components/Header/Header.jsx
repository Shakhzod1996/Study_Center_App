import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { RiBarChartBoxFill, RiUserVoiceFill } from "react-icons/ri";
import { BsCashCoin, BsCalendarDate, BsNewspaper } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { FaUserNurse } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";

export default function Header({setShort, short}) {
  

  const shortHeaderHandler = () => {
    setShort(!short);
  };
  return (
    <div className={`header ${short ? "header-short" : ""}`}>
      <div className="header-div">
        <h3  className={`${short ? "display-none" : ""}`}>FAJJ EDUCATION</h3>
        {short ?<FaArrowRight onClick={shortHeaderHandler} /> : <FaTimes onClick={shortHeaderHandler} />}
        
      </div>

      <ul className="header-ul">
        <NavLink
          className={({ isActive }) => (isActive ? "actived" : "nonactived")}
          to="/"
        >
          <li>
            <RiBarChartBoxFill />
            <p className={`${short ? "display-none" : ""}`}>
              Umumiy ma'lumotlar
            </p>{" "}
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "actived" : "nonactived")}
          to="/hisobot"
        >
          <li>
            <BsCashCoin />
            <p className={`${short ? "display-none" : ""}`}>
              Hisob Holati
            </p>{" "}
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "actived" : "nonactived")}
          to="/students"
        >
          <li>
            <RiUserVoiceFill />
            <p className={`${short ? "display-none" : ""}`}>O'quvchilar</p>{" "}
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "actived" : "nonactived")}
          to="/groups"
        >
          <li>
            <HiUsers />
            <p className={`${short ? "display-none" : ""}`}> Guruh</p>
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "actived" : "nonactived")}
          to="/dars-jadvali"
        >
          <li>
            {" "}
            <BsCalendarDate />
            <p className={`${short ? "display-none" : ""}`}>
              Dars Jadvali
            </p>{" "}
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "actived" : "nonactived")}
          to="/hisobot"
        >
          <li>
            <BsNewspaper />
            <p className={`${short ? "display-none" : ""}`}>Hisoblar</p>{" "}
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "actived" : "nonactived")}
          to="/teachers"
        >
          <li>
            <FaUserNurse />
            <p className={`${short ? "display-none" : ""}`}>O'qituvchilar</p>
            
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "actived" : "nonactived")}
          to="/sozlamalar"
        >
          <li>
            <AiFillSetting />
            <p className={`${short ? "display-none" : ""}`}>Sozlanma</p>
            
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "actived" : "nonactived")}
          to="/vqbvq"
        >
          <li>
            <FiLogOut />
            <p className={`${short ? "display-none" : ""}`}>Log Out</p>
            
          </li>
        </NavLink>
      </ul>
    </div>
  );
}
