import React from 'react'

const Button = ({color,border,background,title,bordWid,onClick,borderSolid}) => {
  return (
    <>
      <button className={`border-${bordWid}  pt-2 pb-2  pl-8 pr-8 text-${color} border-${border} border-${borderSolid} bg-${background} rounded-md`} onClick={onClick} >
{title}
      </button>
    </>
  )
}

export default Button
