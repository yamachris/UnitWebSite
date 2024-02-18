'use client'

import {useId, useState} from "react";

type QuestionAnswerType = {
    question: string;
    answer: string;
};

// Définir le type pour les props de QuestionAnswer
type QuestionAnswerProps = {
    questionAnswer: QuestionAnswerType;
};

export default function QuestionAnswer({questionAnswer}: QuestionAnswerProps) {

    const [isShown, setIsShown] = useState(false);
    const id = useId();

    const toggleContent = () => {
        setIsShown(!isShown);
    };

    return (
        <li>
            <div className="d-flex align-items-center">
                <i className="p-2 fa-regular fa-circle-question"></i>
                <a className="p-2" onClick={toggleContent}>{questionAnswer.question}</a>
                {!isShown && (<i style={{ cursor: 'pointer' }} onClick={toggleContent} className="ml-auto p-2 fa-solid fa-angle-down"></i>)}
                {isShown && (<i style={{ cursor: 'pointer' }} onClick={toggleContent} className="ml-auto p-2 fa-solid fa-angle-up"></i>)}
            </div>
            {isShown && (
                <div id={`faq-list-${id}`}>
                    <p>
                        {questionAnswer.answer}
                    </p>
                </div>
            )}
        </li>
    );
}
