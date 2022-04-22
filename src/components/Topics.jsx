import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";

function Topics({ topics }) {
  return (
    <section className="Topics">
      <ul className="Topics__List">
        {topics.map((topic) => {
          return (
            <li key={topic.slug} className="topic-card">
              <ul>
                <li>
                  Topic:{" "}
                  <Link to={`/articles?topic=${topic.slug}`}>{topic.slug}</Link>
                </li>
                <li> Description: {topic.description}</li>
                <li>Number of articles:</li>
                <li>Total number of comments:</li>
                <li>Total number of votes:</li>
                <li>Latest article:</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Topics;
