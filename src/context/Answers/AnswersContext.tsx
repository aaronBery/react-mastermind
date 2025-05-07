import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import { type CounterTypes, counters } from '../../models';



export const AnswerContext = createContext<{ answers: (CounterTypes | undefined)[], setAnswersHandler: (newAnswers: (CounterTypes | undefined)[]) => void }>({} as any);

export const AnswerProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [ answers, setAnswers ] = useState<(CounterTypes | undefined)[]>([
        undefined,
        undefined,
        undefined,
        undefined,
    ]);

    useEffect(() => {
        setAnswersHandler(generateRandomCounters());
    }, []);

    const setAnswersHandler = (newAnswers: (CounterTypes | undefined)[]) => {
        setAnswers(newAnswers);
    };

    return (
        <AnswerContext.Provider value={{answers, setAnswersHandler}}>{children}</AnswerContext.Provider>
    );
}


/**
 * Generates an array of random counters for the Mastermind game
 * @param length The number of counters to generate (default: 4)
 * @returns An array of random Counter values
 */
export const generateRandomCounters = (length: number = 4): CounterTypes[] => {
    const result: CounterTypes[] = [];
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * counters.length);
        result.push(counters[randomIndex]);
    }
    
    return result;
};