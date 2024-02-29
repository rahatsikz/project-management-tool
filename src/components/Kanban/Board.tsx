import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";

import Card from "./Card";
import Dropdown from "@/components/Kanban/Dropdown";
import CustomInput from "@/components/Kanban/CustomInput";
import { IBoard, ICard } from "@/types/Kanban";

interface BoardProps {
  board: IBoard;
  addCard: (boardId: number, title: string) => void;
  removeBoard: (boardId: number) => void;
  removeCard: (boardId: number, cardId: number) => void;
  onDragEnd: (boardId: number, cardId: number) => void;
  onDragEnter: (boardId: number, cardId: number) => void;
  updateCard: (boardId: number, cardId: number, card: ICard) => void;
}

const Board = (props: BoardProps) => {
  const {
    board,
    addCard,
    removeBoard,
    removeCard,
    onDragEnd,
    onDragEnter,
    updateCard,
  } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className='min-w-72 h-full overflow-y-auto basis-72 flex flex-col gap-5 text-neutral'>
      <div className='bg-[#1c1c1c] p-4 rounded-3xl' key={board?.id}>
        <div className='flex justify-between items-center pb-1.5 mb-2'>
          <p className='font-bold text-base items-center gap-1.5 flex justify-between w-[55%]'>
            {board?.title}
            <span className='text-slate-800 bg-white px-2 py-0.5 rounded'>
              {board?.cards?.length || 0}
            </span>
          </p>
          <div
            className='cursor-pointer relative'
            onClick={() => setShowDropdown(true)}
          >
            <MoreHorizontal />
            {showDropdown && (
              <Dropdown
                class='p-2.5 !w-36 shadow-lg flex justify-center rounded-3xl shadow-black'
                onClose={() => setShowDropdown(false)}
              >
                <p onClick={() => removeBoard(board?.id)}>Delete Board</p>
              </Dropdown>
            )}
          </div>
        </div>
        <div className='bg-[#292828] p-3 rounded-3xl flex flex-col gap-4 overflow-y-auto  custom-scroll'>
          {board?.cards?.map((item) => (
            <Card
              key={item.id}
              card={item}
              boardId={board.id}
              removeCard={removeCard}
              onDragEnter={onDragEnter}
              onDragEnd={onDragEnd}
              updateCard={updateCard}
            />
          ))}
          <CustomInput
            text='+ Add Card'
            placeholder='Enter Card Title'
            displayClass='bg-[#1c1c1c] text-neutral rounded-3xl w-full text-center !rounded-full shadow-md'
            editClass='bg-[#1c1c1c]  p-4'
            onSubmit={(value: string) => addCard(board?.id, value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Board;
