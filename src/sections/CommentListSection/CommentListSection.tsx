export type Comment = {
  id: string;
  date: string;
  content: string;
};

type CommentListProps = {
  comments: Comment[];
};

const CommentListSection = ({ comments }: CommentListProps) => {
  return (
    <div className="w-full flex flex-col gap-3 bg-white rounded-md shadow-md">
      {comments.map((comment, index) => (
        <div key={index} className="w-full px-4 pt-2">
          <div className="flex gap-3">
            <span className="font-bold text-xs">{comment.id}</span>
            <span className="text-gray-500 text-xs">
              {new Date(comment.date).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="pb-2 whitespace-pre-line">{comment.content}</div>
          <div className="w-full flex justify-center">
            <div className="border-b-[1px] w-[99%]"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentListSection;
