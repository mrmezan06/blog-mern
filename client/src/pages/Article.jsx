import React from 'react';
import { useLocation } from 'react-router-dom';
import articleContent from './article-content';
import Articles from '../components/Articles';
import NotFound from './NotFound';

const Article = () => {
  const location = useLocation();
  const name = location.pathname.split('/')[2];
  const article = articleContent.find((article) => article.name === name);
  if (!article) return <NotFound />;
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">
        {article.title}
      </h1>
      <img
        className="lg:h-48 md:h-36 w-full object-cover object-center"
        src={article.thumbnail}
        alt={article.name}
      />
      {article.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {paragraph}
        </p>
      ))}
      <h1 className="sm:text-2xl text-xl font-bold mt-4 mb-4 text-gray-900">
        You may want to read
      </h1>
      <div className="flex flex-wrap -m-4">
        <Articles articleContent={otherArticles} />
      </div>
    </>
  );
};

export default Article;
