import PropTypes from "prop-types";

function ProductInput({ handleChange, label, placeholder, name, type }) {
  return (
    <div className="product-input">
      <label>{label}</label>
      <input
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        name={name}
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
};

export default ProductInput;
