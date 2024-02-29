import { FaUsers } from "react-icons/fa6"
import { MdDashboard } from "react-icons/md";

export const kanbenSidebarItems = [
    {
        label: "Boards",
        key: "boards",
        path: "",
        icon: <MdDashboard className="w-6 h-6" />
    },

    {
        label: "Members",
        key: "members",
        path: "",
        icon: <FaUsers className="w-6 h-6" />
    },
];