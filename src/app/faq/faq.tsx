import QuestionAnswer from "@/app/faq/question-answer";

export type QuestionAnswerType = {
    question: string;
    answer: string;
};

export function Faq() {
    const questionsAnswers: QuestionAnswerType[] = [
        {
            question: 'Feugiat scelerisque varius morbi enim nunc? ',
            answer: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id\n' +
                'interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus\n' +
                'scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper\n' +
                'dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
        },
        {
            question: 'Feugiat scelerisque varius morbi enim nunc? ',
            answer: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi.'
        },
        {
            question: 'Feugiat scelerisque varius morbi enim nunc? ',
            answer: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi.'
        },
        {
            question: 'Feugiat scelerisque varius morbi enim nunc? ',
            answer: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi.'
        },
        {
            question: 'Feugiat scelerisque varius morbi enim nunc? ',
            answer: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi.'
        }

    ];

    return (
        <section id="faq" className="faq section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Frequently Asked Questions</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
                        quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
                        impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="faq-list">
                    <ul>
                        {questionsAnswers.map((qa, index) => (
                            <QuestionAnswer key={`qa-${index}`} questionAnswer={qa} />
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}