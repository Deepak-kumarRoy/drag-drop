import React, { useState, useRef } from "react";
import "./style.css";

export default function App() {

  const draggingItem = useRef();
  const dragOverItem = useRef();

  const [list, setList] = useState([
   'Apple',
   'Mango',
   'Grapes',
   'Banana',
   'Guava',
   'Watermelon',
  ]);

  const handleDragStart = (e, position) => {
   draggingItem.current = position;
   console.log(e.target.innerHTML);
  };
  
  const handleDragEnter = (e, position) => {
   dragOverItem.current = position;
   console.log(e.target.innerHTML);
  };
  
  const handleDragEnd = (e) => {
  const listCopy = [...list];
  const draggingItemContent = listCopy[draggingItem.current];
  listCopy.splice(draggingItem.current, 1);
  listCopy.splice(dragOverItem.current, 0, draggingItemContent);
   
   draggingItem.current = null;
   dragOverItem.current = null;
   setList(listCopy);
  };
  
  return (
  <>
  <center><h2>Drag And Drop Within A List</h2></center>
  {
   list &&
   list.map((item, index) => (
    <h1 
     onDragStart={(e) => handleDragStart(e, index)}
     onDragEnter={(e) => handleDragEnter(e, index)}
     onDragEnd={handleDragEnd}
     key={index}
     draggable
      >
        {item}
      </h1>
     ))}
    </>
   );
  };
