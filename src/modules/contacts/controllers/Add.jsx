import { useSelector} from "react-redux"
import { Navigate } from "react-router-dom"
import { 
    FormView, 
    MainContent
} from "../views"
import { 
    CancelController, 
    SaveController 
} from "./actions"
import { useInputs } from "./useInputs"


export const Add = () => {

    const [inputs, getValues] = useInputs()
    const actions = {
        cancel: <CancelController/>,
        save: <SaveController getContact={getValues}/>
    }


    const {status:{adding}} = useSelector(state => state.contacts)
    if(adding !== "fulfilled")
        return  <MainContent>
                <FormView 
                    inputs={inputs} 
                    actions={actions}/>
            </MainContent>
    else {
        return <Navigate to="/contacts" replace />
    }
}