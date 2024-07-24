import React, { useEffect, useState } from "react";
import {
  fetchMarkdownContent,
  convertMarkdownToHtml,
} from "../../utils/convertMarkdowntoHtml";
import "../../styles/markdown.css";
import Loading from "../loading/Loading";

const MarkdownContent = ({ markdownPath, onContentLoad }) => {
  const [htmlContent, setHtmlContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadMarkdownContent() {
      try {
        const markdownText = await fetchMarkdownContent(markdownPath);
        const html = await convertMarkdownToHtml(markdownText);
        setHtmlContent(html);
        setIsLoading(false);
        onContentLoad(); // Markdown이 로드된 후에 콜백 호출
      } catch (error) {
        console.error("데이터를 불러올 수 없습니다", error);
        setIsLoading(false);
      }
    }

    loadMarkdownContent();

    return () => {
      setHtmlContent(""); // 컴포넌트 언마운트 시 상태를 초기화
      setIsLoading(true); // 컴포넌트 언마운트 시 로딩 상태를 초기화
    };
  }, [markdownPath, onContentLoad]);

  if (isLoading) {
    return <Loading color="primary" />; // 로딩 중일 때 SVGLoading 컴포넌트를 표시
  }

  return (
    <main
      className="markdownContent"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default MarkdownContent;
