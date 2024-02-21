import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JsonDetailsObject } from "../../utils/constant/types";

interface schemas {
  schemas:any
}

const initialState: schemas = {
  schemas: {
   "NewSchema": {
     "type": "object"
}
  }
}
const schemasSlice = createSlice({
    name:"schemas", 
    initialState,
    reducers: {
        schemasData: (state, action: PayloadAction<{}>) => {
            return {
              ...state,
              schemas: action.payload
            };
          },
      },
})
export const { schemasData } = schemasSlice.actions;
export const selectDetails = (state: { details: schemas }) =>
  state.details.schemas;
export default schemasSlice.reducer;