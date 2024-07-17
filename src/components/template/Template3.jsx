import React from 'react'
import { useSelector } from 'react-redux';
import SkillBar from '../core/SkillBar';
const Template3 = () => {
    const formData = useSelector((state) => state.formData);
    const { personalInfo,  skills, experience, education } = formData.formData;
   
  return (
    <div className='w-[742px] border-inherit border mx-auto font-Poppin select-none'>

        <div className='bg-blue-900 h-[140px] pl-6'>
            <div className='font-sans relative top-[26%] font-bold text-custom-silver  text-[36px] tracking-wide capitalize '>
                {personalInfo?.firstName} {personalInfo?.lastName}
            </div>
            <div className='font-sans relative top-[26%] text-custom-silver  tracking-wide text-[18px] capitalize'>
            {experience[0]?.experiences[0].jobTitle}
            </div>
        </div>
        <div className='flex'>
            <div className='w-[70%]'>
                <div className='pl-4 pt-8 pr-4 text-sm'>
                {personalInfo?.objective}
                </div>
                <div className='pl-4 pt-6 pr-4'>
                    <h2 className='text-blue-950 font-bold font-sans text-[20px]'>Education</h2>
                    <hr />
                    {
                        education[0]?.educations.map((data,i)=>(
                        <div key={i} className='flex mt-4 mb-4'>
                            <div className='w-[25%] font-bold text-[14px]'>
                                {data.completionDate}
                            </div>
                            <div className='w-[75%] '>
                                <div className='font-bold capitalize'>
                                {data.degree}
                                </div>
                                <div className='text-sm capitalize'>
                                {`${data.institution } - ${data.location}`}
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
          
             <div className='mt-6 pl-4 mb-4'>
                   <hr />
                <h2 className='text-blue-950 mt-2 mb-2 text-lg font-sans font-bold'>Work History</h2>
                <hr />
                {
                    experience[0]?.experiences.map((data,i)=>(
                        <div key={i} className='flex mt-4 ' >
                          <div  className='w-[30%]'>
                            <div className='text-[14px]'>
                           {`${data.startYear}  -`}
                            </div>
                            <div className='text-[14px]'>
                            {`${data.endYear}`}
                            </div>
                          </div>
                          <div className='w-[70%]'>
                            <div className='font-bold capitalize'>
                                {data.jobTitle}
                            </div>
                            <div className='text-sm mt-1 capitalize'>
                                {`${data.organizationName}, ${data.location}`}
                            </div>
                           <div>
                            {data.responsibility}
                           </div>
                          </div>
                        </div>
                    ))
                }
               </div>
            </div>
            <div className='w-[30%]  bg-gray-100'>
              <div className='pl-4 pr-4 pt-6'>
                <div>
                <h2 className='text-blue-950 mt-2 mb-2 text-lg tracking-wide font-sans font-bold'>Contact</h2>
                <hr />
                <div className=' font-sans text-sm pt-2'>
                        <div className='font-bold'>
                            Address
                        </div>
                        <div>
                            {personalInfo?.address}
                        </div>
                    </div>
                    <div className=' font-sans text-sm  pt-2'>
                        <div className='font-bold'>
                            Phone
                        </div>
                        <div>
                            {personalInfo?.mobile}
                        </div>
                    </div>
                    <div className=' font-sans text-sm  pt-2'>
                        <div className='font-bold'>
                            E-mail
                        </div>
                        <div>
                            {personalInfo?.email}
                        </div>
                    </div>
                </div>
                <div>

                </div>
              </div>
              <div className='pl-4 pr-4 pt-6'>
              <h2 className='text-blue-950 mt-2 mb-2 text-lg tracking-wide font-sans font-bold'>Skills</h2>
                <hr />
                <div>
                    {
                        skills[0]?.skills.map((data,i)=>(
                            <>
                                <div key={i}>
                                    <div className='text-[12px] uppercase'>
                                        {data.name}
                                    </div>
<SkillBar  level={data.level} shape={"rounded-full"}/>
                                </div>
                            </>
                        ))
                    }
                </div>
              </div>

             
            </div>
        </div>
    </div>
  )
}

export default Template3