import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  fetchMarkdownContent,
  convertMarkdownToHtml,
} from "../../utils/convertMarkdowntoHtml";

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
      setHtmlContent("");
    };
  }, [markdownPath]);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

const Page = () => {
  const location = useLocation();
  const markdownPath = `../_md${location.pathname}.md`;

  return (
    <div>
      <h1>Content for {location.pathname}</h1>
      <MarkdownContent markdownPath={markdownPath} />
    </div>
  );
};

export default Page;
