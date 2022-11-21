import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

    // { headers: { 'Content-Type': 'multipart/form-data' }}

 const added = createAsyncThunk(
    "contacts/added",
    async (contact, {rejectWithValue}) => 
    await axios.post("/contacts", contact)
    .then(({data}) => data)
    .catch(({response: {data}}) => {
        return rejectWithValue({...data, contact})
    })
)

const Adders = {
    [added.fulfilled]: (state, _) => {
        state.status.adding = "fulfilled"
    },
    [added.rejected]: (state, {payload: {message, errors, draft}}) => {
        state.errors = errors
        state.draft = draft
        state.status.adding = "rejected"
    },
    [added.pending]: (state, _) => {
        state.status.adding = "pending"
        state.errors = {}
    }
}

export {added, Adders}