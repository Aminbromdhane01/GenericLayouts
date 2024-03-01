export interface RatingProps {
    value: number;
    onChange: (event: React.ChangeEvent<{}>, newValue: number | null) => void;
}