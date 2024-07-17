import React from 'react';
import { useSelector } from 'react-redux';
const Template2 = () => {
    const formData=useSelector((state)=>state.formData);
    const { personalInfo,  skills, experience, education } = formData.formData;
  
    return (
        <div className='flex min-h-screen border-inherit border w-[742px] font-Poppin mx-auto select-none'>
            <div className='w-[30%] bg-blue-900 '>
                <div className='font-bold font-sans pl-4 pt-8 text-[32px] tracking-wide text-white capitalize'>
                    {personalInfo?.firstName} {personalInfo?.lastName}
                </div>
                <div className='text-white pl-4 capitalize '>
                {experience[0]?.experiences[0].jobTitle}
                </div>
                <div className='mt-4 mb-4'>
                    <h2 className='bg-blue-950 font-sans pl-4  text-[20px] text-white font-bold '>Contact</h2>
                    <div className='text-white font-sans text-sm pl-4 pt-2'>
                        <div className='font-bold'>
                            Address
                        </div>
                        <div>
                            {personalInfo?.address}
                        </div>
                    </div>
                    <div className='text-white font-sans text-sm pl-4 pt-2'>
                        <div className='font-bold'>
                            mobile
                        </div>
                        <div>
                            {personalInfo?.mobile}
                        </div>
                    </div>
                    <div className='text-white font-sans text-sm pl-4 pt-2'>
                        <div className='font-bold'>
                            E-mail
                        </div>
                        <div>
                            {personalInfo?.email}
                        </div>
                    </div>
                </div>
                 <div>
                 <h2 className='bg-blue-950 font-sans pl-4  text-[20px] text-white font-bold '>Skills</h2>
                 <div className='mt-4'>
                 {
            skills[0]?.skills.map((data, index) => {
              return (
               <div key={index} className='pl-4  pr-4'>
                 <div className='text-[12px] text-white uppercase'>
                    {data.name}
                 </div>
                 <div className=" h-2  bg-blue-950 rounded mb-4">
                    <div
                      className="h-2 bg-white rounded"
                      style={{ width: `${data.level}%` }}
                    ></div>
                  </div>
               </div>
              )
            })
          }
                 </div>
                 </div> 
            </div>

            <div className='w-[70%] pl-4 mt-8 pr-4'>
               <div className='text-[14px]'>
                {personalInfo?.objective}
               </div>
               <div className='mt-6'>
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
                <div className='mt-6'>
                <hr />
                <h2 className='text-blue-950 mt-2 mb-2 text-lg font-sans font-bold'>Education</h2>
                <hr />
                {
                    education[0]?.educations.map((data,i)=>(
                        <div key={i} className='flex mt-4 mb-4'>
                            <div className='w-[30%] text-[14px]'>
                                {data.completionDate}
                            </div>
                            <div className='w-[70%] '>
                                <div className='font-bold capitalize'>
                                {data.degree}
                                </div>
                                <div className='text-sm'>
                                {`${data.institution } - ${data.location}`}
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
               
            </div>
        </div>
    )
}

export default Template2