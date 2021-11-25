import axios from "axios";

export const setDataBlog = () => (dispatch) => {
  axios
    .get("http://localhost:4000/v1/blog/posts?page=4&perPage=2")
    .then((result) => {
      const responseAPI = result.data;

      dispatch({ type: "UPDATE_DATA_BLOG", payload: responseAPI.data });
    })
    .catch((err) => {
      console.log("error: ", err);
    });
};
