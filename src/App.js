import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SelectDestination from "./pages/SelectDestination";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<SelectDestination />} />
      </Routes>
    </div>
  );
}

export default App;
