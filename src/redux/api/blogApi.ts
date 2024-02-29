import { baseApi } from "./baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBlog: build.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
    createBlog: build.mutation({
      query: (blogData) => ({
        url: "/blogs/create-blog",
        method: "POST",
        data: blogData,
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const { useGetBlogQuery, useCreateBlogMutation } = blogApi;
