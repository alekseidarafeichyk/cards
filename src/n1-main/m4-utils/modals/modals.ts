import Swal from "sweetalert2";

export const basicModal = (title: string) =>{
    {Swal.fire(title)}
}

export const dialogModal = (title: string) => {
    Swal.fire({
        position: 'top-end',
        input: "text",
        icon: 'success',
        title: title,
        showConfirmButton: false,
        timer: 2000
    })
}