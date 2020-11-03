import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)

export const basicModal = (title: string) =>{
    {MySwal.fire(title)}
}