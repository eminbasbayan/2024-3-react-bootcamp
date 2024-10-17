import PropTypes from "prop-types";
import MyParagraph from "./MyParagraph";
import React from "react";

const MyElement = (props) => {
  console.log("my element çalıştı!");

  return <MyParagraph> {props.show && "My Paragraph"} </MyParagraph>;
};

MyElement.propTypes = {
  show: PropTypes.bool,
};

const MemoizedMyElement = React.memo(MyElement);

export default MemoizedMyElement;
