import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import AddContact from "./components/AddContact";
import Home from "./components/Home";
import EditContact from "./components/EditContact";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default App;
