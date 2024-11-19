// Button component - renders a customizable button based on props
const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick} // Event handler passed in as a prop for button clicks
        className={`bg-black text-white text-xs hover:bg-gray-700 py-3 px-4 rounded ${props.className}`}
        type={props.type}
        // Tailwind CSS classes for styling:
        // bg-black, text-white - Default button colors
        // text-xs - Small text size
        // hover:bg-gray-700 - Changes background on hover
        // py-3, px-4 - Padding for button size
        // rounded - Rounded corners
        // ${props.className} - Allows additional styling passed in as props to override or add styles
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
