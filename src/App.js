import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./Navbar/Navbar";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Home from "./Home/Home";
import Routing from "./Routing/Routing";
import Counter from "./Counter/Counter";
import Toast from "./Toast/Toast";
import Loader from "./Loader/Loader";
function App() {


  return ( 
    <BrowserRouter>
     <NavBar/>
     <Toast/>
     <Loader/>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/routing" element={<Routing/>} />
     <Route path="/counter" element={<Counter/>} />

     <Route path="/login" element={<Login/>} />
     <Route path="/signup" element={<Signup/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
