import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ApiValidatorDetails = any;
const initialState = {
  // generate collectionState
  isCreatingCollection: false,
  createdCollectionData: "",
  hasCreatedCollection: false,
  hasDownloadedCollection: null,
  // run collection state
  fileSelectForReport: "uploaded",
  uploadedCollectionData: "",
  isCreatingReport: false,
  reportDataAsHTMLString: "",
  hasViewedReport: null,
  hasDownloadedReport: null,
};

const apiValidatorSlice = createSlice({
  name: "apiValidator",
  initialState,
  reducers: {
    updateApiValidatorState: (state: any, action: PayloadAction<any>) => {
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateApiValidatorState } = apiValidatorSlice.actions;
export const selectDetails = (state: { details: ApiValidatorDetails }) =>
  state.details;
export default apiValidatorSlice.reducer;
