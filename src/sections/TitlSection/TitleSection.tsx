import { useState } from "react";
import Button from "../../components/button/Button";
import InfoCard from "../../components/infocard/InfoCard";
import { FaHeart } from "react-icons/fa";

type TitleSectionProps = {
  title: string;
  userId: string;
  date: string;
};

// 본문 제목
const TitleSection = ({ title, userId, date }: TitleSectionProps) => {
  // 좋아요 수 상태 관리
  const [likeCount, setLikeCount] = useState(0);
  // 좋아요 상태 토글
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    // 좋아요 수 감소 또는 증가
    isLiked ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="w-full flex flex-col gap-10 items-center">
      <div className="w-full h-14 border flex justify-center items-center">
        <span>{title}</span>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-5">
          <InfoCard content={userId} />
          <InfoCard content={date} />
        </div>
        <div className="bg-red-300">
          <Button
            content={
              <>
                <FaHeart /> {likeCount}
              </>
            }
            color="bg-red-300"
            onClick={handleLike}
          />
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
