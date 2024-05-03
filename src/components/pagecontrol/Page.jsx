import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  fetchMarkdownContent,
  convertMarkdownToHtml,
} from "../../utils/convertMarkdowntoHtml";
import BreadCrumb from "../breadcrumb/Breadcrumb";


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
  const path = location.pathname;
  const markdownPath = `../_md${path}.md`;
  const pathArray = path.split("/").filter(Boolean);

  return (
    <div>
      <BreadCrumb data={pathArray} />
      <h1>Content for {path}</h1>
      <MarkdownContent markdownPath={markdownPath} />
    </div>
  );
};

export default Page;
