import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
const Page = () => {
  const location = useLocation();
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    const markdownPath = `/_md${location.pathname}.md`;
    fetch(markdownPath)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [location]);
  return (
    <div>
      <h1>Content for {location.pathname}</h1>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default Page;

// https://fe-developers.kakaoent.com/2022/221222-custom-md/
