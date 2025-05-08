import React, { createContext, useState, type PropsWithChildren } from "react";
import type { MarkType } from "../../models";

export const MarksContext = createContext<{
    marks: (MarkType | undefined)[][],
    handleSetMarks: (markToAdd: (MarkType | undefined)[], rowIndex: number) => void,
}>({} as any);

export const MarksProvider: React.FC<PropsWithChildren> = ({children}) => {
    const blankMarkRow = [undefined, undefined, undefined, undefined];
    const [ marks, setMarks ] = useState<(MarkType | undefined)[][]>([
        [...blankMarkRow],
        [...blankMarkRow],
        [...blankMarkRow],
        [...blankMarkRow],
        [...blankMarkRow],
        [...blankMarkRow],
    ]);

    const handleSetMarks = (markToAdd: (MarkType | undefined)[], rowIndex: number) => {
        const newMarks: (MarkType | undefined)[][] = [];

        marks.forEach((mark, i) => {
            let copyOfMark = [...mark];
            
            if (rowIndex === i) {
                copyOfMark = [...markToAdd];
            }

            newMarks.push(copyOfMark);
        });

        setMarks(newMarks);
    }
    
    return (
        <MarksContext.Provider value={{marks, handleSetMarks }}>{children}</MarksContext.Provider>
    );
}