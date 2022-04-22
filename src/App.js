import "./App.css";
import { Routes, Route, useSearchParams } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Queries from "./components/Queries";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import Article from "./components/Article";
import { useEffect, useState } from "react";
import { getTopics } from "./utils/api";

function App() {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Header></Header>
      <Queries
        topics={topics}
        setSelectedTopic={setSelectedTopic}
        selectedTopic={selectedTopic}
      />
      <main>
        <Routes>
          <Route
            path={`/articles`}
            element={
              <Articles
                setSelectedTopic={setSelectedTopic}
                setArticleId={"setArticleId"}
              />
            }
          />
          <Route
            path={`/articles?=${selectedTopic}`}
            element={
              <Articles
                setSelectedTopic={setSelectedTopic}
                setArticleId={"setArticleId"}
              />
            }
          />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="/topics" element={<Topics topics={topics} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
