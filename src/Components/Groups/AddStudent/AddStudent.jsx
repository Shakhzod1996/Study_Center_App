import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
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
  changeHisobHolati,
}) {
  return (
    <div
      className={`${
        addStudentModal
          ? " modal-add-student modal-add-student-show"
          : "modal-add-student"
      }`}
    >
      <div className="flex-add-div1">
        <div className="right-add1">
          <form onSubmit={qushishHandler} className="gr-form">
            <div className="form-grid">
              <FormControl
                className="form-in"
                variant="standard"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Fan
                </InputLabel>
                <Select
                  onChange={changeGuruhHandler}
                  value={guruhVal}
                  required
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Fan"
                  helperText="Fan"
                >
                  <MenuItem value={"Ona Tili"}>Ona Tili</MenuItem>
                  <MenuItem value={"Adabiyot"}>Adabiyot</MenuItem>
                  <MenuItem value={"Ingliz Tili"}>Ingliz Tili</MenuItem>
                  <MenuItem value={"Matematika"}>Matematika</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                className="form-in"
                variant="standard"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Ta'lim Shakli
                </InputLabel>
                <Select
                  onChange={changeRaqamHandler}
                  value={raqamVal}
                  required
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Ta'lim shakli"
                  helperText="Ta'lim shakli"
                >
                  <MenuItem value={"Online"}>Online</MenuItem>
                  <MenuItem value={"Offline"}>Offline</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                className="form-in"
                variant="standard"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Holati
                </InputLabel>
                <Select
                  onChange={changeNomiHandler}
                  value={nomiVal}
                  required
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Holati"
                  helperText="Holati"
                >
                  <MenuItem value={"Active"}>Active</MenuItem>
                  <MenuItem value={"Muzlatilgan"}>Muzlatilgan</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                className="form-in"
                variant="standard"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  To'lov miqdori
                </InputLabel>
                <Select
                  onChange={changeHisobHolati}
                  value={hisobHolat}
                  required
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="age"
                  helperText="To'lov miqdori"
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
                  O'qituvchini tanlang
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
                  <MenuItem value={"Javohir Berdiev"}>Javohir Berdiev</MenuItem>
                  <MenuItem value={"Qarshiev Komil"}>Qarshiev Komil</MenuItem>
                  <MenuItem value={"Ibragimova Sanobar"}>
                    Ibragimova Sanobar
                  </MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="chekbox-flex">
              <div>
                <FormGroup>

                  <FormControlLabel
                    value="start"
                    control={<Checkbox />}
                    label="Du"
                    labelPlacement="start"
                    className="vall"
                  />

                  <FormControlLabel
                    value="start"
                    control={<Checkbox />}
                    label="Se"
                    labelPlacement="start"
                    className="vall"
                  />

                  <FormControlLabel
                    value="start"
                    control={<Checkbox />}
                    label="Ch"
                    labelPlacement="start"
                    className="vall"
                  />

                  <FormControlLabel
                    value="sta  rt"
                    control={<Checkbox />}
                    label="Pa"
                    labelPlacement="start"
                    className="vall"
                  />

                  <FormControlLabel
                    value="start"
                    control={<Checkbox />}
                    label="Ju"
                    labelPlacement="start"
                    className="vall"
                  />

                  <FormControlLabel
                    value="start"
                    control={<Checkbox />}
                    label="Sh"
                    labelPlacement="start"
                    className="vall"
                  />

                  <FormControlLabel
                    value="start"
                    control={<Checkbox />}
                    label="Ya"
                    labelPlacement="start"
                    className="vall"
                  />
                </FormGroup>
              </div>

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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
