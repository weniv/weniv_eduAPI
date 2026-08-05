import "./styles/global.css";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/scroll/ScrollToTop";
import TopButton from "./components/scroll/TopButton";
import handleAnalyticsPageView from "./utils/handleAnalyticsPageView";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname, search } = useLocation();

  // 페이지를 이동할 때마다 조회를 집계합니다. (수집 함수가 현재 URL을 직접 읽습니다)
  useEffect(() => {
    handleAnalyticsPageView();
  }, [pathname, search]);

  return (
    <div className="App">
      <ScrollToTop />
      <AppRoutes />
      <TopButton />
    </div>
  );
}

export default App;
