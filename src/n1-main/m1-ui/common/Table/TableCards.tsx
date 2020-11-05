import React from 'react';
import Styles from './Table.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../m2-bll/store';
import {addingCardTC, deleteCardTC, updateCardTC} from "../../../m2-bll/reducers/cardsReducer";
import {Input} from "../Input/Input";
import withReactContent from 'sweetalert2-react-content'
import Swal from "sweetalert2";
const MySwal = withReactContent(Swal)


type PropsType = {
    packId: string
}

export const TableCards = React.memo((props:PropsType) => {


    const cards = useSelector(((state:RootState) => state.cards.cards))
    const dispatch = useDispatch()


    const onClickAddCard = () => {
        MySwal.fire({
            title: 'Add new Card',
            html:
                <>
                    <Input id={'swal-input1'} placeholder={'Enter your question'}/>
                    <Input id={'swal-input2'} placeholder={'Enter your answer'}/>
                </>,
            showCancelButton: true,
            confirmButtonText: `Save`,
            confirmButtonColor: '#26c17e',
            preConfirm: () => {
                return {
                    question: (document.getElementById('swal-input1') as HTMLInputElement).value,
                    answer: (document.getElementById('swal-input2') as HTMLInputElement).value
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(addingCardTC(props.packId, result.value!.question, result.value!.answer))
                Swal.fire('Card was created', '', 'success')
            }
        })
    }

    const onClickDeleteCard = (id: string | null) => {
        dispatch(deleteCardTC(id))
    }

    const onClickUpdateCard = (id: string | null, question:string, answer:string) => {
        MySwal.fire({
            title: 'Update your Card',
            html:
                <>
                    <Input id={'swal-input1'} placeholder={question}/>
                    <Input id={'swal-input2'}  placeholder={answer}/>
                </>,
            showCancelButton: true,
            confirmButtonText: `Save`,
            confirmButtonColor: '#26c17e',
            preConfirm: () => {
                return {
                    question: (document.getElementById('swal-input1') as HTMLInputElement).value,
                    answer: (document.getElementById('swal-input2') as HTMLInputElement).value
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(updateCardTC(id, result.value!.question, result.value!.answer))
                Swal.fire('Card was created', '', 'success')
            }
        })

    }


    const renderRows = () => cards.map(row =>
        <tr key={row._id}>
            <td>{row.question}</td>
            <td>{row.answer}</td>
            <td>{row.grade}</td>
            <td>{row.updated}</td>
            <td>''</td>
            <td></td>
            <td>
                <button onClick = {()=> onClickDeleteCard(row._id)}>delete</button>
            </td>
            <td>
                <button onClick = {()=> onClickUpdateCard(row._id, row.question!, row.answer!)}>update</button>
            </td>
        </tr>
    )

    return (
        <div>
            <table className={Styles.table}>
                <thead>
                <tr>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Grade</th>
                    <th>Update</th>
                    <th>Url</th>
                    <th>
                        <button onClick={()=> onClickAddCard()}>Add</button>
                    </th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {renderRows()}
                </tbody>
            </table>
        </div>
    );
})