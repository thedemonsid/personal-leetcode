import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogs from "./Blogs/Blogs";
import Problems from "./Problems";
import Home from "./Home/Home";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />{" "}
        {/*Navbar component is in here becaue it is common for all the routes*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/problems" element={<Problems />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
