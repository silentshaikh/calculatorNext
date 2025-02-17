"use client";
import { useCustomHook } from '@/Contexts/Context';
import React from 'react'

function Calculation() {
  const {btnState,showResult} = useCustomHook()
  return (
    <>
      <div className='text-white bg-slate-500 py-1 rounded-sm relative top-9 text-center'>
        {showResult ? btnState.result : ""}
      </div>
    </>
  )
};
export default Calculation;