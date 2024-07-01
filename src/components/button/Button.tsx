export type ButtonProps = {
  content: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

// 버튼
const Button = ({
  content,
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className="px-4 py-2 bg-[#444444] text-white rounded"
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
