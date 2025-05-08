import type React from "react";
import styles from './styles.module.css';
import type { CounterTypes } from "../../models";

interface CounterProps {
    hidden: boolean;
    disabled: boolean;
    color: CounterTypes | undefined;
    highlighted: boolean;
    selected: (counter: CounterTypes | undefined) => void,
}

const Counter: React.FC<CounterProps> = ({ hidden = false, disabled, color, highlighted, selected }) => {
    const colorSelected = (_color: CounterTypes | undefined, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();

        if (disabled) {
            return;
        }

        selected(color);
    }

    return (
        <div className={`counter ${!disabled || hidden ? 'cursor-pointer': ''} ${styles.counter} flex justify-center items-center`}
            style={{background: `${color ?? 'transparent'}`, border: `${highlighted || hidden ? '1px solid black' : '1px solid #D3D3D3'}`}}
            onClick={e => colorSelected(color, e)}>{hidden && '?'}
        </div>
    )
};

export default Counter;