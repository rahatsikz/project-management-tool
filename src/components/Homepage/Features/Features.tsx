import React from "react";
import KanbanBoardSVG from "@/assets/svg/KanbanBoardSVG";
import ScheduleSVG from "@/assets/svg/ScheduleSVG";
import UpdateSVG from "@/assets/svg/UpdateSVG";

const Features = () => {
  const featureData = [
    {
      title: "Kanban Board",
      description:
        "Visualize your project workflow with our intuitive Kanban Board. Easily organize tasks, track progress, and collaborate seamlessly with your team. Drag and drop cards to different stages, making project management a breeze",
      image: <KanbanBoardSVG />,
    },
    {
      title: "Project Schedule",
      description:
        "Efficiently plan and manage project timelines with our Project Schedule feature. Create detailed schedules, set milestones, and allocate resources effectively. Stay on top of deadlines and ensure your projects are delivered on time",
      image: <ScheduleSVG />,
    },
    {
      title: "Updating Project",
      description:
        "Keep your team in the loop by effortlessly updating project statuses. Share real-time progress and challenges. Enhance collaboration by providing a centralized platform for team communication, ensuring everyone is on the same page",
      image: <UpdateSVG />,
    },
  ];

  return (
    <div className='container mx-auto my-12'>
      <div className='mb-8' data-aos='fade-up'>
        <h1 className='text-3xl font-bold text-center text-neutral'>
          Our Features
        </h1>
        <p className='text-center mt-2 text-secondary'>
          Explore a comprehensive suite of powerful features designed to elevate
          your project management experience
        </p>
      </div>
      <div className='grid gap-8 px-4 xl:px-0'>
        {featureData.map((feature, index) => (
          <div
            key={index}
            data-aos={index % 2 !== 0 ? "fade-right" : "fade-left"}
            data-aos-duration='2000'
            data-aos-delay='300'
            className={`xl:px-12 xl:py-6 px-4 py-8 border rounded-xl ${
              index % 2 !== 0
                ? "bg-gradient-to-l dark:bg-main-background"
                : " bg-gradient-to-r"
            }  from-slate-50 to-cyan-50 dark:from-slate-700 dark:to-slate-900`}
          >
            <div
              className={`flex flex-col justify-center ${
                index % 2 !== 0 ? "xl:flex-row" : "xl:flex-row-reverse"
              } items-center gap-2 xl:gap-40`}
            >
              <div>{feature.image}</div>
              <div
                className={`grid gap-6 text-center ${
                  index % 2 !== 0 ? "xl:text-right" : "xl:text-left"
                } xl:w-1/2 `}
              >
                <h1 className='text-2xl font-bold text-neutral'>
                  {feature.title}
                </h1>
                <p className='text-lg text-secondary'>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
