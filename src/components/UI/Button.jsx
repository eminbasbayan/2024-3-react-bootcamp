import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  console.log(props);

  return <button className={`btn btn-${props.color}`}>Click</button>;
}

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "success", "danger"])
    .isRequired,
};

export default Button;
