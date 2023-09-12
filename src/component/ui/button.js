const Button = ({ className, children, variant }) => {
  return (
    <button
      className={`py-2 px-3 rounded ${variant==="outline"?"text-[#8298a2] bg-transparent border border-[#8298a2] hover:bg-white":"text-white bg-[#94aeb9] hover:bg-[#8298a2]"} ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
