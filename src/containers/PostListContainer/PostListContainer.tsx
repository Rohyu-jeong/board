import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllPosts } from "../../services/getAllPostContents";
import Main from "../../sections/Main/Main";
import Button from "../../components/button/Button";

// 임시 - 클릭시 본문 페이지로
export const PostListContainer = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const getPosts = () => {
      getAllPosts()
        .then(data => {
          setPosts(data);
        })
        .catch(error => {
          console.error("오류 발생:", error);
        });
    };
  
    getPosts();
  }, []);

  return (
    <Main>
      {posts.map((post) => (
        <Link key={post.postId} to={`/postContent/${post.postId}`}>
          <Button content={`${post.postId}`} />
        </Link>
      ))}
    </Main>
  );
};

export default PostListContainer;
