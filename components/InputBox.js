import React from 'react'

export default function InputBox({label,setValue,errorKey,formError,placeholder}) {
  return (
     <div className="w-[95%] h-[70px]">
             <label className="text-white text-[14px]">{label}</label>
             <input className="bg-white w-full rounded-[10px] py-[5px] px-[5px] text-[14px] border-[1px] border-violet-400 mt-[3px] outline-0" onChange={(e)=>setValue(e.target.value)}
              type="text" placeholder={placeholder} />
              {formError[errorKey]&&<p className="text-pink-600 text-[13px]">{formError[errorKey]}</p>}
     </div> 
  )
}
