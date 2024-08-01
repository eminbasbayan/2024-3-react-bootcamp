import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Modal({ setIsShowModal, title, desc }) {
  const [count, setCount] = useState(0);
  function handleClose() {
    setIsShowModal(false);
  }

  useEffect(() => {
    console.log("modal DOM'a yüklendi!");

    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      console.log(i);
    }, 1000);

    // clean-up function
    return () => {
      clearInterval(id);
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative z-50">
        <div className="flex justify-between items-center border-b pb-3">
          {/* <h3 className="text-xl font-semibold">{title}</h3> */}
          <h3 className="text-xl font-semibold">{count}</h3>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={handleClose}
          >
            X
          </button>
        </div>
        <div className="py-4">{desc}</div>
        <div className="flex justify-end border-t pt-3">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 mr-2"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleClose}
          >
            Confirm
          </button>
        </div>
      </div>
      <div
        className="bg-black bg-opacity-50 absolute w-full h-full"
        onClick={handleClose}
      ></div>
    </div>,
    document.getElementById("modal")
  );
}

Modal.propTypes = {
  setIsShowModal: PropTypes.func,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Modal;
