import { useContext } from "react";
import Counter from "../components/counter";
import { AnswerContext } from "../context/Answers/AnswersContext";
import { GameSatusContext } from "../context/GameSatus/GameSatusContext";

function Answer() {
    const { answers } = useContext(AnswerContext);
    const { gameStatus } = useContext(GameSatusContext);

    if (gameStatus === 'IN_PROGRESS') {
        return (
            <ul className="flex flex-row">
                { answers.map((_answer, index) => 
                    <li key={index} className="mr-5">
                        <Counter color={undefined} hidden={true} highlighted={false} disabled={true} selected={() => {}}/>
                    </li>
                    )
                }
            </ul>
        );
    }

    return (
        <ul className="flex flex-row">
            { answers.map((answer, index) => 
                <li key={index} className="mr-5">
                    <Counter color={answer} highlighted={false} disabled={true} hidden={false} selected={() => {}} />
                </li>
                )
            }
        </ul>
    );
}

export default Answer;