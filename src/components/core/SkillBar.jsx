import React from 'react';

const SkillBar = ({  level,shape }) => {
  const totalCircles = 5;
  const filledCircles = Math.round((level / 100) * totalCircles);
  const unfilledCircles = totalCircles - filledCircles;

  return (
    <div className="flex items-center mb-4">
      <div className="flex space-x-1 ml-28 ">
        {[...Array(filledCircles)].map((_, i) => (
          <div key={i} className={`w-3 h-3 bg-blue-900 ${shape}`} ></div>
        ))}
        {[...Array(unfilledCircles)].map((_, i) => (
          <div key={i} className={`w-3 h-3 bg-gray-300 ${shape}`}></div>
        ))}
      </div>
    </div>
  );
};

export default SkillBar;
