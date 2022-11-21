import { useDispatch, useSelector} from "react-redux"
import { useParams, useNavigate} from "react-router-dom"
import { contactRemoved} from "../models"
import { ConfirmView, MainContent, ConfirmAction, CancelAction} from "../views"

export const Remove = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {status: {removing}} = useSelector(state => state.contacts)

    const browse =  () => navigate("/contacts")
    const confirm = () => {
        dispatch(contactRemoved(parseInt(id)))
        .then(() => browse())
    }

    const actions = {
        cancel: <CancelAction action={browse}/>, 
        confirm: <ConfirmAction action={confirm} status={removing}/>
    }

    const data = {
        title: "remove contact",
        message: "you are about to remove a contact, continue ?"
    }

    return <MainContent>
            <ConfirmView data={data} actions={actions}/>
        </MainContent>
}