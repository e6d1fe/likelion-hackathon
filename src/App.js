import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Destination from "./pages/Destination";
import OneWayHeader from "./components/OneWayHeader";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </div>
  );
}

export default App;
