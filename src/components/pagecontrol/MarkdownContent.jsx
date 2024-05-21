import React, { useEffect, useState } from "react";
import {
  fetchMarkdownContent,
  convertMarkdownToHtml,
} from "../../utils/convertMarkdowntoHtml";
import "../../styles/markdown.css";

const MarkdownContent = ({ markdownPath, onContentLoad }) => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    async function loadMarkdownContent() {
      try {
        const markdownText = await fetchMarkdownContent(markdownPath);
        const html = await convertMarkdownToHtml(markdownText);
        setHtmlContent(html);
        onContentLoad(); // Markdown이 로드된 후에 콜백 호출
      } catch (error) {
        console.error("데이터를 불러올 수 없습니다", error);
      }
    }

    loadMarkdownContent();

    return () => {
      setHtmlContent(""); // 컴포넌트 언마운트 시 상태를 초기화
    };
  }, [markdownPath, onContentLoad]);

  return (
    <main
      className="markdownContent"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default MarkdownContent;
