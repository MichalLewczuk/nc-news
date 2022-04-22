import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUp,
  faCircleDown,
  faComments,
} from "@fortawesome/free-regular-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

function Article() {
  const [article, setArticle] = useState([]);

  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, [article_id]);

  return (
    <>
      <section className="Article">
        <ul className="Article__Card">
          <li key={article.article_id}>
            <div className="article-card-top">
              <Link to={`/articles?topic=${article.topic}`}>
                <h2 className="article-topic">{article.topic}</h2>
              </Link>
              <h3 className="article-date">
                {new Date(article.created_at).toGMTString()} by
              </h3>

              <h3 className="article-author">{article.author}</h3>
            </div>
            <Link
              to={`/articles/${article.article_id}`}
              className="article-title-link"
            >
              <h1 className="article-title">{article.title}</h1>
            </Link>
            <article className="article-body">{article.body}</article>
            <div className="article-card-bottom">
              <h2 className="article-votes">
                <FontAwesomeIcon className="faCircleUp" icon={faCircleUp} />{" "}
                {article.votes}{" "}
                <FontAwesomeIcon className="faCircleDown" icon={faCircleDown} />
              </h2>
              <h2 className="article-comment-count">
                <FontAwesomeIcon className="faComments" icon={faComments} />{" "}
                {article.comment_count}
              </h2>
              <h2 className="article-share">
                <FontAwesomeIcon className="faShareNodes" icon={faShareNodes} />
              </h2>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Article;
