export interface BookPresenterProps {
    title?: string;
    description?: string;
    backgroundColor?: string;
    ratingValue: number;
    onRatingChange: (event: React.ChangeEvent<{}>, newValue: number | null) => void;
}

export interface BookContainerProps extends Partial<BookPresenterProps> { }