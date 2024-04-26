import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Contents = () => {
  const { contentId } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/path_to_md_folder/${contentId}.md`)
      .then(response => response.text())
      .then(text => setContent(text));
  }, [contentId]);

  return (
    <div>
      <h1>Content for {contentId}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Contents;
