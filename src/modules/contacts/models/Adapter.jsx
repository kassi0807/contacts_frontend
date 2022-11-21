import {createEntityAdapter} from "@reduxjs/toolkit"


const Adapter = createEntityAdapter()
const initialState = Adapter.getInitialState({
    status: {
        browsing: "idle",
        reading: "idle",
        editing: "idle",
        adding: "idle",
        removing: "idle",
        uploading: "idle"
    },
    errors: {},
    draft: {},
    pagination: {},
    searchResults: Adapter.getInitialState({
        status: "idle",
        errors: {}
    })
})

export {Adapter, initialState}