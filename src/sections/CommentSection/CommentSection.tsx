import { useState } from "react";
import CommentForm from "../../forms/CommentForm/CommentForm";
import CommentList from "../CommentListSection/CommentListSection";

// 댓글 입력
const CommentSection = () => {
  const [comments, setComments] = useState<
    { id: string; date: string; content: string }[]
  >([]);

  const addComment = (comment: {
    id: string;
    date: string;
    content: string;
  }) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <CommentForm onAddComment={addComment} />
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentSection;
