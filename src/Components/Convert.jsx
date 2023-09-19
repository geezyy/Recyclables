import React from 'react'
import Select from "./Select"

const Convert = () => {
  return (
    <div className="flex mt-60 justify-center ">
      <div className=" w-72 h-96 bg-slate-100 shadow-lg rounded-lg p-2 ">
        <div className=''>
          {""}
          <Select />
        </div>
        <label htmlFor="" className=" border-green-400 border rounded-lg p-2">
          {"Weight"}
          <input
            name="myInput"
            className=" border rounded-lg ml-5  border-black mt-10"
          />
        </label>
      </div>
    </div>
  );
}

export default Convert