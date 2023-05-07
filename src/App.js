import { useState, useRef } from "react";
import AddItemModal from "./AddItemModal";
function App() {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState([
    "Shopping in barcelona",
    "famous shopping streets",
    "shopping results",
    "shopping mails",
    "markets",
    "opening times",
    "where to stay",
  ]);
  const [open, setOpen] = useState(false);
  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };
  return (
    <div className="flex flex-col gap-5  items-center justify-center p-3">
      <div className="text-gray-600">Edit Outlines</div>
      <ul className="flex flex-col gap-4">
        {list.map((val, index) => {
          return (
            <li
              className="rounded p-2 shadow bg-gray-100 w-[16rem]"
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={drop}
              draggable
            >
              <span className="">{val}</span>
            </li>
          );
        })}
      </ul>
      <button
        className="bg-red-500 text-white p-2 rounded"
        onClick={() => {
          setOpen(true);
        }}
      >
        Add Item
      </button>
      <AddItemModal
        open={open}
        setOpen={setOpen}
        list={list}
        setList={setList}
      />
    </div>
  );
}

export default App;
