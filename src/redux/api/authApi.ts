import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userCreate: build.mutation({
      query: (userData) => ({
        url: "/users/create-user",
        method: "POST",
        data: userData,
      }),
      invalidatesTags: ["user"],
    }),
    userLogin: build.mutation({
      query: (loginData) => ({
        url: "/auth/signin",
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
    getUser: build.query({
      query: (id: string) => ({
        url: `/users/${id}`,
        method: "GET"
      }),
    }),
    getUserByEmail: build.query({
      query: (email: string) => ({
        url: `/users/${email}`,
        method: "GET"
      }),
    }),
  }),
});

export const { useUserLoginMutation, useUserCreateMutation, useGetUserQuery, useGetUserByEmailQuery } = authApi;
