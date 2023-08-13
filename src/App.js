import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import SearchDestination from "./pages/SearchDestination";
import SelectDestination from "./pages/SelectDestination";
import SelectPassengers from "./pages/SelectPassengers";
import Complete from "./pages/Complete";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<SelectDestination />} />
        <Route path="/searchdestination" element={<SearchDestination />} />
        <Route path="/selectpassengers" element={<SelectPassengers />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </div>
  );
}

export default App;
