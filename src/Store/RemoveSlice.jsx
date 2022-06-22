
import { configureStore, createSlice } from '@reduxjs/toolkit';
import {Uquvchilar} from '../Uquvchilar';

const initialState = {
  studentsArr: Uquvchilar,
  amount: 1,
}

export const RemoveSlice = createSlice({
  name: "remove",
  initialState,
  reducers: {

    RemoveItem:(state, action)=>{
      if (window.confirm("Are You Sure ? ")) {
        state.studentsArr = state.studentsArr.filter((item) => {
          return action.payload !== item.id
        })
      } 
    },

    AddStudent1: (state, action)=> {
      const {nomiVal, raqamVal, guruhVal, guruhlarVal, hisobHolat, random, displayToday} = action.payload
      console.log(nomiVal);
      const obj = {
        id: Date.now(),
        nomi: nomiVal,
        tulov: 20,
        chegirma: 5,
        qoldiq: 20,
        vaqti: displayToday,
        raqam: raqamVal,
        holati: "active",
        guruhlar: guruhlarVal,
        hisobHolati: hisobHolat,
        guruhId: "#" + guruhVal,
        img: `https://picsum.photos/id/${random}/200/300`,
      }

      state.studentsArr.unshift(obj)
    }

  },

})
export const {RemoveItem, AddStudent1} = RemoveSlice.actions

export default RemoveSlice.reducer;
