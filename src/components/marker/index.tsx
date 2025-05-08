import type { MarkType } from "../../models";
import styles from './styles.module.css';

interface MarkerProps {
    marker: MarkType | undefined;
}

const Marker: React.FC<MarkerProps> = ({marker}) => {
    return (
        <div className={styles.marker}
            style={{background: `${marker ?? 'transparent'}`, border: `${marker ? '1px solid black' : '1px dashed black'}`}}>
        </div>
    )
};

export default Marker;