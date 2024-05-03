// import path from "path";
// import matter from "gray-matter";
// import { convertMarkdownToHtml } from "./convertMarkdownToHtml";

// const postsDirectory = path.join(process.cwd(), "_md");

// export async function getPostDetail(defaultPath, id) {
//   const detailPath = `${postsDirectory}${defaultPath}/${id.join("/")}.md`;

//   async function readContent(filePath) {
//     try {
//       const response = await fetch(filePath);
//       if (!response.ok) {
//         throw new Error("Failed to fetch file");
//       }
//       const content = await response.text();
//       return content;
//     } catch (error) {
//       console.error(error);
//       console.log("🚨 파일 경로 확인하기");
//       return "";
//     }
//   }

//   const content = readContent(detailPath);

//   const matterData = matter(content);

//   const htmlContent = await convertMarkdownToHtml(matterData.content);

//   return {
//     id,
//     htmlContent,
//     ...matterData.data,
//   };
// }
