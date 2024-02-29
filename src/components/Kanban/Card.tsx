import React, { useState } from "react";
import { AlignLeft, CheckSquare, Clock, MoreHorizontal } from "react-feather";
import { formatDate } from "@/helpers/Util";
import { ICard } from "@/types/Kanban";
import Chip from "./Chip";
import Dropdown from "./Dropdown";
import CardInfo from "./CardInfo";
interface CardProps {
  card: ICard;
  boardId: number;
  removeCard: (boardId: number, cardId: number) => void;
  onDragEnd: (boardId: number, cardId: number) => void;
  onDragEnter: (boardId: number, cardId: number) => void;
  updateCard: (boardId: number, cardId: number, card: ICard) => void;
}
const Card = (props: CardProps) => {
  const { card, boardId, removeCard, onDragEnd, onDragEnter, updateCard } =
    props;
  const { id, title, desc, date, tasks, labels } = card;
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <CardInfo
          onClose={() => setShowModal(false)}
          card={card}
          boardId={boardId}
          updateCard={updateCard}
        />
      )}
      <div
        className='p-3.5 flex flex-col gap-2.5 rounded-3xl bg-[#1c1c1c] cursor-pointer shadow-md shadow-black group hover:opacity-100'
        key={card.id}
        draggable
        onDragEnd={() => onDragEnd(boardId, id)}
        onDragEnter={() => onDragEnter(boardId, id)}
        onClick={() => setShowModal(true)}
      >
        <div className='grid gap-2'>
          <div className='flex items-start'>
            <div
              style={{ flex: 3 }}
              className='flex flex-wrap gap-1.5 text-sm leading-5'
            >
              {labels?.map((item, index) => (
                <Chip key={index} item={item} />
              ))}
            </div>
            <div
              style={{ flex: 1 }}
              className='w-8 h-5 translate-x-4 cursor-pointer opacity-0 duration-200  group-hover:opacity-100'
              onClick={(event) => {
                event.stopPropagation();
                setShowDropdown(true);
              }}
            >
              <MoreHorizontal />
              {showDropdown && (
                <Dropdown
                  class='p-2.5 !w-32 shadow-lg flex justify-center rounded-full shadow-black'
                  onClose={() => setShowDropdown(false)}
                >
                  <p onClick={() => removeCard(boardId, id)}>Delete Card</p>
                </Dropdown>
              )}
            </div>
          </div>
          <div style={{ flex: 1 }} className='font-bold leading-7'>
            {title}
          </div>
          <div>
            <p title={desc}>
              <AlignLeft />
            </p>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          {date && (
            <p className='rounded-full py-1 px-3 w-fit bg-[#f8f8f8] text-black text-sm leading-5 flex gap-1.5 items-center'>
              <Clock className='h-3.5 w-3.5' />
              {formatDate(date)}
            </p>
          )}
          {tasks && tasks?.length > 0 && (
            <p className='rounded-full py-1 px-3 w-fit bg-[#f8f8f8] text-black text-sm leading-5 flex gap-1.5 items-center'>
              <CheckSquare className='h-3.5 w-3.5' />
              {tasks?.filter((item) => item.completed)?.length}/{tasks?.length}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
