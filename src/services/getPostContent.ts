import axios from "axios";

export const getPostContent = (postId: number) => {
  return axios.get("/data/dummyPosts.json")
    .then(response => {
      console.log("getPostContent - response.data:", response.data);
      const data = response.data.find((post: any) => post.postId === postId);
      console.log("getPostContent - foundPost:", data);
      return data;
    })
    .catch(error => {
      console.error("오류 발생:", error);
      throw error;
    });
};
