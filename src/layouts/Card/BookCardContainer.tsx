'use client'
import React, { useState } from "react";
import BookCardPresenter from "./BookCardPresenter";
import { BookContainerProps } from "./card.interface";

const BookCardContainer = ({ title, description, backgroundColor }: BookContainerProps) => {
    const [ratingValue, setRatingValue] = useState(2);

    const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        setRatingValue(newValue || 0);
    };
    console.log(ratingValue);
    return (
        <BookCardPresenter
            title={title}
            description={description}
            ratingValue={ratingValue}
            onRatingChange={handleRatingChange}
        />
    );
};

export default BookCardContainer;