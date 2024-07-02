import { useState } from "react";
import { Comment } from "../../sections/CommentListSection/CommentListSection";
import Button from "../../components/button/Button";

type CommentFormProps = {
  onAddComment: (comment: Comment) => void;
};

// 댓글
const CommentForm = ({ onAddComment }: CommentFormProps) => {
  const [comment, setComment] = useState("");

  const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    // 기본 동작 방지
    e.preventDefault();
    console.log("Submitted comment:", comment);

    const newComment = {
      id: "아이디",
      date: new Date().toISOString(),
      content: comment,
    };

    onAddComment(newComment);
    setComment("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-3 justify-center items-center pt-10"
    >
      <div className="relative w-full">
        <textarea
          value={comment}
          onChange={handleComment}
          placeholder="댓글을 작성하세요"
          className="w-full h-24 border outline-none bg-white rounded-md py-4 pl-4 pr-32 shadow-md resize-none"
        />
        <div className="absolute top-1 right-3">
          <Button
            content="작성하기"
            type="submit"
            color="bg-white"
            className="py-8"
          />
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
