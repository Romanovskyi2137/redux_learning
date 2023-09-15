import { addManyClientsAction } from "../store/clientReducer"

export const fetchClients = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => dispatch(addManyClientsAction(data)))
    }
}