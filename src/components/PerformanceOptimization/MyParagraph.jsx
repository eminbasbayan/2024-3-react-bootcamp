import PropTypes from "prop-types";

const MyParagraph = (props) => {
  console.log("my paragraph çalıştı!");

  return <p>{props.children}</p>;
};

MyParagraph.propTypes = {
  children: PropTypes.node,
};

export default MyParagraph;
