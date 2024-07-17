import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../common/Button';
import { useDispatch } from 'react-redux';
import { addSkill } from '../../../../slices/formDataSlice'; // Make sure the path is correct

const Skills = ({ setStep }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [skills, setSkills] = useState([]);
  const dispatch = useDispatch();

  const onSubmit = (data) => {

    
    setSkills([...skills, data]);
    
  };

  const handleNext = () => {
    dispatch(addSkill({ skills }));
    setStep(3);
  };

  return (
    <div className="border p-12 w-8/12 mx-auto bg-white rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <hr className="my-4" />

      {/* Displaying the list of added skills */}
      <div className="mt-4">
        {skills.map((skill, index) => (
          <div key={index} className="border p-4 mb-4 rounded-md shadow-sm">
            <h3 className="font-semibold">Skill {index + 1}</h3>
            <p><strong>Name:</strong> {skill.name}</p>
            <p><strong>Level:</strong> {skill.level}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-16 mt-6">
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Skill Name</label>
            <input
              className="bg-slate-100 border border-slate-300 px-4 py-2 rounded-md"
              type="text"
              placeholder="Enter Skill Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="ml-2 text-xs tracking-wide text-pink-500">Skill Name is required</span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Skill Level</label>
            <input
              className="bg-slate-100 border border-slate-300 px-4 py-2 rounded-md"
              type="text"
              placeholder="Enter Skill Level"
              {...register("level", { required: true })}
            />
            {errors.level && (
              <span className="ml-2 text-xs tracking-wide text-pink-500">Skill Level is required</span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center mb-6">
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md mt-8">
            Save
          </button>
        </div>
      </form>

      <div className="flex gap-8 mb-8 justify-end">
        <Button
          color={"blue-500"}
          border={"blue-500"}
          bordWid={"2"}
          background={"white"}
          title={"Back"}
          borderSolid={"solid"}
          onClick={() => setStep(1)} // Assuming setStep(1) goes back to the previous step
        />
        <Button
          color={"white"}
         
          bordWid={"0"}
          background={"blue-500"}
          title={"Next"}
          
          onClick={handleNext}
        />
        
        
      </div>
    </div>
  );
};

export default Skills;
