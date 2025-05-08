import { useContext } from "react";
import { GuessesContext } from "../context/Guesses/GuessesContext";

const GameSatus: React.FC = () => {
    const { gameStatus } = useContext(GuessesContext);
    return (
        <>
            { gameStatus === 'FAILED' &&  <p>GAME OVER</p>}
            { gameStatus === 'SUCCESS' &&  <p>WINNER!</p> }
            { gameStatus === 'IN_PROGRESS' &&  <p>Keep going!</p> }
        </>
    )
};

export default GameSatus;