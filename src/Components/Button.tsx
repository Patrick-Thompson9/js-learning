import {ReactNode} from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick: (num: number) => void;
    color?: "primary" | "secondary" | "success" | "danger" | "white" | "muted" | "primary-outline" | "secondary-outline";
}

const Button = ({ children, onClick, color='primary'}: ButtonProps) => {

    return (
        <button className={'btn btn-'+ color} onClick={() => onClick(7)}>{children}</button>
    )
}

export default Button