import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  const btnClassNames = `btn btn-${props.color} btn-${props.size} ${props.addClass}`;

  return <button className={btnClassNames}>Click</button>;
}

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "success", "danger"])
    .isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  addClass: PropTypes.string,
};

export default Button;
