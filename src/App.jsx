import Header from "./pages/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header className="hero" />} />
      </Routes>
    </>
  );
}

export default App;
