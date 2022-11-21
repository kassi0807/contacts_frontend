import { useSelector, useDispatch} from "react-redux"
import { SaveAction } from "../../views"
import { contactAdded } from "../../models" 



export const Save = ({getContact}) => {
    const dispatch = useDispatch()
    const {status: {adding}} = useSelector(state => state.contacts)


    const callback = () => {
        dispatch(contactAdded(getContact()))
    }

    return <SaveAction action={callback} status={adding}/>
}