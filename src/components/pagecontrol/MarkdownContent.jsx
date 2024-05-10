import React, { useEffect, useState } from "react";
import {
  fetchMarkdownContent,
  convertMarkdownToHtml,
} from "../../utils/convertMarkdowntoHtml";
import "../../styles/markdown.css";

const MarkdownContent = ({ markdownPath }) => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    async function loadMarkdownContent() {
      try {
        const markdownText = await fetchMarkdownContent(markdownPath);
        const html = await convertMarkdownToHtml(markdownText);
        setHtmlContent(html);
      } catch (error) {
        console.error("Failed to load Markdown content:", error);
      }
    }

    loadMarkdownContent();

    return () => {
      setHtmlContent(""); // 컴포넌트 언마운트 시 상태를 초기화
    };
  }, [markdownPath]);

  return (
    <main
      className="markdownContent"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default MarkdownContent;
