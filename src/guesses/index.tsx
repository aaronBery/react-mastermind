import { useContext, useState } from "react";
import { GuessesContext } from "../context/Guesses/GuessesContext";
import Counter from "../components/counter";
import type { CounterTypes } from "../models";
import Picker from "../components/picker";
import { Button, Modal } from "@mui/material";
import { GameSatusContext } from "../context/GameSatus/GameSatusContext";


const Guesses = () => {
    const { guesses, updateGuess, currentEditableRow, submitGuess } = useContext(GuessesContext);
    const { gameStatus } = useContext(GameSatusContext);
    const [ showPicker, setShowPicker ] = useState<boolean>(false);
    const [ counterIndexEditing, setCounterIndexEditing ] = useState<number>(-1);

    const guessCounterSelected = (_counter: CounterTypes | undefined, counterIndex: number) => {
        setCounterIndexEditing(counterIndex);
        setShowPicker(true);
    }

    const pickerCounterSelected = (counter: CounterTypes | undefined) => {
        setShowPicker(false);

        if (!counter) {
            return;
        }

        updateGuess(counter, currentEditableRow, counterIndexEditing)
    }

    return (
        <>
            <ul className="mb-5">
                {guesses.map((guess, guessIndex) => 
                    <li className="mt-5" key={guessIndex}>
                        <ul className="flex flex-row h-[30px] items-center">
                            {guess.map((counter, counterIndex) => 
                                <li key={counterIndex} className="mr-5">
                                    <Counter hidden={false} color={counter} 
                                        highlighted={counterIndex === counterIndexEditing && currentEditableRow === guessIndex} 
                                        disabled={currentEditableRow !== guessIndex || gameStatus !== 'IN_PROGRESS'} selected={(counter) => guessCounterSelected(counter, counterIndex)}/>    
                                </li>
                            )}
                            <li><Button onClick={() => submitGuess()} disabled={currentEditableRow !== guessIndex}>Guess</Button></li>
                        </ul>
                    </li>
                )}
            </ul>
            <Modal open={showPicker} onClose={() => setShowPicker(false)}>
                <Picker selected={pickerCounterSelected} />
            </Modal>
        </>
    );
};

export default Guesses;