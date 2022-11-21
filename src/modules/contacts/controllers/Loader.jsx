import { useEffect } from "react"
import { useSelector, useDispatch} from "react-redux"
import { contactsBrowsed} from "../models"
import { LoaderAction } from "../views"

export const Loader = () => {
    const dispatch = useDispatch()
    const { pagination: {current_page, last_page}} = useSelector(state => state.contacts)


    useEffect(() => {
        dispatch(contactsBrowsed(null))
    }, [dispatch])
    const nextPage = () => current_page < last_page ? 
        dispatch(contactsBrowsed(current_page + 1)) : null
    if(current_page < last_page)
        return <LoaderAction next={nextPage}/>
    else <></>
}