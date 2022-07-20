import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import MovieData from "./containers/MovieData";
import Registration from "./containers/Registration";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie/:id" element={<MovieData />} />
      </Routes>
    </div>
  );
}

export default App;
