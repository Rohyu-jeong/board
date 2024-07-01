import { useState } from "react";
import Button from "../../components/button/Button";

// 댓글
const CommentForm = () => {
  const [comment, setCommtent] = useState("");

  const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommtent(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    // 기본 동작 방지
    e.preventDefault(); 
    // 댓글 로직
    console.log("댓글: ", comment);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-3 justify-center items-center bg-red-100"
    >
      <textarea
        value={comment}
        onChange={handleComment}
        placeholder="댓글을 작성하세요"
        className="w-[70%] h-24 border outline-none"
      />
      <Button content="댓글 작성" color="bg-red-300" />
    </form>
  );
};

export default CommentForm;
