import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type MainTabsState = any;
const initialState: MainTabsState = {
  paths: {},
};

const intitialStatePathMethod = {
  summary: "",
  description: "",
  parameters: [],
  operationId: "",
  responses: {
    default: {
      description: "Default response",
    },
  },
  requestBody: {
    required: false,
    description: "",
    content: {},
  },
  security: {},
  links: {},
  callbacks: {},
};
const mainTabsSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    addMethod: (state: any, action: PayloadAction<MainTabsState>) => {
      const { pathName, methodName } = action.payload;
      return {
        ...state,
        paths: {
          [pathName]: {
            ...state.paths[pathName],
            [methodName]: {
              ...intitialStatePathMethod,
            },
          },
        },
      };
    },
    updatePath: (state: any, action: PayloadAction<MainTabsState>) => {
      const { pathName, methodName, methodKey, data } = action.payload;
      return {
        ...state,
        paths: {
          ...state.paths,
          [pathName]: {
            [methodName]: {
              ...state.paths[pathName][methodName],
              [methodKey]: data,
            },
          },
        },
      };
    },
  },
});
export const { addMethod, updatePath } = mainTabsSlice.actions;
export const selectDetails = (state: { details: MainTabsState }) =>
  state.details.paths;
export { intitialStatePathMethod };
export default mainTabsSlice.reducer;
export const VALID_METHODS = [
  "get",
  "post",
  "put",
  "patch",
  "delete",
  "options",
  "trace",
  "head",
];
export const DEFAULT_PARAM_OBJ = {
  name: "newParam",
  description: "",
  in: "query",
  required: false,
  schema: {
    type: "string",
    format: "date",
    enum: [],
  },
  default: "Default",
  minRequired: false,
  minLength: 0,
  maxRequired: false,
  maxLength: 10,
  multiOf: 0,
  uniqueItems: false,
  pattern: "Default Pattern",
};

export const DEFAULT_Callback_OBJ = {
  name: "newCallback",
  expression: "urlExpression",
};
