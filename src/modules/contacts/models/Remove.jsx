import { createAsyncThunk } from "@reduxjs/toolkit"
import { Adapter } from "./Adapter"
import axios from "axios"


 const removed = createAsyncThunk(
    "contacts/removed",
    async (id, {rejectWithValue}) => await axios.delete(`/contacts/${id}`)
        .then(_ => id)
        .catch(response => rejectWithValue(response.data))
)

const Removers = {
    [removed.fulfilled]: (state, action) => {
        state.status.removing = "fulfilled"
        Adapter.removeOne(state, action.payload)
    },
    [removed.rejected]: (state, action) => {
        state.status.removing = "rejected"
        state.errors = action.payload.errors
    },
    [removed.pending]: (state, _) => {
        state.status.removing = "pending"
        state.errors = {}
    }
}

export {removed, Removers}