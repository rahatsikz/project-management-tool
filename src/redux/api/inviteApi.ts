import { baseApi } from "./baseApi";

const emailApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    sendEmail: build.mutation({
      query: (emails) => ({
        url: "/sendMails",
        method: "POST",
        data: emails,
      }),
      invalidatesTags: [],
    }),
  }),
});

export const { useSendEmailMutation } = emailApi;
