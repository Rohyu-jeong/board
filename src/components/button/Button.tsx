export type ButtonProps = {
  content: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  color?: string;
  className?: string;
};

// 버튼
const Button = ({
  content,
  onClick,
  type = "button",
  color = "bg-[#CDC9C3]",
  className = "",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-md flex items-center justify-center gap-1 ${color} ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
