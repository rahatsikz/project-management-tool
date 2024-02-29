"use client";
import React, { useEffect, useState } from "react";
import Board from "@/components/Kanban/Board";
import CustomInput from "@/components/Kanban/CustomInput";
import { ICard, IBoard } from "@/types/Kanban";
import { useAppSelector } from "@/redux/hook";
import kanbanDark from "@/assets/images/kanban-one.jpg";
import { KanbanObj } from "./KanbanObj";

const KanbanBoard = ({ boardID }: any) => {
  const { project } = useAppSelector((state) => state.project);

  const [boards, setBoards] = useState<IBoard[]>([]);
  useEffect(() => {
    fetchData();
    console.log(boardID);
  }, [boardID]);

  async function fetchData() {
    const boards: IBoard[] = KanbanObj;
    setBoards(boards);
  }
  const [targetCard, setTargetCard] = useState({
    boardId: 0,
    cardId: 0,
  });

  const addColumnHandler = (name: string) => {
    const tempBoardsList = [...boards];
    tempBoardsList.push({
      id: Date.now() + Math.random() * 2,
      title: name,
      cards: [],
    });
    setBoards(tempBoardsList);
  };

  const removeBoard = (boardId: number) => {
    const boardIndex = boards.findIndex((item: IBoard) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    tempBoardsList.splice(boardIndex, 1);
    setBoards(tempBoardsList);
  };

  const addCardHandler = (boardId: number, title: string) => {
    const boardIndex = boards.findIndex((item: IBoard) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    tempBoardsList[boardIndex].cards.push({
      id: Date.now() + Math.random() * 2,
      title,
      labels: [],
      date: "",
      tasks: [],
      desc: "",
    });
    setBoards(tempBoardsList);
    console.log(tempBoardsList);
  };

  const removeCard = (boardId: number, cardId: number) => {
    const boardIndex = boards.findIndex((item: IBoard) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    const cards = tempBoardsList[boardIndex].cards;

    const cardIndex = cards.findIndex((item) => item.id === cardId);
    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
    setBoards(tempBoardsList);
  };

  const updateCard = (boardId: number, cardId: number, card: ICard) => {
    const boardIndex = boards.findIndex((item) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    const cards = tempBoardsList[boardIndex].cards;

    const cardIndex = cards.findIndex((item) => item.id === cardId);
    if (cardIndex < 0) return;

    tempBoardsList[boardIndex].cards[cardIndex] = card;

    setBoards(tempBoardsList);
  };

  const onDragEnd = (boardId: number, cardId: number) => {
    const sourceBoardIndex = boards.findIndex(
      (item: IBoard) => item.id === boardId
    );
    if (sourceBoardIndex < 0) return;

    const sourceCardIndex = boards[sourceBoardIndex]?.cards?.findIndex(
      (item) => item.id === cardId
    );
    if (sourceCardIndex < 0) return;

    const targetBoardIndex = boards.findIndex(
      (item: IBoard) => item.id === targetCard.boardId
    );
    if (targetBoardIndex < 0) return;

    const targetCardIndex = boards[targetBoardIndex]?.cards?.findIndex(
      (item) => item.id === targetCard.cardId
    );
    if (targetCardIndex < 0) return;

    const tempBoardsList = [...boards];
    const sourceCard = tempBoardsList[sourceBoardIndex].cards[sourceCardIndex];
    tempBoardsList[sourceBoardIndex].cards.splice(sourceCardIndex, 1);
    tempBoardsList[targetBoardIndex].cards.splice(
      targetCardIndex,
      0,
      sourceCard
    );
    setBoards(tempBoardsList);

    setTargetCard({
      boardId: 0,
      cardId: 0,
    });
  };

  const onDragEnter = (boardId: number, cardId: number) => {
    if (targetCard.cardId === cardId) return;
    setTargetCard({
      boardId: boardId,
      cardId: cardId,
    });
  };

  // useEffect(() => {
  //   updateLocalStorageBoards(boards);
  // }, [boards]);
  return (
    <div
      style={{ backgroundImage: `url(${kanbanDark.src})` }}
      className='bg-cover w-full h-[91.3vh] flex flex-col'
    >
      <div className='py-2  sticky top-0 bg-transparent tracking-widest text-neutral inline-block text-sm ml-8 leading-9 mr-2'>
        <h1> {project.projectName} </h1>
      </div>
      <div
        className='w-full overflow-x-auto h-full pt-2 overflow-y-hidden'
        style={{ flex: 1 }}
      >
        <div className='w-full px-8 flex gap-8 h-full'>
          {boards.map((item) => (
            <Board
              key={item.id}
              board={item}
              addCard={addCardHandler}
              removeBoard={() => removeBoard(item.id)}
              removeCard={removeCard}
              onDragEnd={onDragEnd}
              onDragEnter={onDragEnter}
              updateCard={updateCard}
            />
          ))}
          <div className='basis-72 min-w-72'>
            <CustomInput
              displayClass='bg-[#1c1c1c] text-neutral border border-neutral
              rounded-3xl shadow-md shadow-black w-full text-center'
              editClass='bg-[#1c1c1c] rounded-3xl p-4'
              placeholder='Enter Column Name'
              text='Add Column'
              buttonText='Add Column'
              onSubmit={addColumnHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
