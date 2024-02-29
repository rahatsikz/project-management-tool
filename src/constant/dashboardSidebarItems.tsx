import { MdOutlineViewKanban } from "react-icons/md";
import { TbTemplate } from "react-icons/tb";
import { MdMapsHomeWork, MdOutlineAddCircle } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { USER_ROLE } from "./role";

interface SidebarItem {
    label: string;
    key: string;
    path: string;
    icon: JSX.Element;
}

const defaultSidebarItems: SidebarItem[] = [
    {
        label: "Overview",
        key: "overview",
        path: "",
        icon: <MdOutlineViewKanban className="w-6 h-6" />,
    },
];

const userSidebarItems: SidebarItem[] = [
    ...defaultSidebarItems,
    {
        label: "Template",
        key: "template",
        path: "",
        icon: <TbTemplate className="w-6 h-6" />,
    },
    {
        label: "Home",
        key: "home",
        path: "",
        icon: <MdMapsHomeWork className="w-6 h-6" />,
    },
];

const adminSidebarItems: SidebarItem[] = [
    ...defaultSidebarItems,
    {
        label: "Blogs",
        key: "blogs",
        path: "",
        icon: <MdOutlineViewKanban className="w-6 h-6" />,
    },
    {
        label: "Add Blogs",
        key: "addBlogs",
        path: "",
        icon: <MdOutlineAddCircle className="w-6 h-6" />,
    },
    {
        label: "Users",
        key: "users",
        path: "",
        icon: <FaUsersCog className="w-6 h-6" />,
    },
];

export const dashboardSidebarItems = (role: string): SidebarItem[] => {
    if (role === USER_ROLE.ADMIN) {
        return adminSidebarItems;
    } else if (role === USER_ROLE.USER) {
        return userSidebarItems;
    } else {
        return defaultSidebarItems;
    }
};
