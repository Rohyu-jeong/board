import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

// 메인
const Main = ({ children }: MainProps) => {
  return (
    <main className="top-[70px]">
      <div className="w-full h-full max-w-[1300px] m-auto pt-28">
        {children}
      </div>
    </main>
  );
};

export default Main;
