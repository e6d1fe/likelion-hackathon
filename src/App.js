import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
<<<<<<< HEAD

=======
>>>>>>> 08c8d775bfa68dc2df6fac53dd616e3a88f61f7e
import SearchDestination from "./pages/SearchDestination";
import SelectDestination from "./pages/SelectDestination";
import SelectPassengers from "./pages/SelectPassengers";
import Complete from "./pages/Complete";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/destination" element={<SelectDestination />} />
        <Route path="/searchdestination" element={<SearchDestination />} />     
=======
        <Route path="/searchdestination" element={<SearchDestination />} />
>>>>>>> 08c8d775bfa68dc2df6fac53dd616e3a88f61f7e
        <Route path="/destination" element={<SelectDestination />} />
        <Route path="/selectpassengers" element={<SelectPassengers />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </div>
  );
}

export default App;
