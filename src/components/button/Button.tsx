export type ButtonProps = {
  content: React.ReactNode;
  color?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

// 버튼
const Button = ({
  content,
  color = "bg-slate-300",
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`w-40 h-8 border border-black ${color} flex justify-center items-center`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
