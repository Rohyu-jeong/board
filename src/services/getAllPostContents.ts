import axios from "axios";

export const getAllPosts = () => {
  return axios.get("/data/dummyPosts.json")
    .then(response => {
      console.log("getPostContent - response.data:", response.data);
      return response.data;
    })
    .catch(error => {
      console.error("데이터 가져오기 중 오류 발생:", error);
      throw error;
    });
};
