import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUp,
  faCircleDown,
  faComments,
} from "@fortawesome/free-regular-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

function Articles({ setSelectedTopic }) {
  const [articles, setArticles] = useState([]);

  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");

  useEffect(() => {
    getArticles(topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      topic ? setSelectedTopic(topic) : setSelectedTopic("all");
    });
  }, [topic]);

  return (
    <section className="Articles">
      <ul className="Articles__List">
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="article-card">
              <div className="article-card-top">
                <Link to={`/articles?topic=${article.topic}`}>
                  <h2 className="article-topic">{article.topic}</h2>
                </Link>
                <h3 className="article-date">
                  {timeAgo.format(Date.parse(article.created_at))} by
                </h3>

                <h3 className="article-author">{article.author}</h3>
              </div>
              <Link
                to={`/articles/${article.article_id}`}
                className="article-title-link"
              >
                <h1 className="article-title">{article.title}</h1>
              </Link>
              <div className="article-card-bottom">
                <h2 className="article-votes">
                  <FontAwesomeIcon className="faCircleUp" icon={faCircleUp} />{" "}
                  {article.votes}{" "}
                  <FontAwesomeIcon
                    className="faCircleDown"
                    icon={faCircleDown}
                  />
                </h2>
                <h2 className="article-comment-count">
                  <FontAwesomeIcon className="faComments" icon={faComments} />{" "}
                  {article.comment_count}
                </h2>
                <h2 className="article-share">
                  <FontAwesomeIcon
                    className="faShareNodes"
                    icon={faShareNodes}
                  />
                </h2>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Articles;
