export const KanbanObj = [
    {
      id: 1,
      title: "Tasks",
      cards: [
        {
          id: 11,
          title: "Product Feature",
          labels: [{ color: "#8da377", text: "Urgent" }],
          date: "2024-02-15",
          tasks: [
            {
              id: 111,
              completed: true,
              text: "Brainstrom",
            },
            {
              id: 112,
              completed: false,
              text: "Implement",
            },
            
          ],
          desc: "It should be done",
          assignee: "Rahat",
        },
       
      ],
    },
    {
      id: 2,
      title: "Doing",
      cards: [
        {
          id: 21,
          title: "Backend Deploy",
          labels: [{ color: "#9975bd", text: "Database" }],
          date: "",
          tasks: [
            { id: 211, completed: false, text: "Restore DB" },
          ],
          desc: "",
          assignee: "Habib",
        },
      ],
    },
    {
      id: 3,
      title: "In-Review",
      cards: [
        
      ],
    },
    {
      id: 4,
      title: "Completed",
      cards: [
       
      ],
    },
  ];