import PostCreateForm from "../../forms/PostCreateForm/PostCreateForm";
import Main from "../../sections/Main/Main";

// 글 작성
export const PostCreateContainer = () => {
  return (
    <Main>
      <PostCreateForm />
    </Main>
  );
};

export default PostCreateContainer;
