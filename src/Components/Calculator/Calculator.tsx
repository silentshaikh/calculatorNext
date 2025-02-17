"use client";
import Input from '../Input/Input'
import { buttonList } from '@/utils/buttonList'
import Button from '../Button/Button';
import Calculation from '../Calculations/Calculation';
import { useCustomHook } from '@/Contexts/Context';

function Calculator() {
  const custmHook = useCustomHook();
  return (
    <>
    <h1 className='font-amsterdam text-4xl py-3'>CALCULATOR</h1>
     <section className={`bg-bgOne h-[80vh] w-[400px] shadow-shadTwo py-[50px] flex justify-center flex-col items-center rounded-xl  font-amsterdam max-[440px]:w-[350px] max-[440px]:h-[75vh] max-[360px]:w-[350px] max-[360px]:ml-11 max-[330px]:ml-20 max-[290px]:ml-[120px]`}>
      <div id='input-feild' className='flex flex-col'>
      <Input/>
      <Calculation/>
      </div>
      <div id='buttons' className=' relative top-8 left-7 p-4'>
      {
        custmHook.buttonList.map((e) => {
          return ( <Button key={e.value} value={e.value} dispatchBtn={e.dispatchBtn} /> );
        })
      }
      </div>
      </section> 
    </>
  )
}

export default Calculator
