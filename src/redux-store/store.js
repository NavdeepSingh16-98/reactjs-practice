import { legacy_createStore , legacy_createStore } from "redux"
import {dataReducer} from "./reducer/reducer"

//createStoreHook

const store = legacy_createStore({
    data:dataReducer
})

module.exports = {
    store
}