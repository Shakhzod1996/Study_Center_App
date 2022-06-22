import React, { useState } from "react";
import "./Students.css";
import { BsSearch } from "react-icons/bs";
import Student from "./Student/Student";

import AddStudent from "./AddStudent/AddStudent";
import { useSelector, useDispatch} from 'react-redux';
import {  AddStudent1 } from "../../Store/RemoveSlice";
import { NavLink } from "react-router-dom";

const showDate = new Date();
const displayToday =
  showDate.getDate() + "/" + showDate.getMonth() + "/" + showDate.getFullYear();

export default function Students({ uquvchilarArr, short }) {
  const [part, setpart] = useState(8);
  const [data, setData] = useState(uquvchilarArr.slice(0, part));

  const [addStudentModal, setAddStudentModal] = useState(false);
  const [nomiVal, setNomiVal] = useState("");
  const [raqamVal, setraqamVal] = useState("");
  const [guruhVal, setGuruhVal] = useState("");
  const [guruhlarVal, setGuruhlarVal] = useState("");
  const [hisobHolat, setHisobHolat] = useState("");


  const {studentsArr} = useSelector((store) => store.remove)
  const dispatch = useDispatch()




  const random = Math.floor(Math.random() * 100);

  const changeNomiHandler = (e) => {
    setNomiVal(e.target.value);
  };

  const changeRaqamHandler = (e) => {
    setraqamVal(e.target.value);
  };

  const changeGuruhHandler = (e) => {
    setGuruhVal(e.target.value);
  };

  const addStudentHandler = () => {
    setAddStudentModal(true);
  };

  const belorQilishHandler = () => {
    setAddStudentModal(false);
    setNomiVal("");
    setraqamVal("");
    setGuruhVal("");
  };

  const guruhlarChangeHandler = (event) => {
    setGuruhlarVal(event.target.value);
  };

  const changeHisobHolati = (e) => {
    setHisobHolat(e.target.value);
  }

  const qushishHandler = (e) => {
    e.preventDefault();
    setAddStudentModal(false);
    dispatch(AddStudent1({nomiVal, raqamVal, guruhVal, guruhlarVal, hisobHolat, random, displayToday}))

    setNomiVal("");
    setraqamVal("");
    setGuruhVal("");
  };

  const backHandler = () => {
    setAddStudentModal(false);
  };

  let parts = studentsArr.length / part;
  const newArrBtn = [];
  for (let i = 1; i <= parts; i++) newArrBtn.push(i);
  const handlerPagenation = (e, item) => {
    console.log();
    setActive(item)
    let end = (e.target.id - 1) * part;
    let partsArr = studentsArr.slice(end, part + end);
    setData(partsArr);
  };

  const [active,setActive] = useState(newArrBtn[0])


  return (
    <div>
      <div className={`container ${short ? "container-use" : ""}`}>
        <div className="content">
          <div className="students-head-flex">
            <div className="head-left">
              <h2>O'quvchilar</h2>
              <button onClick={addStudentHandler}>O'quvchi qushish</button>
            </div>
            <div className="head-right">
              <BsSearch />
              <input type="search" placeholder="ismi buyicha qidirish" />
            </div>
          </div>

          <p className="pages">1-7/ 33 tadan</p>

          <div className="each-student">
            <Student
              uquvchilarArr={uquvchilarArr}
              setData={setData}
              data={studentsArr}
              handlerPagenation={handlerPagenation}
              newArrBtn={newArrBtn}
              active={active}
            />
          </div>
        </div>
      </div>

      <AddStudent
        addStudentModal={addStudentModal}
        guruhVal={guruhVal}
        changeRaqamHandler={changeRaqamHandler}
        raqamVal={raqamVal}
        nomiVal={nomiVal}
        changeNomiHandler={changeNomiHandler}
        qushishHandler={qushishHandler}
        changeGuruhHandler={changeGuruhHandler}
        guruhlarVal={guruhlarVal}
        guruhlarChangeHandler={guruhlarChangeHandler}
        belorQilishHandler={belorQilishHandler}
        setGuruhlarVal={setGuruhlarVal}
        hisobHolat={hisobHolat}
        changeHisobHolati={changeHisobHolati}
        
        
      />

      <div
        className={`backdrop1 ${addStudentModal ? "backdrop1-show" : ""}`}
        onClick={backHandler}
      ></div>
    </div>
  );
}
