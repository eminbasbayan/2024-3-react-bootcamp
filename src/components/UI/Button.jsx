import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  const { color, size, addClass, children, onClick } = props;

  const btnClassNames = `btn btn-${color} btn-${size} ${
    addClass ? addClass : ""
  }`;

  return (
    <button className={btnClassNames} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "success", "danger"])
    .isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  addClass: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
