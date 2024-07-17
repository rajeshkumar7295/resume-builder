import React,{useState} from 'react'

import PersonalInfo from './dataForm/PersonalInfo';
import Skills from './dataForm/Skills';
import Education from './dataForm/Education';
import WorkExperience from './dataForm/WorkExperience';

const Sidebar = () => {
    
  const [step,setStep] = useState(1);

  return (
    <div className='flex mx-auto w-8/12   flex-col '>
        
      <div >
           {step ===1  && <PersonalInfo setStep={setStep} step = {step} />}
           {step ===2  && <Skills setStep={setStep} step = {step} />}
           {step ===3  && <Education setStep={setStep} step = {step} />}
           {step ===4  && <WorkExperience setStep={setStep} step = {step} />}
      </div>
    </div>
  )
}

export default Sidebar