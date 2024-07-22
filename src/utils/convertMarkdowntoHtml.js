import { unified } from "unified";
import remarkParse from "remark-parse";
import remark2rehype from "remark-rehype";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import remarkBehead from "remark-behead";
import rehypeStringify from "rehype-stringify";
import rehypeTitleFigure from "rehype-title-figure";
import rehypePrettyCode from "rehype-pretty-code";
import { visit } from "unist-util-visit";
import { h } from "hastscript";
import matter from "gray-matter";

const options = {
  theme: "github-light",
  keepBackground: false,
};

function myRemarkPlugin() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === "containerDirective" ||
        node.type === "leafDirective" ||
        node.type === "textDirective"
      ) {
        const data = node.data || (node.data = {});
        const hast = h(node.name, node.attributes);
        data.hName = hast.tagName;
        data.hProperties = hast.properties;
      }
    });
  };
}

export const convertMarkdownToHtml = async (markdown) => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(myRemarkPlugin)
    .use(remarkGfm)
    .use(remarkBehead, { minDepth: 3 })
    .use(remark2rehype)
    .use(rehypeTitleFigure)
    .use(rehypePrettyCode, options)
    .use(rehypeStringify)
    .process(markdown);
  return String(file);
};

export const extractFrontMatter = (markdown) => {
  return matter(markdown);
};

export const fetchMarkdownContent = async (markdownPath) => {
  try {
    const response = await fetch(markdownPath);
    if (!response.ok) {
      throw new Error(`🚨 파일 경로 확인하기 `);
    }
    return await response.text();
  } catch (error) {
    throw new Error(`🚨 : ${error.message}`);
  }
};
