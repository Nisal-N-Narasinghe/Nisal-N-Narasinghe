//truncateText function will take a string and a max length and return a truncated string with ... at the end
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substr(0, maxLength) + "...";
};

export const handleSearch = (items, searchQuery) => {
  const filteredRepositories = items.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return filteredRepositories;
};

// HelperFunctions.js

export const handleMenuClick = (setShowMenu) => {
  // Set a timeout to hide the menu icon for a duration
  setShowMenu(false);

  setTimeout(() => {
    setShowMenu(true);
  }, 3000);
};

//Social Media Icons
export const socialIcons = [
  {
    path: "images/Header/GitHub.png",
    link: "https://github.com/Nisal-N-Narasinghe",
  },
  {
    path: "images/Header/LinkedIn.png",
    link: "https://www.linkedin.com/in/nisal-narasinghe/",
  },
  {
    path: "images/Header/Instagram.png",
    link: "https://www.instagram.com/_nisal_n_narasinghe_/",
  },
  {
    path: "images/Header/FaceBook.png",
    link: "https://www.facebook.com/nisal.narasinghe/",
  },
];

export const navLinks = [
  {
    url: "/",
    text: "HOME",
  },
  {
    url: "/projects",
    text: "PROJECTS",
  },
  {
    url: "/achievements",
    text: "ACHIEVEMENTS",
  },
];

export const languages = [
  "JavaScript",
  "TypeScript",
  "Kotlin",
  "HTML",
  "CSS",
  "Java",
  "C",
  "C++",
  "C#",
  "PHP",
];
export const generateChartData = (stats) => {
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
