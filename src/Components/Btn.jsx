

function Btn({ text, bg = "bg-[#4F46E5]", textColor="text-white" }) {
  return (
    <button
      className={`${bg} ${textColor} my-1 sm:m-1 px-4 py-2 sm:py-3 w-full sm:w-36 rounded-xl 
      hover:scale-[1.03] sm:hover:scale-[1.1] transition-transform`}
    >
      {text}
    </button>
  );
}

export default Btn;
