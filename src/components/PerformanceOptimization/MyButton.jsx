import PropTypes from "prop-types";

const MyButton = (props) => {
  console.log("button çalıştı!");

  return (
    <button
      className="bg-green-500 p-4 rounded-md text-white mt-2"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

MyButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default MyButton;
