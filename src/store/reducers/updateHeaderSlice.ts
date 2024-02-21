import { createSlice } from "@reduxjs/toolkit";

 interface JsonDetails {
    value:Object
 }

 const initialState: JsonDetails = {
    value: {
        "openapi": "3.0.0",
        "info": {
          "title": "Swagger Petstore",
          "version": "1.0.0",
          "contact": {},
          "license": {}
        },
        "paths": {},
        "externalDocs": {},
        "security": [],
        "servers": [],
        "components": {
          "links": {},
          "callbacks": {},
          "schemas": {}
        }
      }
 }

const updateHeaderSlice = createSlice({
    name: "updateHeader",
    initialState,
    reducers: {
        updateHeader: (state: JsonDetails, action) => {
            state.value = { ...state.value, ...action.payload };
          },
      
      }

})
export const {updateHeader} = updateHeaderSlice.actions
export const selectDetails = (state: {details:JsonDetails} )=>state.details.value;
export default updateHeaderSlice.reducer;
