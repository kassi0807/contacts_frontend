import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Adapter } from "./Adapter"

const searched= createAsyncThunk(
    "contacts/searched",
    async (request) => await axios.post("/contacts/search", request)
        .then(response => response.data)
        .catch(error => error.data)
)

const Searchers = {
    [searched.fulfilled]: (state, action) => {
        Adapter.removeAll(state.searchResults)
        Adapter.addMany(state.searchResults, action.payload)
        state.searchResults.status = "fulfilled"
    },
    [searched.rejected]: (state, action) => {
        state.searchResults.status = "rejected"
        state.searchResults.errors = action.payload.errors
    },
    [searched.pending]: (state, _) => {
        state.searchResults.status = "pending"
        state.searchResults.errors = {}
    }
}

export {searched, Searchers}