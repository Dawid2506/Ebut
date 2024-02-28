import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import  Write  from "./components/Write";
import ReadFromDatabase from "./components/ReadFromDatabase";

function test() {
  return (
    <Router>
      <div className="App">

        <div>
          <span><Link to="/readfromdatabase">Read data from Server</Link></span>
          {" "}{" "}{" "}{" "}
          <span><Link to="/write">Write data to Mongodb</Link></span>
        </div>

        <Routes>
          < Route path="/write" element={<Write />} />
          < Route path="/readfromdatabase" element={<ReadFromDatabase />} />
          < Route path="/" element={<Write />} />
        </Routes>

      </div>
    </Router>

  );
}

export default test;