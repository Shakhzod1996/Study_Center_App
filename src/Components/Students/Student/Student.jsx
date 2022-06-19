import "./Student.css";
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { GrEdit } from "react-icons/gr";
import { AiOutlineUserAdd } from "react-icons/ai";

import { FaTimes } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { GoLocation } from "react-icons/go";

import { Button, Stack, TextField } from "@mui/material";
import EditModal from "./EditModal/EditModal";
import styled from "styled-components";

export default function Student({
  uquvchilarArr,
  data,
  setData,
  handlerPagenation,
  newArrBtn,
  active
}) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [forEditArr, setForEditArr] = useState(data);
  // const [delStatus, setDelStatus] = useState(false);
  const [delRequest, setDelRequest] = useState(false);

  //   const deleteItemHandler = () => {
  //   setDelRequest(false);

  // };
  const deleteHandler = (id) => {
    // setDelRequest(true);
    if (window.confirm("Are Your Sure ?")) {
      let removeArr = data.filter((item) => {
        return id !== item.id;
      });
      setData(removeArr);
    }
  };

  const editStudentHandler = (id) => {
    let forEdit = data.filter((item) => {
      return id === item.id;
    });

    setForEditArr(forEdit);
    setShowEditModal(true);
  };

  const modalHide = () => {
    setShowEditModal(false);
    setDelRequest(false);
  };

  const cancelHandler = () => {
    setDelRequest(false);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>ISM</TableCell>
              <TableCell>GURUH</TableCell>
              <TableCell>TELEFON RAQAM</TableCell>
              <TableCell>GURUHLAR</TableCell>
              <TableCell>VAQTI</TableCell>
              <TableCell>HISOB HOLATI</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i}
                </TableCell>
                <TableCell>
                  <div className="forImg">
                    <img src={row.img} alt="img" />
                    <p>{row.nomi}</p>
                  </div>
                </TableCell>
                <TableCell>{row.guruhId}</TableCell>
                <TableCell>{row.raqam}</TableCell>
                <TableCell>{row.guruhlar}</TableCell>
                <TableCell>{row.vaqti}</TableCell>
                <TableCell>$ {row.hisobHolati}.00</TableCell>
                <TableCell className="last-td">
                  <MdModeEditOutline
                    className="edit-student"
                    onClick={() => editStudentHandler(row.id)}
                  />
                  <FaTimes
                    className="xx"
                    onClick={() => deleteHandler(row.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className={`delete-modal ${delRequest ? "delete-modal-show" : ""}`}>
        <GoLocation />
        <h2>Are You Sure?</h2>
        <div className="btn-group-del">
          <button
          // onClick={deleteItemHandler}
          >
            Yes!
          </button>
          <button onClick={cancelHandler}>Cancel</button>
        </div>
      </div>

      <div
        onClick={modalHide}
        className={`backdrop ${showEditModal ? "backdrop-show" : ""}`}
      ></div>

      {forEditArr.map((item, i) => {
        return (
          <EditModal
            key={i}
            showEditModal={showEditModal}
            setForEditArr={setForEditArr}
            modalHide={modalHide}
            item={item}
            forEditArr={forEditArr}
          />
        );
      })}

      <div className="pagination">
        {newArrBtn &&
          newArrBtn.map((item, i) => (
            <Buttons  active={active === item}
              className="btn-pag"
              onClick={(e) => handlerPagenation(e, item)}
              key={i}
              id={item}
            >
              {item}
            </Buttons>
          ))}

        <button className="kursatish">8 ta kursatish</button>
      </div>
    </div>
  );
}

const Buttons = styled.button`
  padding: 7px 10px;
  margin-right: 10px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 2px;
  transition: all 0.4s ease;
  border: none;
  font-weight: 600;
  color: #777;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  &:hover {
    background-color: #3b86ff;
    color: #fff;
  }

  ${({ active }) =>
    active &&
    `
    background-color: #3B86FF;
    color: #fff;
  `}
`;
