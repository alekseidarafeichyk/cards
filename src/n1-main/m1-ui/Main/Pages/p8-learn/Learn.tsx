import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {cardsType, getCards, InitialStateType, sendGradeTC} from "../../../../m2-bll/reducers/cardsReducer";
import {RootState} from "../../../../m2-bll/store";
import {Button} from "../../../common/Button/Button";
import style from "./Learn.module.css"

const grades = ['не знал', 'забыл', 'долго думал', 'перепутал', 'знал'];

const getCard = (cards: Array<cardsType>) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    console.log('test: ', sum, rand, res)
    console.log(cards[res.id + 1])
    return cards[res.id + 1];
}

export const LearnPage = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const {cards} = useSelector<RootState, InitialStateType>(state => state.cards);
    const [first, setFirst] = useState<boolean>(true);
    const [disable, setDisable] = useState(false)
    const {packId} = useParams();

    const [card, setCard] = useState<cardsType>({
        _id: 'fake',
        cardsPack_id: '',
        user_id: "",
        __v: 0,

        answer: 'answer fake',
        question: 'loading....',
        grade: 0,
        shots: 0,

        type: '',
        rating: 0,


        created: '',
        updated: '',
    });

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('LearnContainer useEffect');
        console.log('cards', cards)

        if (first) {
            dispatch(getCards(packId));
            setFirst(false);
        }

        if (cards.length > 1) setCard(getCard(cards));

        return () => {
            console.log('LearnContainer useEffect off');
        }
    }, [dispatch, packId, cards, first]);

    const onNext = () => {
        setIsChecked(false);
        setDisable(false);

        if (cards.length > 0) {
            setCard(getCard(cards));
        } else {

        }
    }

    const sendRatingOnClick = async (rating: number) => {
        await dispatch(sendGradeTC(rating, card._id))
        setDisable(true)
        // SendModal("Оценка отправлена")
    }

    return (
        <div className={style.AllLearn}>
            <div className={style.question}>
                <div>Question:</div>
                <div>{card.question}</div>
                <div>
                    <Button onClick={() => setIsChecked(true)} name={"check"}/>
                </div>
            </div>

            {isChecked && (
                <div className={style.answer}>
                    <div>{card.answer}</div>

                    {grades.map((g, i) => (
                        <Button key={'grade-' + i} onClick={() => {
                            sendRatingOnClick(i)
                        }} name={`${g}(${++i})`} disabled={disable}/>
                    ))}

                    <div><Button onClick={onNext} name={"next"} disabled={!disable}/></div>
                </div>
            )}
        </div>
    );
};