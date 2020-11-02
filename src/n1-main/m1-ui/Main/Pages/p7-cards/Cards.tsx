import React, {useEffect} from "react";
import { TableCards } from "../../../common/Table/TableCards";
import { useParams } from "react-router-dom";
import {useDispatch} from "react-redux";
import {getCards} from "../../../../m2-bll/reducers/cardsReducer";
;



export const Cards = () => {

    const {packId} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCards(packId))
    }, [dispatch])

    return (
       <>
           <h1>Cards</h1>
           <TableCards packId={packId}/>
       </>
        )



}