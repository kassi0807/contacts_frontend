import { Fragment, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { FAB, AddAction, BrowseView, Navbar, MainContent} from "../views"
import { Item as ItemController} from "./Item"
import { Loader } from "./Loader"
import { ContactsActions } from "../models"

export const Browse = () => {
    const navigate = useNavigate()
    const goToForm = () => navigate("/contacts/add")
    
    const {ids, entities, status} = useSelector(state => state.contacts)
    const items = ids.map(id =>  <ItemController contact={entities[id]}/>)

    
    const dispatch = useDispatch()
    const {statusRestored} = ContactsActions

    useEffect(() => {
        Object.keys(status)
        .map(key => dispatch(statusRestored(key)))
    // eslint-disable-next-line
    }, [status])

    return <Fragment>
        <Navbar/>
        <MainContent>
            <BrowseView items={items}/>
            <Loader/>
        </MainContent>
        <FAB>
            <AddAction action={goToForm}/>
        </FAB>
    </Fragment>
}