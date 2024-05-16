import React from 'react'

const DropdownCard = ({ data = [], setOpen }) => {
  return (
    <div className="shadow h-auto w-56 absolute mt-7 bg-white z-10">
    <ul className="text-left">
      {data.map((item, i) => (
        <li key={i} className="p-3 border bg-white text-gray-700 hover:text-white hover:bg-indigo-700 cursor-pointer" onClick={() => setOpen(false)}>
          {item}
        </li>
      ))}
    </ul>
  </div>  )
}

export default DropdownCard