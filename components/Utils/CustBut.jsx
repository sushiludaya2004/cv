const CustBut = ({
  name,
  bg = "bg-white",
  text = "text-black",
  border = "border-gray-300",
  outline = false,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      className={`
        inline-flex items-center justify-center
        px-3 py-1 rounded-lg
        border shadow-sm
        text-sm font-medium tracking-wide
        transition-all duration-200 ease-out
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        active:scale-[0.97]

        ${outline ? "bg-transparent" : bg}
        ${text}
        ${border}

        hover:shadow-md
        hover:-translate-y-[1px]

        ${disabled ? "opacity-50 cursor-not-allowed hover:shadow-sm active:scale-100" : ""}
      `}
    >
      {name}
    </button>
  );
};

export default CustBut;
