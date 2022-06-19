import React, { useState } from "react";
import "./BoshSahifa.css";
import { IoStatsChartSharp } from "react-icons/io5";
import LineChart from "./LineChart";
import { LineData } from "../../LineData";
import PieChart from "./PieChart";
import { PieData } from "../../PieData";
import { NavLink } from "react-router-dom";
import { Uquvchilar } from "../../Uquvchilar";
import {Guruhlar} from "../../Guruhlar"

export default function BoshSahifa({short}) {
  const [userData, setUserData] = useState({
    labels: LineData.map((data) => data.oy),
    datasets: [
      {
        label: "Xarajat",
        data: LineData.map((data) => data.xarajat),
        backgroundColor: ["lightGreen", "lightBlue"],
      },
    ],
  });
  const [userPie, setUserPie] = useState({
    labels: PieData.map((data) => data.oy),
    datasets: [
      {
        label: "Daromad",
        data: PieData.map((data) => data.daromad),
        backgroundColor: ["lightGreen", "lightBlue", "grey", "yellow"],
      },
    ],
  });

  return (
    <div className="bosh-sahifa">
      <div className= {`container ${short ? "container-use" : ""}`}>
        <div className="content">
          <h2>Umumiy ma'lumotlar</h2>
        </div>
        <div className="con-in">
          <ul className="bosh-sahifa-ul">
            <NavLink to="students">
              <li>
                <p>o'quvchi</p>
                <div className="nafar">
                  <div>
                    <h4>{Uquvchilar.length} nafar</h4>
                    <p>4 nafar</p>
                  </div>
                  <div className="icon-p">
                    <IoStatsChartSharp />
                    <IoStatsChartSharp />
                  </div>
                </div>
              </li>
            </NavLink>

            <NavLink to="/teachers">
              <li>
                <p>o'qituvchi</p>
                <div className="nafar">
                  <div>
                    <h4>7 nafar</h4>
                    <p>2 nafar</p>
                  </div>
                  <div className="icon-p1">
                    <IoStatsChartSharp />
                    <IoStatsChartSharp />
                  </div>
                </div>
              </li>
            </NavLink>

            <NavLink to="/groups">
              <li>
                <p>guruh</p>
                <div className="nafar">
                  <div>
                    <h4>{Guruhlar.length} nafar</h4>
                    <p>1 nafar</p>
                  </div>
                  <div className="icon-p2">
                    <IoStatsChartSharp />
                    <IoStatsChartSharp />
                  </div>
                </div>
              </li>
            </NavLink>
          </ul>

          <div className="line-div">
            <LineChart chartData={userData} />
          </div>

          <div className="pie-chart">
            <h2>Fanlarning Daromad kursatkichi</h2>
            <PieChart chartData={userPie} />
          </div>
        </div>
      </div>
    </div>
  );
}
