import React from 'react';
import Markdown from 'markdown-to-jsx';
interface ArticleProps {
    content: string;
  }
  
  const Article: React.FC<ArticleProps> = ({ content }) => {
    return (
      <div>
        <Markdown className='z-40' >{content}</Markdown>
      </div>
    );
  };

export default Article;
