import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import React from "react";
import {Input} from "../../m1-ui/common/Input/Input";


const MySwal = withReactContent(Swal)

export const basicModal = (title: string) =>{
    {MySwal.fire(title)}
}

export const dialogModal = (title: string) => {
    MySwal.fire({
        position: 'top-end',
        icon: 'success',
        title: <p>{title}</p>,
        html: <Input/>,
        showConfirmButton: false,
        timer: 2000
    })
}