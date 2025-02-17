"use client";
import { useCustomHook } from '@/Contexts/Context';
import React from 'react'

function Input() {
  const {value} = useCustomHook();
  return (
    <>
      <div className='py-5 flex justify-center'>
      <input className='w-[240px] px-2 shadow-inner rounded-sm text-right bg-zinc-500 relative right-1 top-10 outline-none font-semibold text-slate-100 text-lg max-[440px]:w-[220px]' type="text" name="" id="" value={value} readOnly />
      <div className=" relative top-10 p-4 flex ">
      <div className='w-1 mx-1 bg-zinc-400 h-6 rounded-sm'></div>
      <div className='w-1 mx-1 bg-zinc-400 h-6 rounded-sm'></div>
      <div className='w-1 mx-1 bg-zinc-400 h-6 rounded-sm'></div>
      <div className='w-1 mx-1 bg-zinc-400 h-6 rounded-sm'></div>
      <div className='w-1 mx-1 bg-zinc-400 h-6 rounded-sm'></div>
      </div>
      </div>
    </>
  )
}

export default Input;
