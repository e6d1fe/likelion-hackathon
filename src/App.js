import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import SelectPassengers from "./pages/SelectPassengers";
import Complete from "./pages/Complete";
import Instructions1 from "./pages/Instructions1";
import Instructions2 from "./pages/Instructions2";
import SelectRides from "./pages/SelectRides";
import BeforeSelectPassengers from "./pages/BeforeSelectPassengers";
import BeforeSelectRides from "./pages/BeforeSelectRides";
import BeforeSelectArrive from "./pages/BeforeSelectArrive";
import BeforeSelectDate from "./pages/BeforeSelectDate";
import SelectDepart from "./pages/SelectDepart";
import SelectArrive from "./pages/SelectArrive";
import SelectArriveDetail from "./pages/SelectArriveDetail";
import SelectDate from "./pages/SelectDate";
import SelectDateDetail from "./pages/SelectDateDetail";
import SelectDepartDetail from "./pages/SelectDepartDetail";
import SelectPassengersDetail from "./pages/SelectPassengersDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="instructions1" element={<Instructions1 />} />
        <Route path="/instructions2" element={<Instructions2 />} />
        <Route path="/selectdepart" element={<SelectDepart />} />
        <Route path="/selectdepartdetail" element={<SelectDepartDetail />} />
        <Route path="/selectarriveinfo" element={<BeforeSelectArrive />} />
        <Route path="/selectarrive" element={<SelectArrive />} />
        <Route path="/selectarrivedetail" element={<SelectArriveDetail />} />
        <Route path="/selectdateinfo" element={<BeforeSelectDate />} />
        <Route path="/selectdate" element={<SelectDate />} />
        <Route path="/selectdatedetail" element={<SelectDateDetail />} />
        <Route path="/selectpassengersinfo" element={<BeforeSelectPassengers />} />
        <Route path="/selectpassengers" element={<SelectPassengers />} />
        <Route path="/selectpassengersdetail" element={<SelectPassengersDetail />} />
        <Route path="/selectridesinfo" element={<BeforeSelectRides />} />
        <Route path="/selectrides" element={<SelectRides />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </div>
  );
}

export default App;
