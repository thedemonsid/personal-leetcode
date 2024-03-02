import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogs from "./Blogs";
import Problems from "./Problems";
import Home from "./Home";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
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
