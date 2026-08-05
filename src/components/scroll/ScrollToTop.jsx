import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 페이지를 이동하면 항상 최상단에서 시작하도록 스크롤을 되돌립니다.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // html의 scroll-behavior: smooth를 타지 않도록 즉시 이동합니다.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
