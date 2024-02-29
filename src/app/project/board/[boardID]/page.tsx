import KanbanBoard from "@/components/Kanban/KanbanBoard";
import React from "react";

const BoardPage = ({ params }: { params: { boardID: any } }) => {
  return <KanbanBoard boardID={params.boardID} />;
};

export default BoardPage;
