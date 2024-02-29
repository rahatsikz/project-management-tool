import React, { useEffect, useState } from "react";
import {
  Calendar,
  CheckSquare,
  List,
  Tag,
  Trash,
  Type,
  User,
  Hash,
} from "react-feather";
import { colorsList } from "@/helpers/Util";
import Modal from "./Modal";
import CustomInput from "./CustomInput";
// import Lottie from "react-lottie";
// import * as animationData from "@/assets/lottie/humanTyping.json";

import { ICard, ILabel, ITask } from "@/types/Kanban";
import Chip from "./Chip";
interface CardInfoProps {
  onClose: () => void;
  card: ICard;
  boardId: number;
  updateCard: (boardId: number, cardId: number, card: ICard) => void;
}
const CardInfo = (props: CardInfoProps) => {
  const { onClose, card, boardId, updateCard } = props;
  const [selectedColor, setSelectedColor] = useState("");
  const [cardValues, setCardValues] = useState<ICard>({
    ...card,
  });

  console.log("cardValues", cardValues);

  const updateTitle = (value: string) => {
    setCardValues({ ...cardValues, title: value });
  };

  const updateDesc = (value: string) => {
    setCardValues({ ...cardValues, desc: value });
  };
  const updateComment = (value: string) => {
    setCardValues({ ...cardValues, comment: value });
  };

  const addLabel = (label: ILabel) => {
    const index = cardValues.labels.findIndex(
      (item) => item.text === label.text
    );
    if (index > -1) return; //if label text already exist then return

    setSelectedColor("");
    setCardValues({
      ...cardValues,
      labels: [...cardValues.labels, label],
    });
  };

  const removeLabel = (label: ILabel) => {
    const tempLabels = cardValues.labels.filter(
      (item) => item.text !== label.text
    );

    setCardValues({
      ...cardValues,
      labels: tempLabels,
    });
  };

  const addTask = (value: string) => {
    const task: ITask = {
      id: Date.now() + Math.random() * 2,
      completed: false,
      text: value,
    };
    setCardValues({
      ...cardValues,
      tasks: [...cardValues.tasks, task],
    });
  };

  const removeTask = (id: number) => {
    const tasks = [...cardValues.tasks];

    const tempTasks = tasks.filter((item) => item.id !== id);
    setCardValues({
      ...cardValues,
      tasks: tempTasks,
    });
  };

  const updateTask = (id: number, value: boolean) => {
    const tasks = [...cardValues.tasks];

    const index = tasks.findIndex((item) => item.id === id);
    if (index < 0) return;

    tasks[index].completed = Boolean(value);

    setCardValues({
      ...cardValues,
      tasks,
    });
  };

  const calculatePercent = () => {
    if (!cardValues.tasks?.length) return 0;
    const completed = cardValues.tasks?.filter(
      (item) => item.completed
    )?.length;
    return (completed / cardValues.tasks?.length) * 100;
  };

  const updateDate = (date: string) => {
    if (!date) return;

    setCardValues({
      ...cardValues,
      date,
    });
  };

  useEffect(() => {
    if (updateCard) updateCard(boardId, cardValues.id, cardValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardValues]);

  const calculatedPercent = calculatePercent();

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  return (
    <Modal onClose={onClose}>
      <section className='grid grid-cols-12'>
        <div className='p-8 flex flex-col gap-8 min-w-[550px] w-fit max-w-[650px] h-fit col-span-12'>
          <div className='flex gap-8'>
            <div className='w-full flex flex-col gap-2.5'>
              <div className='flex gap-2.5 items-center'>
                <Type />
                <p className='font-bold text-lg'>Title</p>
              </div>
              <CustomInput
                defaultValue={cardValues.title}
                text={cardValues.title}
                placeholder='Enter Title'
                onSubmit={updateTitle}
              />
            </div>
            <div className='w-full flex flex-col gap-2.5'>
              <div className='flex gap-2.5 items-center'>
                <User />
                <p className='font-bold text-lg'>Assignee</p>
              </div>
              <select
                className='bg-[#1c1c1c] py-1.5 pl-2 pr-4 border rounded appearance-none focus:outline-none'
                value={cardValues.assignee}
                onChange={(e) => {
                  setCardValues({ ...cardValues, assignee: e.target.value });
                  console.log(e.target.value);
                }}
              >
                <option value='Rahat'>Rahat</option>
                <option value='Mir'>Mir</option>
                <option value='Habib'>Habib</option>
              </select>
            </div>
          </div>

          <div className='w-full flex flex-col gap-2.5'>
            <div className='flex gap-2.5 items-center'>
              <List />
              <p className='font-bold text-lg'>Description</p>
            </div>
            <CustomInput
              defaultValue={cardValues.desc}
              text={cardValues.desc || "Add a Description"}
              placeholder='Enter description'
              onSubmit={updateDesc}
            />
          </div>

          <div className='w-full flex flex-col gap-2.5'>
            <div className='flex gap-2.5 items-center'>
              <Calendar />
              <p className='font-bold text-lg'>Due Date</p>
            </div>
            <input
              type='date'
              className='w-full border-2 border-[#ddd] rounded outline-none p-2.5 bg-[#1c1c1c] text-base'
              defaultValue={cardValues.date}
              min={new Date().toISOString().substr(0, 10)}
              onChange={(event) => updateDate(event.target.value)}
            />
          </div>

          <div className='w-full flex flex-col gap-2.5'>
            <div className='flex gap-2.5 items-center'>
              <Tag />
              <p className='font-bold text-lg'>Labels</p>
            </div>
            <div
              className={`gap-2.5 flex-wrap ${
                cardValues.labels?.length ? "flex" : "hidden"
              }`}
            >
              {cardValues.labels?.map((item, index) => (
                <Chip key={index} item={item} removeLabel={removeLabel} />
              ))}
            </div>
            <ul className='flex gap-4'>
              {colorsList.map((item, index) => (
                <li
                  key={index}
                  style={{ backgroundColor: item }}
                  className={`${
                    selectedColor === item ? "border-white border-2 p-2" : ""
                  } list-none w-5 h-5 rounded-full cursor-pointer`}
                  onClick={() => setSelectedColor(item)}
                />
              ))}
            </ul>
            <div className='mt-2'>
              <CustomInput
                text='Add Label'
                placeholder='Enter label text'
                onSubmit={(value: string) =>
                  addLabel({ color: selectedColor, text: value })
                }
              />
            </div>
          </div>

          <div className='w-full flex flex-col gap-2.5'>
            <div className='flex gap-2.5 items-center'>
              <CheckSquare />
              <p className='font-bold text-lg'>Tasks</p>
            </div>
            <div className='w-full rounded-full h-2.5 border-[#ccc] bg-white'>
              <div
                className='h-full rounded-full bg-cyan-500 w-0 duration-200'
                style={{
                  width: `${calculatedPercent}%`,
                  backgroundColor: calculatedPercent === 100 ? "#4FCC25" : "",
                }}
              />
            </div>
            <div
              className={`flex flex-col gap-4 ${
                cardValues.tasks?.length ? "my-2" : "hidden"
              }`}
            >
              {cardValues.tasks?.map((item) => (
                <div key={item.id} className='flex items-end gap-2.5'>
                  <input
                    type='checkbox'
                    className='h-4 w-4 outline-none cursor-pointer'
                    defaultChecked={item.completed}
                    onChange={(event) =>
                      updateTask(item.id, event.target.checked)
                    }
                  />
                  <p
                    style={{ flex: 1 }}
                    className={`${
                      item.completed ? "line-through" : ""
                    } leading-4`}
                  >
                    {item.text}
                  </p>
                  <Trash onClick={() => removeTask(item.id)} />
                </div>
              ))}
            </div>
            <CustomInput
              text={"Add a Task"}
              placeholder='Enter task'
              onSubmit={addTask}
            />
          </div>

          <div className='w-full flex flex-col gap-2.5'>
            <div className='flex gap-2.5 items-center'>
              <Hash />
              <p className='font-bold text-lg'>Comments</p>
            </div>
            <CustomInput
              defaultValue={cardValues.desc}
              text={cardValues.comment || "Add a comment"}
              placeholder='Enter Comment'
              onSubmit={updateComment}
            />
          </div>
        </div>
        {/* <div className='col-span-5 flex justify-center items-center px-8'>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div> */}
      </section>
    </Modal>
  );
};

export default CardInfo;
