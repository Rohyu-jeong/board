import { Link } from "react-router-dom";
import { navDetail } from "../../util/navDetail";
import Button from "../../components/button/Button";

// 헤더
const Header = () => {
  // 네비바 생성
  const detailElments = navDetail.map((data: string, i: number) => {
    return (
      <Link key={i} to={`/${data}`}>
        {data === "" ? <Button content="Main" /> : <Button content={data} />}
      </Link>
    );
  });

  return (
    <header className="w-screen h-[70px] border-b fixed z-[3] bg-white">
      <nav className="w-full h-full max-w-[1300px] flex mx-auto justify-between items-center">
        <div className="w-40 h-8 border border-black bg-slate-300 flex justify-center items-center">
          userId
        </div>
        <div className="flex gap-8">{detailElments}</div>
      </nav>
    </header>
  );
};

export default Header;
