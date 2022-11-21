import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams, Navigate} from "react-router-dom"
import { 
    FormView, 
    MainContent
} from "../views"

import { 
    CancelController, 
    UpdateController 
} from "./actions"
import { useInputs } from "./useInputs"



export const Edit = () => {
    const [ inputs, getValues, setValues] = useInputs()

    const {entities, status: {editing}} = useSelector(state => state.contacts)
    
    const {id} = useParams()
    const contact = entities[parseInt(id)]
    useEffect(() => {
        setValues(contact)
    // eslint-disable-next-line 
    }, [])
    
    

    const actions = {
        cancel: <CancelController/>,
        save: <UpdateController getContact={getValues} id={parseInt(id)}/>
    }

    if(editing !== "fulfilled")
        return  <MainContent>
                <FormView 
                    inputs={inputs} 
                    actions={actions}/>
            </MainContent>
    else {
        return <Navigate to="/contacts" replace />
    }
}