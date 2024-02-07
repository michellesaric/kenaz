export const validation = (username, email, comment) => {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (username.trim() === "") {
    return "You haven't entered a name, please redo the input.";
  } else if (email.trim() === "") {
    return "You haven't entered an email, please redo the input.";
  } else if (!emailRegex.test(email)) {
    return "The format you entered is incorrect, please redo the input";
  } else if (comment.trim() === "") {
    return "You haven't entered a comment, please redo the input";
  } else {
    return "submit";
  }
};
