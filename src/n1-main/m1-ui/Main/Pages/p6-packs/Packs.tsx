import React from 'react';
import {Table} from "../../../common/Table/Table";

const data = [
    {
        id: 1,
        name: 'update new pack 2.00',
        cardsCount: 2,
        update: '10-25T15:54'
    },

    {
        id: 2,
        name: 'update new pack 2.00',
        cardsCount: 2,
        update: '10-25T15:54'
    },

    {
        id: 3,
        name: 'update new pack 2.00',
        cardsCount: 2,
        update: '10-25T15:54'
    }
]

export const Packs = () => {
    return (
        <>
            <h1>Packs</h1>
            <Table data={data} />
        </>
    )


}