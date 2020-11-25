import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import {Input} from "../../m1-ui/common/Input/Input";
import {addingPackTC} from "../../m2-bll/reducers/packsReducer";
import React from "react";

const MySwal = withReactContent(Swal)

export const Modal = (title: string, successTittle: string, dispatch: any) =>{
    MySwal.fire({
        title: title,
        html: <Input id={'packName'} placeholder={'Enter pack name'}/> ,
        showCancelButton: true,
        confirmButtonText: `Save`,
        confirmButtonColor: '#26c17e',
        preConfirm: () => {
            return {
                packName: (document.getElementById('packName') as HTMLInputElement).value
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            dispatch(addingPackTC(result.value!.packName))
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: successTittle,
                showConfirmButton: false,
                timer: 1000
            })
        }
    })
}

export const modalSuccessNewPassword = (info : string) => {
    Swal.fire({
        title: info,
        text: 'You will be redirected to the login page',
        icon: 'success',
        confirmButtonText: 'Ok'
    })
}