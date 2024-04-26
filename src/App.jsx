import { Route, Routes } from "react-router-dom";
import "./styles/global.css";
import Main from "./page/Main";
import Landing from "./page/Landing";
import Contents from "./components/Contents";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path=":contentId" element={<Contents />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
