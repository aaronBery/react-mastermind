import { createContext, useContext, useState, type PropsWithChildren } from "react";
import type { CounterTypes, GameSatus, MarkType } from "../../models";
import { AnswerContext } from "../Answers/AnswersContext";
import { MarksContext } from "../Marks/MarksContext";
import { GameSatusContext } from "../GameSatus/GameSatusContext";

export const GuessesContext = createContext<{ 
    guesses: (CounterTypes | undefined)[][];
    updateGuess: (counter: CounterTypes, rowIndex: number, counterIndex: number) => void;
    currentEditableRow: number;
    submitGuess: () => void,
    gameStatus: GameSatus
}>({} as any);

const blankGuess: (CounterTypes | undefined)[] = [undefined, undefined, undefined, undefined];

export const GuessesProvider: React.FC<PropsWithChildren> = ({children}) => {
    const { answers } = useContext(AnswerContext);
    const { handleSetMarks } = useContext(MarksContext);
    const { gameStatus, setGameStatus } = useContext(GameSatusContext);
    const [ guesses, setGuesses ] = useState<(CounterTypes | undefined)[][]>([
        [...blankGuess],
        [...blankGuess],
        [...blankGuess],
        [...blankGuess],
        [...blankGuess],
        [...blankGuess],
    ]);

    const [ currentEditableRow, setCurrentEditableRow ] = useState(0);

    const updateGuess = (guessColor: CounterTypes, rowIndex: number, counterIndex: number) => {
        const newGuesses: (CounterTypes | undefined)[][] = [];

        guesses.forEach((guess, i) => {
            const copyOfGuess = [...guess];
            
            if (rowIndex === i) {
                copyOfGuess[counterIndex] = guessColor;
            }

            newGuesses.push(copyOfGuess);
        });

        setGuesses(newGuesses);
    }
    
    const isAllMarksBlack = (marks: (MarkType | undefined)[]) => {
        return marks.every(mark => {
            return mark === 'black'
        })
    };

    const submitGuess = () => {
        // get current row marks
        const currentEditableRowMarks = getUpdatedMarks();

        // Update marks for current row
        handleSetMarks(currentEditableRowMarks, currentEditableRow);

        if (isAllMarksBlack(currentEditableRowMarks)) {
            setGameStatus('SUCCESS');
            return;
        }

        if ((currentEditableRow + 1) === guesses.length) {
            setGameStatus('FAILED');
        }

        // move to next row
        setCurrentEditableRow(currentEditableRow + 1)
    };


    const getUpdatedMarks = () => {
        const currentGuesses = guesses[currentEditableRow];

        const marks: (MarkType | undefined)[] = Array(4).fill(undefined);
        const blackMarkedIndexes: number[] = [];
        const whiteAssignedIndexes: number[] = [];

        // First pass: mark black for exact matches
        currentGuesses.forEach((guess, index) => {
            if (guess === answers[index]) {
                marks[index] = 'black';
                blackMarkedIndexes.push(index);
            }
        });

        currentGuesses.forEach((guess, index) => {
            const selectedCounterMatchedInWrongPositionIndex = answers.findIndex((selectedCounter, selectedCounterIndex) => 
                selectedCounter === guess && !blackMarkedIndexes.includes(selectedCounterIndex) && !blackMarkedIndexes.includes(index)
                && !whiteAssignedIndexes.includes(selectedCounterIndex)) 

            if (selectedCounterMatchedInWrongPositionIndex > -1) {
                marks[index] = 'white';
                whiteAssignedIndexes.push(selectedCounterMatchedInWrongPositionIndex);
            }
        });

        return marks;
    }


    return (
        <GuessesContext.Provider value={{guesses, updateGuess, currentEditableRow, submitGuess, gameStatus}}>{children}</GuessesContext.Provider>
    );
}