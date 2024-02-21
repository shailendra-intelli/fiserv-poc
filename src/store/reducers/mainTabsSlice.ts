import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type MainTabsState = any;
const initialState: MainTabsState = {
  paths: {},
};

export const intitialStatePathMethod = {
  operationId: "",
  summary: "",
  description: "",
  tags: [],
  parameters: [],
  responses: {
    default: {
      description: "Default response",
    },
  },
  externalDocs: {
    description: "",
    url: "",
  },
  requestBody: {
    required: false,
    description: "",
    content: {},
  },
  responseBody: {
    description: "",
    content: {},
  },
  security: [],
  links: {},
  callbacks: {},
};

const mainTabsSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    updateAllPaths: (state: any, action: PayloadAction<MainTabsState>) => {
      const { data } = action.payload;
      return {
        ...state,
        paths: {
          ...data,
        },
      };
    },
    addPath: (state: any, action: PayloadAction<MainTabsState>) => {
      const { pathName } = action.payload;
      return {
        ...state,
        paths: {
          ...state.paths,
          [pathName]: {
            get: {
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
            ...state.paths[pathName],
            [methodName]: {
              ...state.paths[pathName][methodName],
              [methodKey]: data,
            },
          },
        },
      };
    },
    deletePath: (state: any, action: PayloadAction<MainTabsState>) => {
      const { pathName } = action.payload;
      let newState = {
        ...state,
        paths: {
          ...state.paths,
        },
      };
      delete newState.paths[pathName];
      console.log(newState);
      return { ...newState };
    },
    addMethod: (state: any, action: PayloadAction<MainTabsState>) => {
      const { pathName, methodName } = action.payload;
      return {
        ...state,
        paths: {
          ...state.paths,
          [pathName]: {
            ...state.paths[pathName],
            [methodName]: {
              ...intitialStatePathMethod,
            },
          },
        },
      };
    },
    deleteMethod: (state: any, action: PayloadAction<MainTabsState>) => {
      const { pathName, methodName } = action.payload;
      let newState = {
        ...state,
        paths: {
          ...state.paths,
          [pathName]: {
            ...state.paths[pathName],
            [methodName]: {
              ...intitialStatePathMethod,
            },
          },
        },
      };
      delete newState.paths[pathName][methodName];

      return {
        ...newState,
      };
    },
    copyMethod: (state: any, action: PayloadAction<MainTabsState>) => {
      const { pathName, methodName, data } = action.payload;
      let newState = {
        ...state,
        paths: {
          ...state.paths,
          [pathName]: {
            ...state.paths[pathName],
            [methodName]: {
              ...data,
            },
          },
        },
      };
      return { ...newState };
    },
  },
});
export const {
  updateAllPaths,
  addPath,
  addMethod,
  updatePath,
  deletePath,
  deleteMethod,
  copyMethod,
} = mainTabsSlice.actions;
export const selectDetails = (state: { details: MainTabsState }) =>
  state.details.paths;

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
