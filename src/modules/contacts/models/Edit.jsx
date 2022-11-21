import { createAsyncThunk } from "@reduxjs/toolkit"
import { Adapter } from "./Adapter"
import axios from "axios"

const edited = createAsyncThunk(
    "contacts/edited",
    async ({id, ...contact}, {rejectWithValue}) => 
    await axios.patch(`/contacts/${id}`, contact)
    .then(_ => {
        return {id,contact}
    })
    .catch(({response: {data}}) => {
        return rejectWithValue({...data, contact})
    })
)

const Editors= {
    [edited.fulfilled]: (state, action) => {
        const {id, contact} = action.payload
        state.status.editing = "fulfilled"
        Adapter.updateOne(state,
            {id, changes: contact})
    },
    [edited.rejected]: (state, action) => {
        state.status.editing = "rejected"
        state.errors = action.payload.errors
    },
    [edited.pending]: (state, _) => {
        state.status.editing = "pending"
        state.errors = {}
    }
}

export {edited, Editors}