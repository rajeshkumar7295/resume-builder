import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../common/Button';
import { useNavigate ,useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addExperience } from '../../../../slices/formDataSlice';
const WorkExperience = ({setStep}) => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const params=useParams();
  const {templateId}=params;
  const { register, handleSubmit,  formState: { errors } } = useForm();

  const [experiences, setExperiences] = useState([]);
  
  const onSubmit = (data) => {
    
    setExperiences([...experiences, data]);
   
  };

  
  
  const handleNext=()=>{
    dispatch(addExperience({experiences}));
    
    navigate(`/preview-page/${templateId}`);

  }
  return (
    <div className="bg-gray-100 p-8 rounded-md w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
      <hr className="mb-6"/>

      {/* Displaying the list of added experiences */}
      <div className="mt-4 space-y-4">
        {experiences.map((experience, index) => (
          <div key={index} className="border p-4 rounded-md bg-white">
            <h3 className="font-semibold mb-2">Experience {index + 1}</h3>
            <p><strong>Job Title:</strong> {experience.jobTitle}</p>
            <p><strong>Organization Name:</strong> {experience.organizationName}</p>
            <p><strong>Start Year:</strong> {experience.startYear}</p>
            <p><strong>End Year:</strong> {experience.endYear}</p>
            <p><strong>Location</strong> {experience.location}</p>
            <p><strong>Responsibility</strong> {experience.responsibility}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-semibold" htmlFor="jobTitle">Job Title</label>
            <input
              className="w-full p-2 border border-gray-300 rounded bg-slate-100"
              type="text"
              id="jobTitle"
              placeholder="Enter Job Title"
              {...register("jobTitle", { required: true })}
            />
            {errors.jobTitle && (
              <span className="text-red-600 text-sm">Job Title is required</span>
            )}
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="organizationName">Organization Name</label>
            <input
              className="w-full p-2 border border-gray-300 rounded bg-slate-100"
              type="text"
              id="organizationName"
              placeholder="Enter Organization Name"
              {...register("organizationName", { required: true })}
            />
            {errors.organizationName && (
              <span className="text-red-600 text-sm">Organization Name is required</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-semibold" htmlFor="startYear">Start Year</label>
            <input
              className="w-full p-2 border border-gray-300 rounded bg-slate-100"
              type="date"
              id="startYear"
              {...register("startYear", { required: true })}
            />
            {errors.startYear && (
              <span className="text-red-600 text-sm">Start Year is required</span>
            )}
          </div>
         
          <div>
            <label className="block mb-1 font-semibold" htmlFor="endYear">End Year</label>
            <input
              className="w-full p-2 border border-gray-300 rounded bg-slate-100"
              type="date"
              id="endYear"
              {...register("endYear", { required: true })}
            />
            {errors.endYear && (
              <span className="text-red-600 text-sm">End Year is required</span>
            )}
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="location">Location</label>
            <input
              className="w-full p-2 border border-gray-300 rounded bg-slate-100"
              type="text"
              id="location" placeholder='Enter Location'
              {...register("location", { required: true })}
            />
            {errors.location && (
              <span className="text-red-600 text-sm">location is required</span>
            )}
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <label className='font-semibold' htmlFor="responsibility">Responsibility</label>
          <textarea   id="responsibility" placeholder='Responsibility' className='p-2 border border-gray-300 rounded bg-slate-100' {...register("responsibility", {require:true})}   />
          {errors.responsibility && (
              <span className="text-red-600 text-sm">responsibility is required</span>
            )}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            onClick={handleSubmit(onSubmit)}
          >
            Add New
          </button>
        </div>
      </form>

      <div className="flex justify-end mt-8 space-x-4">
        <Button color={"blue-500"} border={"blue-500"} bordWid={"2"} background={"white"} borderSolid={"solid"} title={"Back"} onClick={()=>setStep(3)} />
        <Button color={"white"} border={"none"} bordWid={"0"} background={"blue-600"} title={"Next"} onClick={handleNext} />
      </div>
    </div>
  );
};

export default WorkExperience;
