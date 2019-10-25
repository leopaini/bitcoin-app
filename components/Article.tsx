import React from "react";
import Moment from "react-moment";
import { INews } from "../interfaces";
import ReactImageFallback from "react-image-fallback";

export interface IProps {
  article: INews;
}

const Article: React.SFC<IProps> = ({ article }) => {
  const { urlToImage, url, title, description, source, publishedAt } = article;

  return (
    <div className="col-md-6 col-12-mb-4 article">
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
        <ReactImageFallback
          src={urlToImage}
          fallbackImage="https://via.placeholder.com/261x200"
          alt={title}
        />
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
        <div className="card-body link">
          <a href={url} className="card-link" target="_blank">
            {source.name}
          </a>
        </div>
        <div className="card-footer text-muted">
          <Moment date={publishedAt} fromNow />
        </div>
      </div>
    </div>
  );
};

export default Article;
