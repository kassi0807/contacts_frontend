import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Adapter } from "./Adapter"

 const browsed = createAsyncThunk(
    "contacts/browsed",
    async (page) => await axios.get(page ? `contacts?page=${page}`:'contacts')
        .then((response)=> {
            const {data, ...pagination} = response.data
            return {contacts: data, pagination}
        })
        .catch(error => error)
)

const Browsers = {
    [browsed.fulfilled]: (state, {payload: {contacts, pagination}}) => {
        Adapter.addMany(state, contacts)
        state.pagination = pagination
        state.status.browsing = "fulfilled"
    },
    [browsed.rejected]: (state, action) => {
        state.status.browsing = "rejected"
        state.errors = action.payload.errors
    },
    [browsed.pending]: (state, _) => {
        state.status.browsing = "pending"
        state.errors = {}
    }
}

export {browsed, Browsers}