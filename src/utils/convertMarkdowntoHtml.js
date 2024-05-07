/*
npm install unified remark-parse remark-rehype remark-directive remark-gfm remark-behead rehype-stringify rehype-title-figure unist-util-visit hastscript gray-matter
*/

import { unified } from "unified";
import remarkParse from "remark-parse";
import remark2rehype from "remark-rehype";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import remarkBehead from "remark-behead";
import rehypeStringify from "rehype-stringify";
import rehypeTitleFigure from "rehype-title-figure";
import { visit } from "unist-util-visit";
import { h } from "hastscript";
import matter from "gray-matter";

// 사용자 정의 Remark 플러그인을 정의
function myRemarkPlugin() {
  return function (tree) {
    // Markdown 트리를 방문하여 지시문(directive)을 해석하고 HAST 요소로 변환
    visit(tree, (node) => {
      if (
        node.type === "containerDirective" || // 컨테이너 지시문
        node.type === "leafDirective" || // 리프 지시문
        node.type === "textDirective" // 텍스트 지시문
      ) {
        const data = node.data || (node.data = {}); // 노드 데이터를 가져오거나 생성
        const hast = h(node.name, node.attributes); // HAST 요소를 생성

        data.hName = hast.tagName; // 노드 데이터에 HAST 요소의 태그 이름을 추가
        data.hProperties = hast.properties; // 노드 데이터에 HAST 요소의 속성을 추가
      }
    });
  };
}

// Markdown을 HTML로 변환하는 함수를 정의
export const convertMarkdownToHtml = async (markdown) => {
  // unified를 사용하여 Markdown을 처리하고, 여러 Remark 및 Rehype 플러그인을 사용하여 Markdown을 파싱하고 HTML로 변환
  const file = await unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(myRemarkPlugin)
    .use(remarkGfm)
    .use(remarkBehead, { minDepth: 3 })
    .use(remark2rehype)
    .use(rehypeTitleFigure)
    .use(rehypeStringify)
    .process(markdown);
  return String(file);
};

// Markdown 파일에서 front matter(metadata)를 추출하는 함수를 정의
export const extractFrontMatter = (markdown) => {
  return matter(markdown); // gray-matter 모듈을 사용하여 Markdown 파일에서 front matter를 추출
};

// 주어진 경로에서 Markdown 파일을 가져오는 함수를 정의
export const fetchMarkdownContent = async (markdownPath) => {
  try {
    const response = await fetch(markdownPath); // 주어진 경로에서 Markdown 파일을 가져옵니다.
    if (!response.ok) {
      throw new Error("🚨 파일 경로 확인하기.");
    }
    return await response.text(); // Markdown 파일의 내용을 반환
  } catch (error) {
    throw new Error(`🚨 : ${error.message}`);
  }
};
