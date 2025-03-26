import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/sign-in" element=<Signin /> />
        <Route path="/sign-up" element=<Signup /> />
      </Routes>
    </Router>
  );
}

export default App;
