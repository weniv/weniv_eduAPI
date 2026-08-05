import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  fetchMarkdownContent,
  convertMarkdownToHtml,
} from "../../utils/convertMarkdowntoHtml";
import "../../styles/markdown.css";
import Loading from "../loading/Loading";
import CodeCopyButton from "./CodeCopyButton";

// rehype-pretty-code는 코드를 한 줄씩 span[data-line]으로 감쌉니다.
function getCodeText(figure) {
  const lines = figure.querySelectorAll("pre code [data-line]");
  return Array.from(lines)
    .map((line) => line.textContent)
    .join("\n");
}

const MarkdownContent = ({ markdownPath, onContentLoad }) => {
  const [htmlContent, setHtmlContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const [codeBlocks, setCodeBlocks] = useState([]);
  const contentRef = useRef(null);

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

  // 마크다운 HTML이 그려진 뒤, 코드블럭마다 복사 버튼을 붙입니다.
  useEffect(() => {
    if (!contentRef.current || !htmlContent) {
      setCodeBlocks([]);
      return;
    }

    const figures = contentRef.current.querySelectorAll(
      "figure[data-rehype-pretty-code-figure]"
    );

    setCodeBlocks(
      Array.from(figures).map((figure) => ({
        figure,
        code: getCodeText(figure),
      }))
    );
  }, [htmlContent]);

  if (isLoading) {
    return <Loading color="primary" />;
  }

  return (
    <>
      <main
        ref={contentRef}
        className="markdownContent"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      {codeBlocks.map(({ figure, code }, index) =>
        createPortal(<CodeCopyButton code={code} />, figure, `copy-${index}`)
      )}
    </>
  );
};

export default MarkdownContent;
