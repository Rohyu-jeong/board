type InputProps = {
    type: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
    id?: string;
  };

  const Input: React.FC<InputProps> = ({ type, value, onChange, placeholder, className, id }) => {
    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        id={id}
      />
    );
  }

export default Input;