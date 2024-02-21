import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToastDetails {
    toastObj: Object
}

const initialState:ToastDetails =  {
      toastObj: {
        message:"",
        bgColor:"",
        isVisible:false
      }
}

const toastSlice = createSlice({
    name:"toast",
    initialState,
    reducers: {
        toastFile: (state, action:PayloadAction<ToastDetails>)=> {
            return {
                ...state,
                toastObj: action.payload
            }
        }
      }
})
export const {toastFile} = toastSlice.actions
export const selectDetails = (state: {toast:ToastDetails} )=>state.toast.toastObj;
export default toastSlice.reducer;