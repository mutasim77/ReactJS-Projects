# Demo

<img src="Screenshot.png">

### RTK Query usage:

```jsx
const apiSlice = createApi({
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
        })
    })
});
```
