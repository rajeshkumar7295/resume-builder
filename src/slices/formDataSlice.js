import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    personalInfo:{},
    education:[],
    skills:[],
    experience:[]
  }
    
  
};

const dataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    updatePersonalInfo: (state, action) => {
      state.formData.personalInfo = action.payload;
    },
    addSkill: (state, action) => {
      state.formData.skills.push(action.payload);
    },
    addEducation: (state, action) => {
      state.formData.education.push(action.payload);
    },
    addExperience: (state, action) => {
      state.formData.experience.push(action.payload);
    },
  },
});

export const { updatePersonalInfo, addSkill, addEducation, addExperience } = dataSlice.actions;
export default dataSlice.reducer;
