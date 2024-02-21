import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ServerState = any;
const initialState: ServerState = {
  servers: [{}],
};

const serversSlice = createSlice({
  name: "servers",
  initialState,
  reducers: {
    addServer: (state: any, action: PayloadAction<ServerState>) => {
      return {
        ...state,
        servers: action.payload,
      };
    },
  },
});
export const { addServer } = serversSlice.actions;
export const selectDetails = (state: { details: ServerState }) =>
  state.details.servers;
export default serversSlice.reducer;
