import { useRef } from "react"
import { useSelector} from "react-redux"
import { 
    NameView,
    AddressView, 
    CompanyView, 
    EmailView, 
    PhoneView
} from "../views"



export const useInputs = () => {
    const name = useRef({})
    const company = useRef({})
    const address= useRef({})
    const email = useRef({})
    const phone = useRef({})
    
    const getValues = () =>  ({
        name: name.current.value, 
        company: company.current.value, 
        address: address.current.value, 
        email: email.current.value, 
        phone: phone.current.value
    })
    const setValues = contact => {
        name.current.value = contact.name
        company.current.value = contact.company
        address.current.value = contact.address
        email.current.value = contact.email
        phone.current.value = contact.phone
    }


    const {errors} = useSelector(state => state.contacts)


    const inputs = {
                name: <NameView reference={name} errors={errors.name}/>,
                company: <CompanyView reference={company} errors={errors.company}/>,
                address: <AddressView reference={address} errors={errors.address}/>,
                email: <EmailView reference={email} errors={errors.email}/>,
                phone: <PhoneView reference={phone} errors={errors.phone}/>
            }
    return [ inputs, getValues, setValues]
}