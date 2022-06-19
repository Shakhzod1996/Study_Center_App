import "./App.css";
import Header from "./Components/Header/Header";
import HeaderTop from "./Components/HeaderTop/HeaderTop";
import { Routes, Route } from "react-router-dom";
import BoshSahifa from "./Components/BoshSahifa/BoshSahifa";
import Students from "./Components/Students/Students";

import { Uquvchilar } from "./Uquvchilar";
import { Guruhlar } from "./Guruhlar";
import { useState } from "react";
import Teachers from "./Components/Teachers/Teachers";
import Groups from "./Components/Groups/Groups";
import Hisobot from "./Components/Hisobot/Hisobot";
import DarsJadvali from "./Components/DarsJadvali/DarsJadvali";
import Sozlamalar from "./Components/Sozlamalar/Sozlamalar";
function App() {

  let [uquvchilarArr, setUquvchilarArr] = useState(Uquvchilar);
  const [short, setShort] = useState(false);

  return (
    <div className="App">
      <Header short={short} setShort={setShort} />
      <HeaderTop short={short}  />
      <Routes>
        <Route path="/" element={<BoshSahifa short={short} />}/>
        <Route path="/students" element={<Students uquvchilarArr={uquvchilarArr} short={short}/>}/>
        <Route path="/teachers" element={<Teachers short={short} />}/>
        <Route path="/groups" element={<Groups guruhlar={Guruhlar} short={short} />}/>
        <Route path="/hisobot" element={<Hisobot short={short} />}/>
        <Route path="/dars-jadvali" element={<DarsJadvali short={short} />}/>
        <Route path="/sozlamalar" element={<Sozlamalar short={short} />}/>








      </Routes>
    </div>
  );
}

export default App;
