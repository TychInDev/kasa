import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Error from "./pages/Error";
import Lodgment from "./pages/Lodgment";
import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/lodgment/:id" element={<Lodgment />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;