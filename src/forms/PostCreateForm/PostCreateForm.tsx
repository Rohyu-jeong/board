import { useRef, useState } from "react";
import {
  PostContentData,
  postContentPost,
} from "../../services/postContentPost";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

// 글 작성 폼
const PostCreateForm = () => {
  // 제목 상태 관리
  const [title, setTitle] = useState("");
  // 내용 상태 관리
  const [content, setContent] = useState("");
  // 폰트 사이즈 상태 관리
  const [fontSize, setFontSize] = useState(16);
  // 텍스트 영역을 참조하기 위한 ref
  const textAreaRef = useRef<HTMLDivElement>(null);

  // 굵기 버튼 클릭 핸들러
  const handleBold = () => {
    document.execCommand("bold"); // 선택한 텍스트 굵게
  };

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    // 폼 제출 기본 동작 방지
    e.preventDefault(); 
  
    const postData: PostContentData = { title, content, fontSize };
  
    // 요청 보내기
    postContentPost(postData)
      .then(response => {
        // 요청 성공 시 콘솔에 출력
        console.log("요청 성공:", response);
      })
      .catch(error => {
        // 요청 실패 시 콘솔에 오류 출력
        console.error("요청 실패:", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-4 rounded-md flex flex-col gap-3 pt-24"
    >
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full h-24 p-2 mb-4 border border-gray-300 rounded-md outline-none"
      />
      <div className="flex justify-end gap-10">
        <Button content="Bold" onClick={handleBold} />
        <div>
          <label htmlFor="fontSize">Font Size</label>
          <Input
            type="number"
            id="fontSize"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="ml-2 p-1 border border-gray-300 rounded-md outline-none"
          />
        </div>
      </div>
      <div
        ref={textAreaRef}
        // 텍스트 영역을 사용자가 편집 가능하도록 설정
        contentEditable
        onInput={(e) => setContent(e.currentTarget.innerHTML)}
        className="w-full h-[500px] mb-4 p-2 border border-gray-300 rounded-md outline-none"
        // 폰트 사이즈 동적 적용
        style={{ fontSize: `${fontSize}px` }}
      ></div>
      <Button content="작성하기" type="submit" />
    </form>
  );
};

export default PostCreateForm;
