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
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const maxRetries = 3;
    const retryDelay = 1000;

    async function loadMarkdownContent() {
      try {
        const markdownText = await fetchMarkdownContent(markdownPath);
        const html = await convertMarkdownToHtml(markdownText);
        setHtmlContent(html);
        setIsLoading(false);
        onContentLoad();
      } catch (error) {
        if (retryCount < maxRetries) {
          setTimeout(() => {
            setRetryCount((prevCount) => prevCount + 1);
          }, retryDelay);
        } else {
          console.error(
            "최대 재시도 횟수 초과, 데이터를 불러올 수 없습니다",
            error
          );
          setIsLoading(false);
        }
      }
    }

    loadMarkdownContent();

    return () => {
      setHtmlContent("");
      setIsLoading(true);
      setRetryCount(0);
    };
  }, [markdownPath, onContentLoad, retryCount]);

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
