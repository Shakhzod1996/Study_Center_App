import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import AddStudent from "./AddStudent/AddStudent";
import Student from "../Students/Student/Student";
import Group from "./Group/Group";
// import AddStudent from "./AddStudent/AddStudent";
import './Groups.css'
const showDate = new Date();
const displayToday =
  showDate.getDate() + "/" + showDate.getMonth() + "/" + showDate.getFullYear();

export default function Groups({guruhlar, short}) {
  const [part, setpart] = useState(5);
  const [data, setData] = useState(guruhlar.slice(0, part));

  const [guruhArr, setGuruhArr] = useState(guruhlar)
  const [addStudentModal, setAddStudentModal] = useState(false);
  const [nomiVal, setNomiVal] = useState("");
  const [raqamVal, setraqamVal] = useState("");
  const [guruhVal, setGuruhVal] = useState("");
  const [guruhlarVal, setGuruhlarVal] = useState("");
  const [hisobHolat, setHisobHolat] = useState("");

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
    console.log(e);
    setAddStudentModal(false);
    e.preventDefault();
    setData([
      {
        guruhNomi: guruhVal,
        tulovShakli: raqamVal,
        holati:  nomiVal,
        guruh: "#6",
        tulovMiqdori: hisobHolat,
        uqituvchi:guruhlarVal, 
        img: `https://picsum.photos/id/${random}/200/300`,
        vaqti: displayToday,
      },
      ...data,
    ]);
    setNomiVal("");
    setraqamVal("");
    setGuruhVal("");
  };

  const backHandler = () => {
    setAddStudentModal(false);
  };

  let parts = guruhArr.length / part;
  const newArrBtn = [];
  for (let i = 1; i <= parts; i++) newArrBtn.push(i);
  const handlerPagenation = (e, item) => {
    setActive(item)
    let end = (e.target.id - 1) * part;
    let partsArr = guruhArr.slice(end, part + end);
    setData(partsArr);
  };

  const [active,setActive] = useState(newArrBtn[0])


  return (
    <div>
      <div className={`container ${short ? "container-use" : ""}`}>
        <div className="content">
          <div className="students-head-flex">
            <div className="head-left">
              <h2>Guruh</h2>
              <button onClick={addStudentHandler}>Guruh qushish</button>
            </div>
            <div className="head-right">
              <BsSearch />
              <input type="search" placeholder="ismi buyicha qidirish" />
            </div>
          </div>

          <p className="pages">1-7/ 33 tadan</p>

          <div className="each-student">
              <Group
                guruhArr={guruhArr}
                setData={setData}
                data={data}
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
