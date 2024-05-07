import { Route, Routes } from "react-router-dom";
import "./styles/global.css";
import Main from "./page/Main";
import Landing from "./page/Landing";
import PageLayout from "./components/pagecontrol/PageLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path=":contentId/*" element={<PageLayout />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
