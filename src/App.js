import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Notfound from "./components/notfound";
import GitHubRepoDetail from "./components/repodetails";
import BombButton from "./components/testerror";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul className="App-ul">
          <li>
            <Link to="/" className="navlink">Home</Link>
            <Link to="/testerror" className="navlink">Error Testing</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/repo/:repoName" element={<GitHubRepoDetail />} />
        <Route path="/testerror" element={<BombButton />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
