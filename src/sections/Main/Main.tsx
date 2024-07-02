import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

// 메인
const Main = ({ children }: MainProps) => {
  return (
    <main className="w-full bg-[#FBF7F0]">
      <div className="max-w-[1300px] mx-auto pb-10 pt-16 md:pt-16 lg:pt-12 px-4 md:px-6 lg:px-8">
        {children}
      </div>
    </main>
  );
};

export default Main;
