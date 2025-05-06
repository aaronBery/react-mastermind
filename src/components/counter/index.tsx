import type React from "react";
import styles from './styles.module.css';
import type { CounterTypes } from "../../models";

interface CounterProps {
    disabled: boolean;
    color: CounterTypes | undefined;
    highlighted: boolean;
}

const Counter: React.FC<CounterProps> = ({ disabled, color, highlighted }) => {
    const colorSelected = (_color: CounterTypes | undefined, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        e.preventDefault();
    }

    return (
        <div className={`counter ${!disabled ? 'cursor-pointer': ''} ${styles.counter}`}
            style={{background: `${color ?? 'transparent'}`, border: `${highlighted ? '1px solid black' : '1px solid #D3D3D3'}`}}
            onClick={e => colorSelected(color, e)}>
        </div>
    )
};

export default Counter;