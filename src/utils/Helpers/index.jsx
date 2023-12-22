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
  },
  {
    path: "images/Header/Instagram.png",
  },
  {
    path: "images/Header/FaceBook.png",
  },
];

export const navLinks = [
  {
    url: "/",
    text: "HOME",
  },
  {
    url: "/about",
    text: "PROJECTS",
  },
  {
    url: "/projects",
    text: "ACHIEVEMENTS",
  },
];
