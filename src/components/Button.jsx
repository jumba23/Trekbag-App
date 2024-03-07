const Button = ({ type, children, handleRemoveAllItem }) => {
  return (
    <button
      onClick={handleRemoveAllItem}
      className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
