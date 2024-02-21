import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JsonDetailsObject } from "../../utils/constant/types";

interface tags {
    tags:any
}

const initialState: tags = {
     tags:[{
         "name":"newName",
         "description": "",
         "externalDocs": {
            "description": "",
            "url": ""
        }
    }]
}

const tagsSlice = createSlice({
    name:"tags",
    initialState,
    reducers: {
        tagsData: (state, action: PayloadAction<JsonDetailsObject>) => {
            const { key, data: payloadData } = action.payload;
            return {
              ...state,
              [key]: payloadData,
            };
          },
      },
})
export const { tagsData } = tagsSlice.actions;
export const selectDetails = (state: { details: tags }) =>
  state.details.tags;
export default tagsSlice.reducer;