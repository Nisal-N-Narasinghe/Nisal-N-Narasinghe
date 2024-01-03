import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import FlyinInText from "../../utils/Animations/FlyinInText";
import { generateChartData, languages } from "../../utils/Helpers";

Chart.register(CategoryScale);

const Projects = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRepositories, setTotalRepositories] = useState(0);
  const [query, setQuery] = useState("");
  const [querySort, setQuerySort] = useState("");
  const [visible, setVisible] = useState(4);

  const githubToken = process.env.REACT_APP_GITHUB_TOKEN;

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        // Fetch user data to get the total repository count
        const userResponse = await fetch(
          `https://api.github.com/users/Nisal-N-Narasinghe`,
          {
            headers: {
              Authorization: `token ${githubToken}`,
            },
          }
        );

        const userData = await userResponse.json();
        setTotalRepositories(userData.public_repos);

        const response = await fetch(
          `https://api.github.com/users/Nisal-N-Narasinghe/repos?sort=updated`,
          {
            headers: {
              Authorization: `token ${githubToken}`,
            },
          }
        );

        const data = await response.json();

        // Fetch additional statistics for each repository
        const repositoriesWithStats = await Promise.all(
          data.map(async (repo) => {
            const statsResponse = await fetch(
              `https://api.github.com/repos/Nisal-N-Narasinghe/${repo.name}/stats/participation`,
              {
                headers: {
                  Authorization: `token ${githubToken}`,
                },
              }
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
  }, [githubToken]);

  const handleSeeMore = () => {
    setVisible((prevPage) => prevPage + 4);
  };

  return (
    <div className='bg-gray-800 min-h-screen text-white'>
      <Header />

      <div className='container mx-auto p-8'>
        <div className='grid md:grid-cols-2   mb-4 md:mr-4 lg:mr-0'>
          <div className='relative mb-4'>
            <input
              type='search'
              className='w-full lg:w-serchSortlg xl:w-serchSortxl h-10 bg-gray-900 text-white rounded-md px-4 py-2 pl-10 outline-none focus:ring focus:border-blue-500'
              placeholder='Search repositories...'
              onChange={(e) => setQuery(e.target.value)}
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </div>
          <select
            className='w-full lg:w-serchSortlg xl:w-serchSortxl lg:justify-self-end h-10  bg-gray-900 text-white rounded-md   md:ml-4 lg:ml-0 p-2 '
            onChange={(e) => setQuerySort(e.target.value)}>
            <option hidden value=''>
              Sort
            </option>
            <option value=''>All</option>
            {languages.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <p className='text-white'>Loading repositories...</p>
        ) : (
          <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {repositories
              .filter((repo) =>
                repo.name?.toLowerCase().includes(query.toLowerCase())
              )
              .filter((repo) =>
                repo.language?.toLowerCase().includes(querySort.toLowerCase())
              )
              .slice(0, visible)
              .map((repo) => (
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
                    <span className='text-gray-500'>
                      {repo.stargazers_count}
                    </span>
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

        {visible < repositories.length && (
          <div className='flex justify-center'>
            <button
              onClick={handleSeeMore}
              className='mt-4 h-10 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 '>
              See More
            </button>
          </div>
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
