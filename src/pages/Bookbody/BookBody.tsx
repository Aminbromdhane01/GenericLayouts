import React from 'react';


import { Grid } from '@mui/material';
import { BookBodyProps } from './bookBody.interface';
import BookCardContainer from '@/layouts/Card/BookCardContainer';



const BookBody = ({ books }: BookBodyProps) => {
  return (
    <>
      {books.map((book, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <BookCardContainer
            title={book.title}
            description={book.description}
            backgroundColor={book.backgroundColor}
          />
        </Grid>
      ))}
    </>

  );
};

export default BookBody;
