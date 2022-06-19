import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { TiArrowUpThick } from "react-icons/ti";

export default function AddStudent({
  addStudentModal,
  qushishHandler,
  changeNomiHandler,
  changeRaqamHandler,
  nomiVal,
  raqamVal,
  guruhVal,
  changeGuruhHandler,
  guruhlarVal,
  guruhlarChangeHandler,
  belorQilishHandler,
  hisobHolat,
  changeHisobHolati
  
}) {


  return (
    <div
      className={`${
        addStudentModal
          ? " modal-add-student modal-add-student-show"
          : "modal-add-student"
      }`}
    >
      <div className="flex-add-div">
        <div className="left-add">
          <div className="left-add-container">
            <h3>O'quvchi Rasmi</h3>
            <div className="con-add-in">
              <div className="arr-big">
                <div className="arr-middle">
                  <div className="arr-small">
                    <input type="file" className="img-inpit" />
                    <TiArrowUpThick />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-add">
          <form onSubmit={qushishHandler}>
            <TextField
              className="in-add"
              value={nomiVal}
              onChange={changeNomiHandler}
              id="standard-basic"
              label="Ismi"
              variant="standard"
              helperText="O'quvchining ismini kiriting "
              required
            />
            <TextField
              className="in-add"
              id="standard-basic"
              value={raqamVal}
              onChange={changeRaqamHandler}
              label="Raqami"
              variant="standard"
              helperText="O'quvchining telefon raqami"
              type="number"
              required
            />
            <TextField
              className="in-add"
              id="standard-basic"
              label="Guruhi"
              onChange={changeGuruhHandler}
              value={guruhVal}
              variant="standard"
              helperText="O'quvchining guruhini kiriting"
              required
              type="number"
            />

            <FormControl
              className="form-in"
              variant="standard"
              sx={{ m: 1, minWidth: 120 }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Narxi
              </InputLabel>
              <Select
              onChange={changeHisobHolati}
                value={hisobHolat}
                required
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                
                label="age"
                helperText="Narxi"
              >
                <MenuItem value={20}>$ 20</MenuItem>
                <MenuItem value={30}>$ 30</MenuItem>
                <MenuItem value={40}>$ 40 </MenuItem>
              </Select>
            </FormControl>

            <FormControl
              className="form-in"
              variant="standard"
              sx={{ m: 1, minWidth: 120 }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Guruhlar soni
              </InputLabel>
              <Select
              value={guruhlarVal}
              onChange={guruhlarChangeHandler}
                required
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="age"
                helperText="O'quvchining guruhlar soni kiriting"
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>

            <div className="btns-add">
              <button
                className="bekor-qilish"
                type="button"
                onClick={belorQilishHandler}
              >
                Bekor Qilish
              </button>
              <button className="qushis" type="submit">
                qushish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
