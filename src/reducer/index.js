import { combineReducers } from "@reduxjs/toolkit";
import formDataSlice from "../slices/formDataSlice";
  const rootReducers = combineReducers({
        formData:formDataSlice
  })

  export default rootReducers