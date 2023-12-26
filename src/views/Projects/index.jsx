import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import FlyinInText from "../../utils/Animations/FlyinInText";

Chart.register(CategoryScale);

const Projects = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalRepositories, setTotalRepositories] = useState(0);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        // Fetch user data to get the total repository count
        const userResponse = await fetch(
          "https://api.github.com/users/Nisal-N-Narasinghe"
        );
        const userData = await userResponse.json();
        setTotalRepositories(userData.public_repos);

        const response = await fetch(
          `https://api.github.com/users/Nisal-N-Narasinghe/repos?sort=updated&page=${page}`
        );
        const data = await response.json();

        // Fetch additional statistics for each repository
        const repositoriesWithStats = await Promise.all(
          data.map(async (repo) => {
            const statsResponse = await fetch(
              `https://api.github.com/repos/Nisal-N-Narasinghe/${repo.name}/stats/participation`
            );
            const statsData = await statsResponse.json();
            return { ...repo, stats: statsData };
          })
        );

        setRepositories((prevRepos) => [
          ...prevRepos,
          ...repositoriesWithStats,
        ]);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
        setLoading(false);
      }
    };

    fetchRepositories();
  }, [page]);

  const handleSeeMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const generateChartData = (stats) => {
    const labels = stats.all.map((_, index) => index + 1);
    const data = stats.all.map((value) => value);
    return {
      labels,
      datasets: [
        {
          label: "Commits",
          data,
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,

          fill: false,
        },
      ],
    };
  };

  return (
    <div className='bg-gray-800 min-h-screen text-white'>
      <Header />

      <div className='container mx-auto p-8'>
        {/* <input
          type='text'
          placeholder='Search repositories'
          className='bg-gray-900  px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch(repositories, searchQuery)}>
          Search
        </button> */}
        {loading ? (
          <p className='text-white'>Loading repositories...</p>
        ) : (
          <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {repositories.map((repo) => (
              <li key={repo.id} className='bg-gray-900 p-6 rounded-md'>
                <h3 className='text-lg font-semibold mb-2'>
                  <a
                    href={repo.html_url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 hover:underline'>
                    {repo.name}
                  </a>
                </h3>
                <p className='text-gray-400'>{repo.description}</p>
                <div className='flex items-center mt-2 text-gray-500'>
                  <span className='mr-4'>{repo.language || "Unknown"}</span>
                  <span className='mr-4'>{repo.stargazers_count} Stars</span>
                  <span>{repo.forks_count} Forks</span>
                </div>
                <div className='flex items-center mt-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    fill='currentColor'
                    className='text-gray-500 mr-2 h-5 w-5'>
                    <path
                      fill-rule='evenodd'
                      d='M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm1.46 10.183a.75.75 0 01.713 0l3.577 1.879l-.68-3.964a.75.75 0 01.216-.66l2.896-2.82-3.988-.579a.75.75 0 01-.567-.415L8 1.797 6.38 5.454a.75.75 0 01-.567.414l-3.987.58 2.896 2.82a.75.75 0 01.216.66l-.68 3.963 3.577-1.878z'></path>
                  </svg>
                  <span className='text-gray-500'>{repo.stargazers_count}</span>
                </div>
                {repo.stats && (
                  <div className='mt-4'>
                    <Line data={generateChartData(repo.stats)} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}

        {!loading && (
          <button
            onClick={handleSeeMore}
            className='mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 '>
            See More
          </button>
        )}
      </div>
      <h2 className='text-center mb-2'>
        <FlyinInText textNoraml={`Total Repos ${totalRepositories}`} />
      </h2>
      <Footer />
    </div>
  );
};

export default Projects;
