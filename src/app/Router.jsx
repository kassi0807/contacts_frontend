import { Provider } from "react-redux"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Store from "./Store"
import { 
    AddContact, 
    BrowseContacts, 
    EditContact,
    RemoveContact,
    ChangeContactPhoto,
    SearchContacts
} from "../modules/contacts/controllers"


const  Router = () =>
<Provider store={Store}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/contacts" replace/>}/>
            <Route path="/contacts/*" index element={<BrowseContacts/>}/>
            <Route path="/contacts/add" element={<AddContact/>}/>
            <Route path="/contacts/edit/:id" element={<EditContact/>}/>
            <Route path="/contacts/remove/:id" element={<RemoveContact/>}/>
            <Route path="/contacts/:id/change/photo" element={<ChangeContactPhoto/>}/>
            <Route path="/contacts/search" element={<SearchContacts/>} />
        </Routes>
    </BrowserRouter>
</Provider>

export default Router
