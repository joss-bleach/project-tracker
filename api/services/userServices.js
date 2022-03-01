export const createNewUser = async (name, email, password) => {
  try {
    return await console.log("Hi" + name + email + password);
  } catch (err) {
    throw new Error(err.message);
  }
};
