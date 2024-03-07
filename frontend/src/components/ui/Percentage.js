import { IoTriangleSharp } from "react-icons/io5";
import { PiPercent } from "react-icons/pi";
const Percentage = (props)=>{

    const {details} = props

    return(
        <div className="flex rounded-lg bg-green-100 w-[80px] p-1 text-center pr-0 pl-2">
            <IoTriangleSharp className="text-green-500 h-[13px] w-[12px] md:h-[15px] md:w-[14px] pt-1 md:pt-2"/>
            <p className="text-green-500 text-xs  pt:0 md:pt-1 flex">{details} <PiPercent className="text-green-500 pt-1 h-[16px] w-[16px]"/> </p>
        </div>
    )
}

export default Percentage