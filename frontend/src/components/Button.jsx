const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className={`bg-black text-white text-xs hover:bg-gray-700 py-3 px-4 rounded ${props.className}`}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
