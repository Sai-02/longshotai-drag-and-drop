import { useState, useRef } from "react";

function App() {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7]);
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
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
    <div className="flex  items-center justify-center h-screen">
      <ul className="flex flex-col gap-4">
        {list.map((val, index) => {
          return (
            <li
              className="rounded p-2 shadow bg-gray-100 w-[10rem]"
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={drop}
              draggable
            >
              {val}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
