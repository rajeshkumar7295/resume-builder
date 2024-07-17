import React from 'react';
import { MdWorkHistory } from 'react-icons/md';
import { IoIosSchool } from 'react-icons/io';
import { GiSkills } from 'react-icons/gi';
import { useSelector } from 'react-redux';

const Template1 = () => {
  const formData = useSelector((state) => state.formData);
  const { personalInfo,  skills, experience, education } = formData.formData;
 
  return (
    <div className='flex h-auto w-[742px] border-inherit border p-8 font-Poppin mx-auto select-none flex-col gap-4 m-4'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col gap-1'>
          <div className='tracking-wide text-[24px] font-sans text-purple-950 font-extrabold capitalize'>
            {personalInfo?.firstName} {personalInfo?.lastName}
          </div>
          <p className='font-Poppin font-extrabold capitalize'>{experience[0]?.experiences[0].jobTitle}</p>
          <p>
            <span className="font-Poppin font-bold pr-2">Address</span>
            {personalInfo?.address}
          </p>
          <p>
            <span className="font-Poppin font-bold pr-2">mobile</span>
            {personalInfo?.mobile}
          </p>
          <p>
            <span className="font-Poppin font-bold pr-2">E-mail</span>
            {personalInfo?.email}
          </p>
        </div>
      </div>
      <div className="font-Poppin text-sm">
        {personalInfo?.objective}
      </div>
      <div>
        <div className="flex items-center mt-8 gap-4">
          <div className='bg-purple-950 w-8 h-8 flex items-center justify-center'>
            <GiSkills fontSize={24} color='white' />
          </div>
          <span className="text-purple-950 font-bold text-[20px]">Skills</span>
        </div>
        <div className="ml-[15%]">
          {skills[0]?.skills.map((skill, index) => (
            <div key={index} className="flex justify-between items-center mt-4 mb-4">
              <div className="w-[65%] font-bold text-sm uppercase">
                {skill.name}
              </div>
              <div className="w-[35%] h-2 bg-gray-300 rounded mb-4">
                <div
                  className="h-2 bg-blue-900 rounded"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center mt-8 gap-4">
          <div className='bg-purple-950 w-8 h-8 flex items-center justify-center'>
            <MdWorkHistory fontSize={24} color='white' />
          </div>
          <span className="text-purple-950 font-bold text-[20px]">Work History</span>
        </div>
        <div className="mt-8">
          {experience[0]?.experiences.map((exp, index) => (
            <div key={index} className="flex justify-start mb-8 gap-20">
              <div>
                <div>{`${exp.startYear}`}</div>
                <div>{`${exp.endYear}`}</div>
              </div>
              <div>
                <div className="font-bold text-sm capitalize text-[22px] mb-1 font-sans">
                  {exp.jobTitle}
                </div>
                <div className='font-bold capitalize'>
                  {`${exp.organizationName}`} , {exp.location}
                </div>
                <div className='text-sm'>
                  {exp.responsibility}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center mt-8 gap-4">
          <div className='bg-purple-950 w-8 h-8 flex items-center justify-center'>
            <IoIosSchool fontSize={24} color='white' />
          </div>
          <span className="text-purple-950 font-bold text-[20px]">Education</span>
        </div>
        <div className="mt-8 mb-8">
          {education[0]?.educations.map((edu, i) => (
            <div key={i} className="flex gap-20 mb-6 mt-6">
              <div>
                {edu.completionDate}
              </div>
              <div>
                <div className="font-bold  capitalize">
                  {edu.degree}
                </div>
                <div className='capitalize font-semibold '>
                  {edu.institution} ,
                  <span className='ml-2'>{edu.location}</span>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
}

export default Template1;
