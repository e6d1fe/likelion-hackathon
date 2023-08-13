import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
<<<<<<< HEAD
import Destination from "./pages/Destination";
import SearchDestination from "./pages/SearchDestination";
=======
import SelectDestination from "./pages/SelectDestination";
import SelectPassengers from "./pages/SelectPassengers";
import Complete from "./pages/Complete";
>>>>>>> e3e2f6fd1cabedb7c57cd2cf05fbaebb1b23fedc

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/destination" element={<Destination />} />
        <Route path="/searchdestination" element={<SearchDestination />} />     
=======
        <Route path="/destination" element={<SelectDestination />} />
        <Route path="/selectpassengers" element={<SelectPassengers />} />
        <Route path="/complete" element={<Complete />} />
>>>>>>> e3e2f6fd1cabedb7c57cd2cf05fbaebb1b23fedc
      </Routes>
    </div>
  );
}

export default App;
