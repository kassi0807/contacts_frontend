import { useNavigate} from "react-router-dom"
import { ItemView } from "../views"
import { Photo } from "./Photo"

export const Item = ({contact}) => {
    const navigate = useNavigate()
    const actions = {
        edit: () => navigate(`/contacts/edit/${contact.id}`),
        remove: () => navigate(`/contacts/remove/${contact.id}`),
        changePhoto: () => navigate(`/contacts/${contact.id}/change/photo`)
    }

    return <ItemView 
                data={{...contact, photo: <Photo id={contact.id} photo={contact.photo}/>}} 
                actions={actions} />
}