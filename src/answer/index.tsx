import { useContext } from "react";
import Counter from "../components/counter";
import { AnswerContext } from "../context/Answers/AnswersContext";

function Answer() {
    const { answers } = useContext(AnswerContext);

    return (
        <ul className="flex flex-row">
            { answers.map((answer, index) => 
                <li key={index} className="mr-5">
                    <Counter color={answer} highlighted={false} disabled={true} selected={() => {}} />
                </li>
                )
            }
        </ul>
    );
}

export default Answer;