import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./Adapter"
import { Adders } from "./Add"
import { Browsers } from "./Browse"
import { Removers } from "./Remove"
import { Editors } from "./Edit"
import { Uploaders } from "./Uploaded"
import { Searchers } from "./Search"



const reducers = {
    statusRestored: (state, action) => {
        state.status[action.payload] = "idle"
    }
}
const extraReducers = {
    ...Adders,
    ...Browsers,
    ...Removers,
    ...Editors,
    ...Uploaders,
    ...Searchers
}

const slice = {
    name: "contacts",
    initialState,
    reducers,
    extraReducers
}

export const {reducer, actions} =  createSlice(slice)