import { useEffect } from "react";
import { createSearchParams, Link, useNavigate } from "react-router-dom";

import AddNewArticle from "./AddNewArticle";

function Queries({ topics, setSelectedTopic, selectedTopic }) {
  let navigate = useNavigate();
  const handleOnChange = (e) => {
    let topic = e.target.value;

    if (!topic || topic === "all") {
      setSelectedTopic(topic);
      navigate(`/articles`);
    } else {
      setSelectedTopic(topic);

      navigate(`/articles?topic=${topic}`);
    }
  };

  return (
    <section className="queries" to="/">
      <form className="topics">
        <label htmlFor="topics">Topics:</label>
        <select
          id="topics"
          name="topics"
          value={`${selectedTopic}`}
          onChange={handleOnChange}
        >
          <option key="all" value="all">
            all
          </option>
          {topics.map((topic) => {
            return (
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            );
          })}
        </select>
      </form>
      <form className="sort-by">
        <label htmlFor="sort-by">Sorty by:</label>
        <select id="sort-by" name="sort-by">
          <option value="new">new</option>
          <option value="old">old</option>
          <option value="votes-asc">votes asc</option>
          <option value="votes-desc">votes desc</option>
          <option value="title-asc">title asc</option>
          <option value="title-desc">title desc</option>
          <option value="comments-asc">comments asc</option>
          <option value="comments-desc">comments desc</option>
        </select>
      </form>
      <form className="search">
        <label htmlFor="search"></label>
        <input type="text" id="search" name="search"></input>
        <input type="submit" value="Search" />
      </form>
      <AddNewArticle></AddNewArticle>
    </section>
  );
}

export default Queries;
