import { useDispatch, useSelector} from "react-redux"
import { SaveAction } from "../../views"
import { contactEdited } from "../../models"

export const Update = ({getContact, id}) => {
    const dispatch = useDispatch()
    const {status: {editing} }= useSelector(state => state.contacts)

    const saveContact= () => {
        dispatch(contactEdited({id, ...getContact()}))
    }

    return <SaveAction action={saveContact} status={editing}/>
}