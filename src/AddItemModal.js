import React, { useState } from "react";
import ReactModal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const AddItemModal = ({ open, setOpen, list, setList }) => {
  const [val, setVal] = useState("");
  const closeModal = () => {
    setOpen(false);
  };
  const addItem = () => {
    if (val.trim() === "") return;
    setList([...list, val]);
    closeModal();
  };
  return (
    <ReactModal isOpen={open} style={customStyles}>
      <div className="flex flex-col gap-5 py-4 px-8">
        <h1 className="font-bold text-blue-700 text-2xl">Add Item</h1>

        <input
          type="text"
          className="outline-none border-b border-gray-600 1"
          placeholder="Name"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />

        <div className="flex gap-4 items-center">
          <button
            className="text-white p-1 px-2 bg-red-600 rounded"
            onClick={addItem}
          >
            Add
          </button>
          <button className="p-1 rounded px-2 bg-gray-100" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default AddItemModal;
