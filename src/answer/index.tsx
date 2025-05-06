import { useContext } from "react";
import Counter from "../components/counter";
import { AnswerContext } from "../context/AnswersContext";

function Answer() {
    const { answers } = useContext(AnswerContext);

    return (
        <ul className="grid grid-cols-4">
            { answers.map((answer, index) => 
                <li key={index}>
                    <Counter color={answer} highlighted={false} disabled={true} />
                </li>
                )
            }
        </ul>
    );
}

export default Answer;