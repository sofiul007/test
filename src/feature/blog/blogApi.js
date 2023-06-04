import { apiSlice } from "../api/apiSlice";

const blogApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addBlog: builder.mutation({
      query: (data) => ({
        url: "/blogs",
        method: "POST",
        body: data,
      }),
    }),
    getBlogs: builder.query({
      query: () => "/blogs",
    }),
    getLimitedBlogs: builder.query({
      query: () => "/blogs?_limit=3",
    }),
    getBlogDetails:builder.query({
      query:(blogId)=>`/blogs/${blogId}`
    })
  }),
});

export const { useAddBlogMutation, useGetBlogsQuery,useGetLimitedBlogsQuery,useGetBlogDetailsQuery } = blogApi;
