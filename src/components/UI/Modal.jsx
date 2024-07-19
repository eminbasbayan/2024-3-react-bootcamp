function Modal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-xl font-semibold">{"title"}</h3>
          <button className="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
        <div className="py-4">Content</div>
        <div className="flex justify-end border-t pt-3">
          <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 mr-2">
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
