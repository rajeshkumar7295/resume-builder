import React from 'react';
import { useSelector } from 'react-redux';
import { IoLocationOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import SkillBar from '../core/SkillBar';


const Template4 = () => {
    const formData = useSelector((state) => state.formData);
    const { personalInfo,  skills, experience, education } = formData.formData;
  return (
    <div className='w-[742px] border-inherit border mx-auto font-Montserrat select-none'>
      <div className='text-blue-900  font-bold pt-8 pl-6 text-[32px] capitalize'>
        {personalInfo?.firstName} {personalInfo?.lastName}
      </div>
      <div className='text-blue-900 pl-6  capitalize'>
      {experience[0]?.experiences[0].jobTitle}
      </div>
      <div className='flex gap-2 pl-6 pt-6 text-sm'>
        <div className='bg-purple-950 w-5 h-5 flex items-center justify-center'>

          <IoLocationOutline fontSize={20} color='white' />
        </div>
        <span>{personalInfo?.address}</span>
      </div>
      <div className='flex gap-2 pl-6 pt-2 text-sm'>
        <div className='bg-purple-950 w-5 h-5 flex items-center justify-center'>

          <IoCall fontSize={20} color='white' />
        </div>
        <span>{personalInfo?.mobile}</span>
      </div>
      <div className='flex gap-2 pl-6 pt-2 text-sm'>
        <div className='bg-purple-950 w-5 h-5 flex items-center justify-center'>

          <MdOutlineEmail fontSize={20} color='white' />
        </div>
        <span>{personalInfo?.address}</span>
      </div>

      <div className='pl-6 pr-6 pt-4 text-sm'>
        {personalInfo?.objective}
      </div>
      <div className='pl-6 pr-6'>
        <div className='flex items-center gap-2  pt-8'>
          <div className='bg-purple-950 w-8 h-8 flex items-center justify-center'>

            <GiSkills fontSize={24} color='white' />
          </div>
          <span className="text-purple-950 font-bold text-[20px]">Skills</span>
        </div>
        <hr />
        <div className='pt-8 '>
          {
            skills[0]?.skills.map((data, i) => (
              <div key={i} className='flex justify-between '>
                <div className='text-sm uppercase'>
                  {data.name}
                </div>
                <SkillBar level={data.level} shape={""} />
              </div>
            ))
          }
        </div>
      </div>

      <div className='pl-6 pr-6'>
        <div className="flex items-center mt-8 gap-4">
          <div className='bg-purple-950 w-8 h-8 flex items-center justify-center'>

            <IoIosSchool
              fontSize={24} color='white' />
          </div>
          <span className="text-purple-950 font-bold text-[20px]">Education</span>
        </div>
        <hr />
        <div className="mt-8 mb-8">
          {
            education[0]?.educations.map((data, i) => (
              <>
                <div key={i} className="flex  gap-20 mb-6 mt-6">

                  <div>
                    {`${data.completionDate}`}
                  </div>
                  <div>
                    <div className="font-bold text-[18px] capitalize">
                      {data.degree}
                    </div>
                    <div className='capitalize'>
                      {data.institution}
                    </div>
                  </div>
                </div>
              </>
            ))
          }
        </div>
      </div>
     
      <div className='pl-6 pr-6'>

      <div className="flex items-center mt-8 gap-4">
          <div className='bg-purple-950 w-8 h-8 flex items-center justify-center'>

            <MdWorkHistory fontSize={24} color='white' />
          </div>
          <span className="text-purple-950 font-bold text-[20px]">Work History</span>
        </div>
        <hr />
      </div>
        <div className="mt-8 pl-6 pr-6">
          {experience[0]?.experiences.map((data, index) => {
            return (<>
              <div className="flex justify-start mb-8 gap-20">

                <div key={index} >
                  <div>{`${data.startYear}-`}</div>
                  <div>{`${data.endYear}`}</div>
                </div>
                <div>
                  <div>

                    <div className="font-bold text-[18px] capitalize ">
                      {data.jobTitle}
                    </div>
                    <div className='capitalize'>
                      {`${data.organizationName}, ${data.location}`}
                    </div>
                    <div>
                        {data.responsibility}
                    </div>
                  </div>
                </div>

              </div>
            </>
            )
          })}
        </div>
    </div>
  )
}

export default Template4
