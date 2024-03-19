'use client'
import React, { useEffect, useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import { BookBodyProps } from './bookBody.interface';
import BookCardContainer from '@/layouts/Card/BookCardContainer';
import { useGetBooksQuery } from '@/features/book/api/apiSlice';



const BookBody = () => {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [booksNumber, setBooksNumber] = useState<number>(0);
  const [cardsPerPage, setCardsPerPage] = useState<number>(getCardsPerPage());
  const { data: books, isLoading, isError, error, isSuccess } = useGetBooksQuery('books');
  function getCardsPerPage(): number {
    const breakpoints: Record<string, number> = {
      xs: 1,
      sm: 2,
      md: 3,
      xl: 4,

    };


    if (window.matchMedia('(max-width: 575px)').matches) {
      return breakpoints.xs;
    } else if (window.matchMedia('(min-width: 576px) and (max-width: 850px)').matches) {
      return breakpoints.sm;
    } else if (window.matchMedia('(min-width: 851px) and (max-width: 1199px)').matches) {
      return breakpoints.md;
    } else if (window.matchMedia('(min-width: 1199px) and (max-width: 1300px)').matches) {
      return breakpoints.xl;
    } else {
      return breakpoints.xl; // Default for larger screens
    }
  }


  window.addEventListener('resize', () => {
    setCardsPerPage(getCardsPerPage());
  });
  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(getCardsPerPage());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    if (isSuccess && books) {
      setBooksNumber(books.length);
    }
  }, [isSuccess, books]);

  const nextPage = () => {
    const nextIndex: number = startIndex + cardsPerPage;
    if (nextIndex < booksNumber) {
      setStartIndex(nextIndex);
    }
  };

  const prevPage = () => {
    const prevIndex: number = startIndex - cardsPerPage;
    if (prevIndex >= 0) {
      setStartIndex(prevIndex);
    }
  };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error fetching books!</div>
      ) : isSuccess ? (
        books.slice(startIndex, startIndex + cardsPerPage).map((book: any, index: any) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3} >
            <BookCardContainer
              title={book.title}
              description={book.description}
              backgroundColor={book.backgroundColor}
            />
          </Grid>
        ))
      ) : ''}
      <Box style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button disabled={startIndex === 0} onClick={prevPage}>Previous</Button>
        <Button disabled={startIndex + cardsPerPage >= booksNumber} onClick={nextPage}>Next</Button>
      </Box>
    </>

  );
};

export default BookBody;
