import { Rating } from "@mui/material";
import { RatingProps } from "./rating.interface";

const ControlledRating = ({ value, onChange }: RatingProps) => {
    return (
        <Rating
            size="medium"
            name="simple-controlled"
            value={value}
            onChange={onChange
            }
        />
    )
}

export default ControlledRating
