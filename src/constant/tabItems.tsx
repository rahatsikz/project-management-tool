import AdminLoginForm from "@/components/Form/AdminLoginForm";
import UserLoginForm from "@/components/Form/UserLoginForm";

export const tabItems = [
    {
        label: 'User',
        content: <UserLoginForm />,
    },
    {
        label: 'Admin',
        content: <AdminLoginForm />,
    },

];