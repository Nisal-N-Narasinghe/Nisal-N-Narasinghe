//truncateText function will take a string and a max length and return a truncated string with ... at the end
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substr(0, maxLength) + "...";
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
