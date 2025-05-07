import Box from "@mui/material/Box";
import { counters, type CounterTypes } from "../../models";
import Counter from "../counter";
interface PickerProps {
    selected: (colour: CounterTypes | undefined) => void
}

const Picker: React.FC<PickerProps> = ({ selected }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Box sx={style}>
            <ul className="grid grid-cols-3">
                {counters.map((counter, index) => 
                    <li key={index}>
                        <Counter color={counter} disabled={false} highlighted={false} selected={selected} />
                    </li>
                )}
            </ul>
        </Box>
    );
}

export default Picker;