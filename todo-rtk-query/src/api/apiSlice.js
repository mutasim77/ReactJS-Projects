import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todo',
            providesTags: ['Todos']
        }),
        createTodo: builder.mutation({
            query: todo => ({
                url: '/todo',
                method: 'POST',
                body: todo
            }),
            invalidatesTags: ['Todos']
        }),
        deleteTodo: builder.mutation({
            query: id => ({
                url: `/todo/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Todos']
        }),
        updateTodo: builder.mutation({
            query: ({ id, data }) => ({
                url: `/todo/${id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Todos']
        })
    })
});

export const {
    useGetTodosQuery,
    useCreateTodoMutation,
    useDeleteTodoMutation,
    useUpdateTodoMutation } = apiSlice;