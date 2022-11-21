import { configureStore } from "@reduxjs/toolkit"
import { ContactsReducer } from "../modules/contacts/models"


const Store = configureStore({
    reducer: {
        contacts: ContactsReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
})


export default Store