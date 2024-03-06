export interface InputProps {
    type: string;
    value: string;
    name: string;
    label: string;
    handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error: string;
    placeholder: string;
    endAdornment?: React.ReactNode
}