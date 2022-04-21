import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Queries from "./components/Queries";
import Articles from "./components/Articles";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Queries />
      <main>
        <Routes>
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
