import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import SearchDestination from "./pages/SearchDestination";
import SelectDestination from "./pages/SelectDestination";
import SelectPassengers from "./pages/SelectPassengers";
import DateChoose from "./pages/DateChoose";
import Complete from "./pages/Complete";
import Instructions from "./pages/Instructions";
import SelectRides from "./pages/SelectRides";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/destination" element={<SelectDestination />} />
        <Route path="/searchdestination" element={<SearchDestination />} />
        <Route path="/selectpassengers" element={<SelectPassengers />} />
        <Route path="/selectrides" element={<SelectRides />} />
        <Route path="/datechoose" element={<DateChoose />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </div>
  );
}

export default App;
