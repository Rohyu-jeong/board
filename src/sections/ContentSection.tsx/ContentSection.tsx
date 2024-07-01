type ContentSectionProps = {
  content: string;
};

// 본문 내용
const ContentSection = ({ content }: ContentSectionProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-14">
      <span
        className="w-full border overflow-auto bg-white"
        // dangerouslySetInnerHTML={{ __html: content } - HTML 렌더링 / XSS 공격 주의(보안 취약)
        dangerouslySetInnerHTML={{ __html: content }}
      ></span>
    </div>
  );
};

export default ContentSection;
