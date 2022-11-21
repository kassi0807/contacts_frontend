import { createAsyncThunk } from "@reduxjs/toolkit"
import { Adapter } from "./Adapter"
import axios from "axios"

const uploaded = createAsyncThunk(
    "contacts/photos/uploded",
    async ({id, photo}, {rejectWithValue}) => 
    await axios.post(`/photos/contacts/${id}`, {photo}, 
    { headers: { 'Content-Type': 'multipart/form-data' }})
    .then(({data}) => ({id, data}))
    .catch(({response: {data}}) =>  rejectWithValue(data))
)

const Uploaders = {
    [uploaded.fulfilled]: (state, action) => {
        const {id, data} = action.payload
        Adapter.updateOne(state, {id, changes: data})
        state.status.uploading = "fulfilled"
    },
    [uploaded.rejected]: (state, {payload: {message, errors}}) => {
        state.errors = errors
        state.status.uploading = "rejected"
    },
    [uploaded.pending]: (state, _) => {
        state.status.uploading = "pending"
        state.errors = {}
    }
}

export {uploaded, Uploaders}