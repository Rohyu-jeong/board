type InfoCardProps = {
  content: string;
};

// 정보.. 나타내는 애...(작성자, 날짜 등등)
const InfoCard = ({ content }: InfoCardProps) => {
  return (
    <div className="w-40 h-8 border border-black bg-slate-600 text-white flex justify-center items-center">
      {content}
    </div>
  );
};

export default InfoCard;
