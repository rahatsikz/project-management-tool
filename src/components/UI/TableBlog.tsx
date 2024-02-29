"use client";

import { useGetBlogQuery } from "@/redux/api/blogApi";

const TableBlog = () => {
  const { data, isLoading } = useGetBlogQuery(undefined);

  return (
    <div className="mb-14">
      <h1 className="m-14 text-center text-xl  fond-bold">Blog List</h1>
      {/* Board List */}
      <table className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200">
        <tbody>
          <tr>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Author
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Title
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Description
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-center stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Action
            </th>
          </tr>
          {data?.data?.map((blog: any) => (
            <tr key={blog.id}>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                {blog.author}
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                {blog.title}
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                {blog.description.slice(0, 20) +
                  "..." +
                  blog.description.slice(-4)}
              </td>
              <td className="h-12 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-white bg-red-600 text-center">
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableBlog;
