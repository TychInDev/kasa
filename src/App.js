// import './main.css';

// function App() {
 // return (
//    <div className="App">
//      <header className="App-header">
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
// </header>
//    </div>
//  );
// }

// export default App;


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