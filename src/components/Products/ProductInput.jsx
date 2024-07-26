import PropTypes from "prop-types";

function ProductInput({ handleChange, label, placeholder, name, type, value }) {
  return (
    <div className="product-input">
      <label>{label}</label>
      <input
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        name={name}
        value={value}
      />
    </div>
  );
}

ProductInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ProductInput;
