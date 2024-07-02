type InfoCardProps = {
  content: string;
};

// 정보.. 나타내는 애...(작성자, 날짜 등등)
const InfoCard = ({ content }: InfoCardProps) => {
  return (
    <div className="w-40 h-8 bg-[#CDC9C3] flex justify-center items-center rounded-md shadow-md">
      {content}
    </div>
  );
};

export default InfoCard;
