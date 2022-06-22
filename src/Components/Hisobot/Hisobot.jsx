import React, { useState } from "react";
import BarChart from "./BarChart";
import {LineData} from '../../LineData'
import PieChart from "../BoshSahifa/PieChart";
import { PieData } from "../../PieData";
import './Hisobot.css'

export default function Hisobot({short}) {

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
    <div>
      <div className={`container ${short ? "container-use" : ""}`}>
        <div className="content">
          <h1>Hisobot Holati</h1>
          <BarChart chartData={userData} />
          <div className="pie-div">
          <PieChart chartData={userPie} />
          </div>
        </div>
      </div>
      
    </div>
  );
}
