import React from "react";
import Styles from "../../../common/Table/Table.module.css";

const card = [
    {
        id: 222,
        Question: 1,
        Answer: 2,
        Grade: 3,
        Update: 4,
        Url: 5
    },
    {
        id: 333,
        Question: 6,
        Answer: 7,
        Grade: 8,
        Update: 9,
        Url: 10
    },
]

export const Cards = () => {

    const renderRows = () => card.map(row =>
        <tr key={row.id}>
            <td>{row.Question}</td>
            <td>{row.Answer}</td>
            <td>{row.Grade}</td>
            <td>{row.Update}</td>
            <td>{row.Url}</td>
            <td>
                <button>delete</button>
            </td>
            <td>
                <button>update</button>
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
                        <button>Add</button>
                    </th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {renderRows()}
                </tbody>
            </table>
        </div>
    );
}