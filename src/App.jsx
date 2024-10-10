import "./styles/global.css";
import AppRoutes from "./routes/AppRoutes";
import handleAnalyticsPageView from "./utils/handleAnalyticsPageView";
import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const searchParams = useSearchParams();
  useEffect(() => {
    const url = pathname + searchParams.toString();
    handleAnalyticsPageView(url);
  }, []);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
