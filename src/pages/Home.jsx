import React from 'react'
import { templateImage } from '../data/customTemplateData';
import { useNavigate } from 'react-router-dom';
const Home = () => {
const navigate=useNavigate();

  return (
    <div className='w-10/12  mx-auto mb-10'>
      <h2 className='text-xl font-semibold' >Templates</h2>
      <p className='mt-2 mb-10'>Select a Template to get Started</p>
      <div className='flex gap-28 flex-wrap  '>
        {
          templateImage.map((data, i) => (
            <>
              <div key={i} className='relative   p-4 bg-blue-100   rounded-md shadow-2xl group'>
                <img className='h-[250px] w-[220px] ' alt={`Template ${i}`} src={data.img} />
                <div className='absolute inset-0 flex  items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-80 transition-opacity duration-300'>
                  <button onClick={()=> navigate(`data-filling/${data.id}`)} className='text-white bg-blue-600  px-4 hover:bg-blue-700 py-2 rounded'>
                    Use Template
                  </button>
                </div>
              </div>
            </>
          ))
        }
      </div>
    </div>
  )
}

export default Home

