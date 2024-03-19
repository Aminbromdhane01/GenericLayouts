'use client'
import React, { useState } from "react";
import { CardContent, Typography, Button, Box } from "@mui/material";
import ControlledRating from "@/components/Rating/ControlledRating";
import { BookPresenterProps } from "./card.interface";
import BookCard from "./styles/card.style";
import StyledCardMedia from "./styles/cardmedia.style";
import StyledCardActions from "./styles/cardaction.style";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const BookCardPresenter = ({ title, description, ratingValue, onRatingChange }: BookPresenterProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <BookCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}

      isHovered={isHovered}
    >
      <StyledCardMedia
        isHovered={isHovered}
        image="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"
        title="Book Cover"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <StyledCardActions >
        <ControlledRating value={ratingValue} onChange={onRatingChange} />
        <Box>
          <MoreVertIcon />
        </Box>
      </StyledCardActions>

    </BookCard>
  );
};

export default BookCardPresenter;