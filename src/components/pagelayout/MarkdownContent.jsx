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
        onContentLoad();
      } catch (error) {
        console.error("데이터를 불러올 수 없습니다", error);
        setIsLoading(false);
      }
    }

    loadMarkdownContent();

    return () => {
      setHtmlContent("");
      setIsLoading(true);
    };
  }, [markdownPath, onContentLoad]);

  if (isLoading) {
    return <Loading color="primary" />;
  }

  return (
    <main
      className="markdownContent"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default MarkdownContent;
