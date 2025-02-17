"use client";
import { useCustomHook } from '@/Contexts/Context';
import { ButtonLists } from '@/utils/typeButton';
// import { ButtonList } from '@/utils/typeButton'
import { Poppins } from '@next/font/google';
const poppin = Poppins({
  weight: ['400', '700'], 
  subsets: ['latin'], 
  display: 'swap', 
});
function Button({value,dispatchBtn}:ButtonLists) {
  const {dispatch} = useCustomHook();

  //handle style of button
  const btnAC = value === "AC"  ? "relative bottom-16 ":"";
  const btnZero = value === "0" ? "relative bottom-12":"";
  const btnDel = value === "DEL" ? "relative bottom-16":"";
  const btnDot = value === "." ? "relative bottom-12":"";
  const btnModuls = value === "=" ? `relative bottom-12 `:""; 
  const btnPlus = value === "+" ? poppin.className : "";
  const btnMulti = value === "*" ? poppin.className : "";

  const handleClick = () => {
    // if(dispatchBtn.payload?.value !== undefined){
      dispatch({type: dispatchBtn.type,payload:{value}});
      console.log(value)
    // }else{
    //   dispatch({type:dispatchBtn.type});
    //   console.log(dispatchBtn.type)
    // }
    // setValue(btnState.result);
    // console.log(btnState)
  };
  return (
    <>
      <button className={`${value === "+" ? "bg-emerald-300": value === "AC" ? "bg-red-400 ": "bg-zinc-400"}  ${value === "+" ? "py-[60px]" :""} h-[55px] ${value === "AC" ? "w-[135px]" : "w-[60px]"} m-2   rounded-md text-xl ${btnAC} ${btnZero} ${btnDel} ${btnDot} ${btnModuls} ${btnPlus} ${btnMulti} max-[440px]: relative max-[440px]:right-6`} onClick={handleClick}>{value}</button>
    </>
  )
}

export default Button
