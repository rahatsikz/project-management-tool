import React from "react";
import { X } from "react-feather";
import { ILabel } from "@/types/Kanban";
interface ChipProps {
  item: ILabel;
  removeLabel?: (label: ILabel) => void;
}
const Chip = (props: ChipProps) => {
  const { item, removeLabel } = props;
  return (
    <label
      style={{ backgroundColor: item.color, color: "#fff" }}
      className='rounded-full py-1 px-3 w-fit flex items-center gap-1.5'
    >
      {item.text}
      {removeLabel && <X onClick={() => removeLabel(item)} />}
    </label>
  );
};

export default Chip;
