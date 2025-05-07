import { createContext, useState, type PropsWithChildren } from "react";
import type { CounterTypes } from "../../models";

export const GuessesContext = createContext<{ 
    guesses: (CounterTypes | undefined)[][];
    updateGuess: (counter: CounterTypes, rowIndex: number, counterIndex: number) => void;
    currentEditableRow: number;
}>({} as any);

const blankGuess: (CounterTypes | undefined)[] = [undefined, undefined, undefined, undefined];

export const GuessesProvider: React.FC<PropsWithChildren> = ({children}) => {
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
console.log(guessColor, rowIndex, counterIndex);
        guesses.forEach((guess, i) => {
            const copyOfGuess = [...guess];
            
            if (rowIndex === i) {
                copyOfGuess[counterIndex] = guessColor;
            }

            newGuesses.push(copyOfGuess);
        });
        
        console.log(newGuesses);
        setGuesses(newGuesses);
    }

    return (
        <GuessesContext.Provider value={{guesses, updateGuess, currentEditableRow}}>{children}</GuessesContext.Provider>
    );
}