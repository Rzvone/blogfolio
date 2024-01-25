

interface ButtonProps {
    text: string;
    onClick: () => void;
    aria: string;
    
}

const Button = ({text, onClick, aria}: ButtonProps) => {
  return (
    <button
        className="bg-primary py-1 px-4 rounded-lg hover:bg-green-400 duration-500 inline-block text-white"
        onClick={onClick}
        aria-label={aria}
    >
        {text}
    </button>
  )
}

export default Button