import { createContext, useState, type PropsWithChildren } from "react";
import type { GameSatus } from "../../models";

export const GameSatusContext = createContext<{
    gameStatus: GameSatus
    setGameStatus: (gameSatus: GameSatus) => void
}>({} as any);

export const GameStatusProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [ gameStatus, setGameStatus ] = useState<GameSatus>('IN_PROGRESS');
    return (
        <GameSatusContext.Provider value={{ gameStatus, setGameStatus}}>
            {children}
        </GameSatusContext.Provider>
    )
}