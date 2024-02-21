import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JsonDetailsObject } from "../../utils/constant/types";

type JsonDetails = Record<string,any>;

const initialState: JsonDetails = {
    
      openapi: "3.0.0",
      info: {
        title: "Swagger Petstore",
        version: "1.0.0",
        contact: {},
        license: {},
      },
      paths: {},
      externalDocs: {},
      security: [],
      servers: [],
      components: {
        links: {},
        callbacks: {},
        schemas: {},
      },
}

const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    uploadFile: (state, action: PayloadAction<JsonDetails>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    updateData: (state, action: PayloadAction<JsonDetailsObject>) => {
      const { key, data: payloadData } = action.payload;
      return {
          ...state,
          [key]: payloadData,
      };
    },
  },
});
export const { uploadFile, updateData } = uploadSlice.actions;
export const selectDetails = (state: { details: JsonDetails }) =>
  state.details.value;
export default uploadSlice.reducer;
