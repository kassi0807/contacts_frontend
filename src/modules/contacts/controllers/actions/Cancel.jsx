import { CancelAction } from "../../views"
import { useNavigate} from "react-router-dom"


export const Cancel = () => {
    const navigate = useNavigate()
    const callback = () => navigate("/contacts")
    
    return <CancelAction action={callback}/>
} 