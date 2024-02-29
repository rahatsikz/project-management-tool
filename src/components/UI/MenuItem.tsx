import Link from "next/link";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
}

export const MenuItem = ({ icon, label, path }: MenuItemProps) => {
  return (
    <li>
      <Link
        href={path}
        className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-primary  group'
      >
        {icon}
        <span className='ms-3'>{label}</span>
      </Link>
    </li>
  );
};
