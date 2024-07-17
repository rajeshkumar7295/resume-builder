import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../common/Button';
import { useDispatch } from 'react-redux';
import { addEducation } from '../../../../slices/formDataSlice';
const Education = ({setStep}) => {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const [educations, setEducations] = useState([]);
  const dispatch=useDispatch();
  const onSubmit = (data) => {
    setEducations([...educations, data]);
   
   
  }
  const handleBack=()=>{
    setStep(2);
  }
  
  const handleNext=()=>{
    dispatch(addEducation({educations}))
    setStep(4)
  }
 

  return (
    <div className="border p-12 w-8/12 mx-auto bg-gray-100 rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold">Education</h2>
      <hr className="my-4" />

      {/* Displaying the list of added educations */}
      <div className="mt-4">
        {educations.map((education, index) => (
          <div key={index} className="border p-4 mb-4 rounded-md shadow-sm">
            <h3 className="font-semibold">Education {index + 1}</h3>
            <p><strong>Completion Date:</strong> {education.completionDate}</p>
            <p><strong>Degree:</strong> {education.degree}</p>
            <p><strong>Institution:</strong> {education.institution}</p>
            <p><strong>Location:</strong> {education.location}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-16 mt-6">
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Completion Date</label>
            <input
              className="bg-slate-100 border border-slate-300 px-10 py-2 rounded-md"
              type="date"
              {...register("completionDate", { required: true })}
            />
            {errors.completionDate && (
              <span className="ml-2 text-xs tracking-wide text-pink-500">Completion Date is required</span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Degree</label>
            <input
              className="bg-slate-100 border border-slate-300 px-4 py-2 rounded-md"
              type="text"
              placeholder="Enter Degree"
              {...register("degree", { required: true })}
            />
            {errors.degree && (
              <span className="ml-2 text-xs tracking-wide text-pink-500">Degree is required</span>
            )}
          </div>
        </div>
        <div className="flex gap-16 mt-6">
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Institution</label>
            <input
              className="bg-slate-100 border border-slate-300 px-4 py-2 rounded-md"
              type="text"
              placeholder="Enter Institution"
              {...register("institution", { required: true })}
            />
            {errors.institution && (
              <span className="ml-2 text-xs tracking-wide text-pink-500">Institution is required</span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Location</label>
            <input
              className="bg-slate-100 border border-slate-300 px-4 py-2 rounded-md"
              type="text"
              placeholder="Enter Location"
              {...register("location", { required: true })}
            />
            {errors.location && (
              <span className="ml-2 text-xs tracking-wide text-pink-500">Location is required</span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center mb-6">
          <button
            type="button"
            className="bg-blue-500 text-white px-6 py-2 rounded-md mt-8"
            onClick={ handleSubmit(onSubmit) }
          >
            Add New
          </button>
        </div>
        <div className="flex gap-8 mb-8 justify-end">
        <Button
          color={"blue-500"}
          border={"blue-500"}
          bordWid={"2"}
          background={"white"}
          title={"Back"}
          borderSolid={"solid"}
          onClick={handleBack} // Assuming setStep(1) goes back to the previous step
        />
        <Button
          color={"white"}
         
          bordWid={"0"}
          background={"blue-500"}
          title={"Next"}
          
          onClick={handleNext}
        />
        
          
        </div>
      </form>
    </div>
  );
};

export default Education;
