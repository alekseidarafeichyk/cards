import * as React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Table.module.css'

type Props = {
    data: Array<any>
}

export const Table = ({data}: Props) => {
    const renderRows = () => data.map(row =>
        <tr>
            <td>{row.name}</td>
            <td>{row.cardsCount}</td>
            <td>{row.update}</td>
            <td>{row.url}</td>
            <td><button>delete</button></td>
            <td><button>update</button></td>
            <td><Link to={"#"}>cards</Link></td>
        </tr>
    )
    return (
        <table className={Styles.table}>
            <thead>
            <tr>
                <th>Name</th>
                <th>
                    CardsCount
                    <button className={Styles.arrow}>/\</button>
                    <button className={Styles.arrow}>\/</button>
                </th>
                <th>Update</th>
                <th>Url</th>
                <th>
                    <button>add</button>
                </th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {renderRows()}
            </tbody>
        </table>
    );
};