import Button, { ButtonProps } from "../../components/button/Button";

type HeaderProps = {
  headerText: ButtonProps;
};

// 헤더
const Header = () => {
  const handleChange = () => {
    // 로그인창으로 이동 및 마이페이지 이동 로직
  };

  return (
    <header className="bg-[#444444] text-white p-4 flex justify-between w-screen fixed z-[3]">
      <h1 className="text-2xl">닉네임's Blog</h1>
      <Button content="닉네임" onClick={handleChange} color="bg-[#444444]" />
    </header>
  );
};

export default Header;