import React, { useState } from "react";
import { useDrop } from "react-dnd";
import ImgCard from "./ImgCard";

function MakeDraggingPic({ PictureList, onBoardChange }) {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
    onBoardChange((board) => [...board, pictureList[0]]);
  };

  return (
    <>
      <div className="flex ">
        <div className="flex flex-wrap flex-col">
          {PictureList.map((picture, i) => {
            return <ImgCard url={picture.url} id={picture.id} key={i} />;
          })}
        </div>
        <div className="w-80 h-80 border-4 border-[#704F38]" ref={drop}>
          {board.map((picture, i) => {
            return <ImgCard url={picture.url} id={picture.id} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}

export default MakeDraggingPic;
