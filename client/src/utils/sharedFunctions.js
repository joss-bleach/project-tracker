export const formatMessage = () => {
  const time = new Date().getHours();
  if (time > 0 && time < 12) {
    return "Good morning,";
  } else if (time > 12 && time < 18) {
    return "Good afternoon,";
  } else {
    return "Good evening,";
  }
};
