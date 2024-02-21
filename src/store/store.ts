import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import uploadReducer from "./reducers/uploadSlice";
import showToastReducer from "./reducers/showToastSlice";
import updateHeaderReducer from "./reducers/updateHeaderSlice";
import exportReducer from "./reducers/exportSlice";
import serversReducer from "./reducers/serversSlice";
import mainTabsReducer from "./reducers/mainTabsSlice";
import apiValidatorReducer from "./reducers/apiValidatorSlice";
import tagsReducere from "./reducers/tagsSlice";
import schemasReducer from "./reducers/schemasSlice";
 
export const store = configureStore({
  reducer: {
    upload: uploadReducer,
    toast: showToastReducer,
    updateHeader: updateHeaderReducer,
    export: exportReducer,
    servers: serversReducer,
    main: mainTabsReducer,
    apiValidator: apiValidatorReducer,
    tags: tagsReducere,
    schema: schemasReducer,
  },
});

console.log("store", store.getState());

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
