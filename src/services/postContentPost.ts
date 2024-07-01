import axios from "axios";

export type PostContentData = {
  title: string;
  content: string;
  fontSize: number;
};

export const postContentPost = (postData: PostContentData) => {
  // 요청 데이터 콘솔 출력
  console.log("요청할 데이터:", JSON.stringify(postData, null, 2));

  // 더미 응답 데이터 생성 - 테스트
  const dummyResponse = {
    status: 200,
    data: {
      postData,
    },
  };

  // 더미 응답을 콘솔에 출력 - 테스트
  console.log("받은 응답 데이터:", JSON.stringify(dummyResponse, null, 2));

  // 실제 포스트 요청 - 주석처리됨
  // return axios.post('', postData)
  //   .then(response => {
  //     console.log("받은 응답 데이터:", JSON.stringify(response.data, null, 2));
  //     return response.data;
  //   })
  //   .catch(error => {
  //     console.error("포스트 요청 중 오류 발생:", error);
  //     throw error;
  //   });

  // 더미 응답 반환 - 테스트
  return new Promise((resolve, reject) => {
    resolve(dummyResponse);
  });
};
