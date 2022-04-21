import { Link } from "react-router-dom";
import AddNewArticle from "./AddNewArticle";

function Queries() {
  return (
    <section className="queries" to="/">
      <form className="topics">
        <label htmlFor="topics">Topics:</label>
        <select id="topics" name="topics">
          <option value="all">all</option>
          <option value="coding">coding</option>
          <option value="cooking">cooking</option>
          <option value="football">football</option>
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
