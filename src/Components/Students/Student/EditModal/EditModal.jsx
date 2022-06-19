import { TextField } from "@mui/material";
import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function EditModal({ item, showEditModal, modalHide }) {
  return (
    <div
      className={`modal-student ${showEditModal ? "modal-student-show" : ""}`}
    >
      <h2>O'quvchini tahrirlash</h2>

      <div className="top-header-1">
        <div className="left-top1">
          <img src={item.img} alt={item.nomi} />
          <div className="person-name">
            <h3>{item.nomi}</h3>
            <p>{item.raqam}</p>
          </div>
        </div>

        <div className="top-right">
          <p>
            Guruhlar: <span>1 ta</span>
          </p>
          <p>
            Jami qoldirilgan darslar: <span>0 ta</span>
          </p>
        </div>
      </div>
      <hr className="hr" />

      <div className="input-div">
        <TextField
          id="standard-basic"
          defaultValue={item.nomi}  
          className="inp"
          variant="standard"
          helperText="O'quvchining ismini kiriting"
        />
        <TextField
          id="standard-basic"
          defaultValue={item.vaqti}
          className="inp"
          variant="standard"
          helperText="O'quvchining tugilgan sanasini kiriting"
        />
        <TextField
          id="standard-basic"
          defaultValue={item.raqam}
          className="inp"
          variant="standard"
          helperText="O'quvchining telefon raqamini kiriting"
        />
      </div>

      <div className="guruh-tahrir">
        <p>Guruh #11</p>
        <p>Ona Tili</p>
        <p>UZB 180,000</p>
      </div>

      <div className="guruh-qush-div">
        <div className="circle-add">
          <AiOutlineUserAdd />
        </div>
        <p>Guruh qushish</p>
      </div>

      <div className="btns-saqlash">
        <button onClick={modalHide}>Bekor qilish</button>
        <button>Saqlash</button>
      </div>
    </div>
  );
}
