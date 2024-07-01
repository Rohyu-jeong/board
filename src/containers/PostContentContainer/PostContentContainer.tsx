import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllPosts } from "../../services/getAllPostContents";
import Main from "../../sections/Main/Main";
import CommentSection from "../../sections/CommentSection/CommentSection";
import ContentSection from "../../sections/ContentSection.tsx/ContentSection";
import TitleSection from "../../sections/TitlSection/TitleSection";

// 본문 컨텐츠
export const PostContentContainer = () => {
  // URL 파라미터 'id'를 가져옴
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const getPost = () => {
      getAllPosts()
        .then(posts => {
          // 'posts'가 배열인지 확인
          if (Array.isArray(posts)) {
            // 'id'에 해당하는 게시물을 찾아 'post' 상태에 설정
            const foundPost = posts.find(
              (post: any) => post.postId === Number(id)
            );
            console.log("Loaded posts:", foundPost);
            setPost(foundPost);
          } else {
            console.error("Posts 데이터가 배열이 아닙니다:", posts);
          }
        })
        .catch(error => {
          console.error("오류 발생: ", error);
        });
    };
  
    getPost();
  }, [id]);

  if (!post) {
    return <div>로딩 중...</div>;
  }

  // 'updateAt' 날짜를 '년-월-일' 형식으로 포맷
  const formattedDate = new Date(post.updateAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Main>
      <TitleSection
        title={post.title}
        userId={post.userId}
        date={formattedDate}
      />
      <ContentSection content={post.content} />
      <CommentSection />
    </Main>
  );
};

export default PostContentContainer;
