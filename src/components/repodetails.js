import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function GitHubRepoDetail() {
  const [repo, setRepo] = useState({});
  const { repoName } = useParams();

  useEffect(() => {
    async function fetchRepo() {
      const response = await fetch(
        `https://api.github.com/repos/lilbobb/${repoName}`
      );
      const data = await response.json();
      setRepo(data);
    }

    fetchRepo();
  }, [repoName]);

  return (
    <div className="repodetails">
      <h1>{repo.name}</h1>
      <p>{repo.description}</p>
      <p>Language: {repo.language}</p>
    </div>
  );
}

export default GitHubRepoDetail;
