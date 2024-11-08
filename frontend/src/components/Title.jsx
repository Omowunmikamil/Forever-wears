// Title component to display the section title with a line beneath
const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex items-center mb-3 gap-2">
      {/* First part of the title text */}
      <p className="text-gray-500">
        {text1} <span className="text-gray-700 font-medium">{text2}</span>
      </p>
      {/* Line under the title */}
      <p className="w-8 sm:w-12 h-[2px] bg-gray-700"></p>
    </div>
  );
};

export default Title;
