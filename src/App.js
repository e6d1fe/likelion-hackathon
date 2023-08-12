import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SelectDestination from "./pages/SelectDestination";
import SelectPassengers from "./pages/SelectPassengers";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<SelectDestination />} />
        <Route path="/selectpassengers" element={<SelectPassengers />} />
      </Routes>
    </div>
  );
}

export default App;
