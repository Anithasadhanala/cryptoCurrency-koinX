import { IoTriangleSharp } from "react-icons/io5";
import { TbTriangleInvertedFilled } from "react-icons/tb";

import { PiPercent } from "react-icons/pi";


const Percentage = (props)=>{

    const {details} = props

    const positive = details>0 ? true : false

    const parafont = positive ? "text-green-500 text-xs flex" : "text-red-500 text-xs flex"

    const percentfont = positive ? "text-green-500 h-[16px] w-[16px]" : "text-red-500 h-[16px] w-[16px]"

    const divfont = positive ? "flex rounded-lg bg-green-100 w-[80px] text-center  h-[30px]  justify-center items-center" : "flex rounded-lg bg-red-100 w-[80px] text-center  h-[30px]  justify-center items-center"


    

    return(
        <div className={divfont}>

{positive ? 
            <IoTriangleSharp className="text-green-500 h-[10px] w-[10px] "/>  : <TbTriangleInvertedFilled className="text-red-500 h-[10px] w-[10px]" />}
            <p className={parafont}> &nbsp; {details}
            
           
             <PiPercent className={percentfont}/>
             </p>
        </div>
    )
}

export default Percentage