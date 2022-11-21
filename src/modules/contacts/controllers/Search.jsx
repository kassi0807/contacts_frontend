import { Fragment, useRef } from "react"
import { useDispatch, useSelector} from "react-redux"
import { useNavigate} from "react-router-dom"
import { contactsSearched } from "../models"
import { SearchView, MainContent, BrowseView } from "../views"
import { Item as ItemController} from "./Item"


export const Search = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const reference = useRef("")
    
    const getRequest = () => ({"keyword": reference.current.value})
    const actions = {
        goback: () => navigate("/contacts"),
        submit: () => dispatch(contactsSearched(getRequest()))
    }
    const data = {
        reference
    }
    const {ids, entities} = useSelector(state => state.contacts.searchResults)
    const items = ids.map(id =>  <ItemController contact={entities[id]}/>)

    return  <Fragment>
        <SearchView actions={actions} data={data}/>
        <MainContent>
            <BrowseView items={items}/>
        </MainContent>
    </Fragment>
} 