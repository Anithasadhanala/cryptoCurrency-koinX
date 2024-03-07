import { PiPercent } from "react-icons/pi";
import Percentage from "./ui/Percentage"


const AlsoLikeItem = ()=>(
    <div className="flex flex-col rounded-lg border-2 w-[250px]  md:w-[200px] h-[100px] p-4 mr-3 mb-3" >
        <div className="flex">
            <img className="" src="" alt="coin-icon"/>
            <p className="sans-serif  text-black font-medium text-md mb-5 mr-2">BNB</p>
            <div className="flex rounded-lg bg-green-100 w-[60px] h-[30px] p-1 text-center pr-0 pl-2">
            <p className="text-green-500 text-xs  pt:0 md:pt-1 flex">+66.00 <PiPercent className="text-green-500 pt-1 h-[16px] w-[16px]"/> </p>
        </div>
        </div>
        <h1 className="sans-serif  text-black font-medium text-md mb-5">$45,332.83</h1>

    </div>
)

export default AlsoLikeItem