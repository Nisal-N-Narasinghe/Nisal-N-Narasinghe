/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gap: {
        socialIcons: "54px",
        navLinks: "30px",
        homeBG: "400px",
        header: "50px",
      },
      width: {
        socialIconsContainer: "340px",
        navLinkContainer: "620px",
        homeBGImage: "450px",
      },
      height: {
        homeBGImage: "660px",
      },
      fontSize: {
        navLinks: "24px",
        navLinksHover: "36px",
        footer: "16px",
        homeName: "48px",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
      textColor: {
        developertxt: "#909090",
      },
    },
  },
  plugins: [],
};
