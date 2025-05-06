import type { CounterTypes } from '../models';
import { counters } from '../models';

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