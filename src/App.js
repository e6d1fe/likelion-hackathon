import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Destination from "./pages/Destination";
import SearchDestination from "./pages/SearchDestination";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/searchdestination" element={<SearchDestination />} />     
      </Routes>
    </div>
  );
}

export default App;
