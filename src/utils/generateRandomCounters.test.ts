import { describe, it, expect } from 'vitest';
import { generateRandomCounters } from './generateRandomCounters';
import { counters } from '../models';

describe('generateRandomCounters', () => {
    it('should generate an array of 4 counters by default', () => {
        const result = generateRandomCounters();
        expect(result).toHaveLength(4);
    });

    it('should generate an array of specified length', () => {
        const length = 6;
        const result = generateRandomCounters(length);
        expect(result).toHaveLength(length);
    });

    it('should only contain valid counter values', () => {
        const result = generateRandomCounters();
        result.forEach(counter => {
            expect(counters).toContain(counter);
        });
    });

    it('should generate different sequences on multiple calls', () => {
        const result1 = generateRandomCounters();
        const result2 = generateRandomCounters();
        
        // Note: This test might occasionally fail due to the random nature of the function
        // If it fails, it means we got the same sequence twice by chance
        expect(result1).not.toEqual(result2);
    });
}); 