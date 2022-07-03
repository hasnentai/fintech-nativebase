import axios from "axios";

/**
 *
 * @returns the cards information from the backend server db
 */
export const getAllCards = async () => {
  try {
    let data = await axios.get(
      "https://hack-withnative.herokuapp.com/company/all"
    );
    return data.data;
  } catch (err) {
    console.log(err);
    return {
      status: "error",
      message: err.message,
    };
  }
};
