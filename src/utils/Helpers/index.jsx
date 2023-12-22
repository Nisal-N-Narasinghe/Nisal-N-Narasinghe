//truncateText function will take a string and a max length and return a truncated string with ... at the end
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substr(0, maxLength) + "...";
};
