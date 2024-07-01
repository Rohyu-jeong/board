import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

// 메인
const Main = ({ children }: MainProps) => {
  return (
    <main className="w-screen h-screen top-[70px]">
      <div className="w-full h-full max-w-[1300px] m-auto pt-36">
        {children}
      </div>
    </main>
  );
};

export default Main;
