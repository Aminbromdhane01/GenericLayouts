export interface Book {
    title: string;
    description: string;
    backgroundColor: string;
}

export interface BookBodyProps {
    books?: Book[];
    isLoading?: boolean;
    isError?: boolean;
    isSuccess?: boolean;
}