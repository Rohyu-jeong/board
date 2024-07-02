type ContentSectionProps = {
  content: string;
};

// 본문 내용
const ContentSection = ({ content }: ContentSectionProps) => {
  return (
    <div className="w-full flex pt-5">
      <span
        className="w-full p-4 overflow-auto bg-white shadow-md rounded-md"
        // dangerouslySetInnerHTML={{ __html: content } - HTML 렌더링 / XSS 공격 주의(보안 취약)
        dangerouslySetInnerHTML={{ __html: content }}
      ></span>
    </div>
  );
};

export default ContentSection;
