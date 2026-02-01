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
        group relative
        inline-flex items-center justify-center
        px-3 py-1 rounded-lg
        border
        text-sm font-medium tracking-wide

        transition-all duration-200 ease-out
        focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-zinc-500
        active:scale-[0.97]

        ${outline ? "bg-transparent" : bg}
        ${text}
        ${border}

        shadow-[0_2px_6px_rgba(0,0,0,0.08)]
        hover:shadow-[0_4px_10px_rgba(0,0,0,0.12)]
        hover:-translate-y-[1px]

        dark:shadow-none

        ${
          disabled
            ? "opacity-50 cursor-not-allowed hover:shadow-none hover:translate-y-0 active:scale-100"
            : ""
        }
      `}
    >
      {/* Border glow – dark mode only */}
      {!disabled && (
        <span
          className="
            pointer-events-none absolute inset-0
            rounded-lg
            opacity-0 group-hover:opacity-100
            transition-opacity duration-200
            ring-1 ring-white/30
            dark:block hidden
          "
        />
      )}

      <span className="relative z-10">{name}</span>
    </button>
  );
};

export default CustBut;
