import { Route, Routes } from "react-router-dom";
import "./styles/global.css";
import Main from "./page/Main";
import Landing from "./page/Landing";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
