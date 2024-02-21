import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JsonDetailsObject } from "../../utils/constant/types";

interface ExportJsonDetails {
  openapi: string;
  info: {
    title: string;
    version: string;
    contact: {};
    license: {};
  };
  paths: {};
  externalDocs: {};
  security: [];
  servers: [];
  components: {
    links: {};
    callbacks: {};
    schemas: {};
  };
  tags: [];
}

const initialState: ExportJsonDetails = {
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
  tags: [],
};

const exportSlice = createSlice({
  name: "export",
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<JsonDetailsObject>) => {
      const { key, data: payloadData } = action.payload;
      return {
        ...state,
        [key]: payloadData,
      };
    },
    exportData: (state, action: PayloadAction<{}>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});
export const { updateData, exportData } = exportSlice.actions;
export const selectDetails = (state: { details: ExportJsonDetails }) =>
  state.details;
export default exportSlice.reducer;
