import { useContext } from "react";
import { MarksContext } from "../context/Marks/MarksContext";
import Marker from "../components/marker";

const Marks = () => {
    const { marks } = useContext(MarksContext);
    return (
        <>
            {marks.map((markRow, markRowIndex) => 
                <ul className="flex flex-row mt-5 h-[30px] items-center" key={markRowIndex}>
                    {markRow.map((marker, markerIndex) => 
                        <li className="mr-5" key={markerIndex}><Marker marker={marker} /></li>
                    )}
                </ul>
            )}
        </>
    );
}

export default Marks;