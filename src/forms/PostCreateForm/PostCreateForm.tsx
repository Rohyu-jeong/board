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
      .then((response) => {
        // 요청 성공 시 콘솔에 출력
        console.log("요청 성공:", response);
      })
      .catch((error) => {
        // 요청 실패 시 콘솔에 오류 출력
        console.error("요청 실패:", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-4 rounded-md flex flex-col gap-5 pt-24 md:pt-16 lg:pt-12"
    >
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력하세요"
        className="w-full h-16 py-2 px-4 mb-4 rounded-md outline-none shadow-md"
      />
      <div className="flex flex-col">
        <div className="w-full flex justify-end items-center gap-4 bg-white rounded-t-md py-1 pl-2 box-border shadow-md border-b-[1px] border-gray-300 px-3">
          <Button
            content="Bold"
            onClick={handleBold}
            color="bg-white text-black"
          />
          <div className="flex items-center gap-2">
            <label htmlFor="fontSize">Font Size</label>
            <Input
              type="number"
              id="fontSize"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-14 p-1 border border-gray-300 rounded-md outline-none"
            />
          </div>
        </div>
        <div
          ref={textAreaRef}
          // 텍스트 영역을 사용자가 편집 가능하도록 설정
          contentEditable
          onInput={(e) => setContent(e.currentTarget.innerHTML)}
          className="w-full h-[500px] px-4 py-3 rounded-b-md outline-none bg-white shadow-md overflow-y-auto"
          // 폰트 사이즈 동적 적용
          style={{ fontSize: `${fontSize}px` }}
        ></div>
      </div>
      <div className="flex justify-end">
        <Button content="작성하기" type="submit" className="w-24 shadow-md" />
      </div>
    </form>
  );
};

export default PostCreateForm;
