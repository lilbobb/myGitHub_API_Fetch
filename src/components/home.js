import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";

function Home() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(
        `https://api.github.com/users/lilbobb/repos?page=${page}&per_page=10`
      );
      const data = await response.json();
      setRepos(data);
    }

    fetchRepos();
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="repolist">
      <h1>My GitHub Repositories</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={`/repo/${repo.name}`}>{repo.name}</a>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => handlePageChange(page - 1)}>Prev</button>
        <button onClick={() => handlePageChange(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Home;
