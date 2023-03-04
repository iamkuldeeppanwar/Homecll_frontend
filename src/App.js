import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Forget from "./components/ForgetPassword/Forget";
import Reset from "./components/ResestPassword/Reset";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/fpassword" element={<Forget />}></Route>
          <Route path="/Rpassword" element={<Reset />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
