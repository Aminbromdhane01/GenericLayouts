import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookSlice = createApi({
    reducerPath: 'book',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => 'books'
        })
    })
})

export const { useGetBooksQuery } = bookSlice