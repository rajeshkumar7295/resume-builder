import React from 'react'
import { useSelector } from 'react-redux';
const Template5 = () => {
    const formData = useSelector((state) => state.formData);
  const { personalInfo,  skills, experience, education } = formData.formData;
  return (
    <div className='w-[742px] pl-6 pr-6 border-inherit border mx-auto font-Edu font-semibold select-none'>
      <div className='text-center pt-3 font-sans text-[38px] font-bold capitalize'>
        {personalInfo?.firstName} {personalInfo?.lastName}
      </div>
      <div className='text-center font-bold capitalize '>
      {experience[0]?.experiences[0].jobTitle}
      </div>

      <div className=' h-[2px] mt-5 bg-black'> </div>
      <div className='grid mt-5 pl-4 pr-4 grid-cols-3'>
        <div>{personalInfo?.mobile}</div>
        <div>{personalInfo?.email}</div>
        <div>{personalInfo?.address}</div>
      </div>

      <div className=' h-[2px] mt-5 bg-black'> </div>
      <div className='mt-5 pl-4 pr-4'>
        {personalInfo?.objective}
      </div>
      <div className='pt-5 text-[20px] pb-2 font-bold'>
        Skills
      </div>
      <div className=' h-[2px]  bg-black'> </div>
      <ul className='pl-8 mt-5 grid grid-cols-2 '>
        {skills[0]?.skills.map((data, i) => (
          <li key={i} className='list-disc capitalize'>
            {data.name}
          </li>
        ))}
      </ul>
      <div>
        <div className='pt-5 text-[20px] pb-2 font-bold'>
          Work History
        </div>
        <div className=' h-[2px]  bg-black'> </div>
        {
            experience[0]?.experiences.map((data, i) => (
            <div key={i}>
              <div className='flex justify-between '>
                <div>
                  <div className='font-extrabold text-[20px] capitalize'>{data.jobTitle}</div>
                  <div className='capitalize'>{data.organizationName}</div>
                </div>
                <div>
                  <div className='font-extrabold text-[20px] capitalize'>{data.location}</div>
                  <div>
                    {`${data.startYear} - ${data.endYear}`}
                  </div>
                </div>
              </div>
              <div>
                {data.responsibility}
              </div>
            </div>
          ))
        }
      </div>
      <div>
        <div className='pt-5 text-[20px] pb-2 font-bold'>
          Education
        </div>
        <div className=' h-[2px]  bg-black'> </div>
        {
          education[0]?.educations.map((data, i) => (
            <div className='flex justify-between pt-5' key={i}>
              <div>
                <div className='font-extrabold text-[24px] capitalize'>{data.degree}</div>
                <div className='capitalize'>{`${data.institution}- ${data.location}`}</div>
              </div>
              <div>
                {data.completionDate}
              </div>
            </div>
          ))
        }
      </div>
     

    </div>
  )
}

export default Template5
