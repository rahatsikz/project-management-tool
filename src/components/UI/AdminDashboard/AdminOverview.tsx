"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaClipboardList, FaUser } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";

const AdminOverview = () => {
    const boardList = [
        { serialNo: 1, boardName: "Placement Board", creatorName: "ruman@ph.com" },
        { serialNo: 2, boardName: "PH Board", creatorName: "talha@ph.com" },
        { serialNo: 3, boardName: "Untitled Board", creatorName: "mamun@ph.com" },
        { serialNo: 4, boardName: "DevRiser", creatorName: "alim@ph.com" },
        { serialNo: 5, boardName: "Dev-Dazzle", creatorName: "musa@ph.com" },
        { serialNo: 6, boardName: "Enthusiast", creatorName: "faisal@ph.com" },
        { serialNo: 7, boardName: "TaskHacks", creatorName: "sinbad@ph.com" },
        { serialNo: 8, boardName: "My Board One", creatorName: "rahat@gmail.com" },
        { serialNo: 9, boardName: "My Board Two", creatorName: "rahat@gmail.com" },
        {
            serialNo: 10,
            boardName: "My Board Three",
            creatorName: "rahat@gmail.com",
        },
    ];

    const [allBoards, setAllBoards] = useState(boardList);

    const memberList = [
        { serialNo: 1, memberName: "Ruman Islam", memberEmail: "ruman@ph.com" },
        { serialNo: 2, memberName: "Abu Talha", memberEmail: "talha@ph.com" },
        { serialNo: 3, memberName: "Rahat Sikder", memberEmail: "rahat@gmail.com" },
        { serialNo: 4, memberName: "Mazhar Mamun", memberEmail: "mamun@ph.com" },
        { serialNo: 5, memberName: "Azizur Faisal", memberEmail: "faisal@ph.com" },
        { serialNo: 6, memberName: "Ahmad Musa", memberEmail: "musa@ph.com" },
        { serialNo: 7, memberName: "Sinbad Hossain", memberEmail: "sinbad@ph.com" },
        { serialNo: 8, memberName: "Alim Mondal", memberEmail: "alim@ph.com" },
        { serialNo: 9, memberName: "Mir Hussain", memberEmail: "mir@ph.com" },
    ];

    const [allMembers, setAllMembers] = useState(memberList);

    const overviewData = [
        {
            icon: <FaClipboardList size={50} />,
            title: "Total Boards",
            value: allBoards.length,
        },
        {
            icon: <GrUserAdmin size={50} />,
            title: "Total Creators",
            value: "10",
        },
        {
            icon: <FaUser size={50} />,
            title: "Total Members",
            value: allMembers.length,
        },
    ];

    const handleBoardDelete = (serialNo: number) => {
        const confirmation = window.confirm(
            "Are you sure you want to delete this board?"
        );

        if (confirmation) {
            setTimeout(() => {
                const newBoards = allBoards.filter(
                    (board) => board.serialNo !== serialNo
                );
                setAllBoards(newBoards);
                toast.success("Board Deleted Successfully");
            }, 1000);
        }
    };

    const handleMemberDelete = (serialNo: number) => {
        const confirmation = window.confirm(
            "Are you sure you want to delete this member?"
        );

        if (confirmation) {
            setTimeout(() => {
                const newMembers = allMembers.filter(
                    (member) => member.serialNo !== serialNo
                );
                setAllMembers(newMembers);
                toast.success("Member Deleted Successfully");
            }, 1000);
        }
    };

    return (
        <div className="w-full overflow-x-auto">
            <div className="flex justify-between text-neutral gap-8">
                {overviewData.map((data, index) => (
                    <div
                        key={index}
                        className="border py-4 px-6 flex gap-2 items-center justify-between flex-1 rounded-lg shadow-md shadow-gray-50 dark:shadow-slate-700"
                    >
                        <div>{data.icon}</div>
                        <div className="flex flex-col items-center">
                            <h2>{data.title}</h2>
                            <div> {data.value} </div>
                        </div>
                    </div>
                ))}
                {/* <div className='border p-3 gap-2 flex items-center justify-between flex-1'>
          <div>
            <GrUserAdmin size={50} />
          </div>
          <div className='flex flex-col items-center'>
            <h2>Total Creators</h2>
            <div>10</div>
          </div>
        </div>
        <div className='border gap-2 p-3 flex items-center justify-between flex-1'>
          <div>
            <FaUser size={50} />
          </div>
          <div className='flex flex-col items-center'>
            <h2>Total Members</h2>
            <div>100</div>
          </div>
        </div> */}
            </div>
            <br />
            <h1>Board List</h1>
            <div>
                {/* Board List */}
                <table
                    className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200"
                    cellSpacing="0"
                >
                    <tbody>
                        <tr>
                            <th
                                scope="col"
                                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                            >
                                No
                            </th>
                            <th
                                scope="col"
                                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                            >
                                Board Name
                            </th>
                            <th
                                scope="col"
                                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                            >
                                Creator Email
                            </th>
                            <th
                                scope="col"
                                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-center stroke-slate-700 text-slate-700 bg-slate-100"
                            >
                                Action
                            </th>
                        </tr>
                        {allBoards.map((board, index) => (
                            <tr key={board.serialNo}>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-neutral ">
                                    {index + 1}
                                </td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-neutral ">
                                    {board.boardName}
                                </td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-neutral ">
                                    {board.creatorName}
                                </td>
                                <td className="h-12 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-white bg-red-600 text-center">
                                    <button
                                        className="w-full h-full"
                                        onClick={() => handleBoardDelete(board.serialNo)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <br />
            <br />
            <h1>Member List</h1>
            <div>
                {/* Member List */}
                <table
                    className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200"
                    cellSpacing="0"
                >
                    <tbody>
                        <tr>
                            <th
                                scope="col"
                                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                            >
                                No
                            </th>
                            <th
                                scope="col"
                                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                            >
                                Member Name
                            </th>
                            <th
                                scope="col"
                                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                            >
                                Member Email
                            </th>
                            <th
                                scope="col"
                                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-center stroke-slate-700 text-slate-700 bg-slate-100"
                            >
                                Action
                            </th>
                        </tr>
                        {allMembers.map((member, index) => (
                            <tr key={member.serialNo}>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-neutral ">
                                    {index + 1}
                                </td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-neutral ">
                                    {member.memberName}
                                </td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-neutral ">
                                    {member.memberEmail}
                                </td>
                                <td className="h-12 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-white bg-red-600 text-center">
                                    <button
                                        className="w-full h-full"
                                        onClick={() => handleMemberDelete(member.serialNo)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <br />
            <br />
        </div>
    );
};

export default AdminOverview;
