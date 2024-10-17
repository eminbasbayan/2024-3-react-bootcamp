import PropTypes from "prop-types";
import React from "react";

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

const Memoized = React.memo(MyButton)

export default Memoized;
