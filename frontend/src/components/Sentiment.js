import SubInfo from "./ui/SubInfo"
import Event from "./Event"
import {eventsList} from "../utils/constants"
import { PiPercent } from "react-icons/pi";

const Sentiment = () => {

    console.log(eventsList)

    return(
    <div className="bg-white rounded-md p-4 ml-2 mr-4 md:ml-0 md:mr-0 mt-10">

    <h1 className="sans-serif  text-black font-medium text-xl mb-5">Sentiment</h1>
    <SubInfo details="Key Events"/>

    <div className="flex flex-col md:flex-row">
        {eventsList.map((each) =>(<Event details={each} key={each.id}/>))}
    </div>

    <SubInfo details="Analyst Estimates"/>

    <div className="flex">
        <div className="bg-green-50 rounded-full w-[70px] h-[40px] p-2 md:w-[90px] md:h-[90px] flex justify-center items-center">
            <p className="text-green-500  text-lg md:text-2xl md:font-bold ">76 </p>
            <PiPercent className="text-green-500 pt-1 h-[16px] w-[16px]"/> 
        </div>

        <div className="flex flex-col  ml-2 md:ml-10">

            <div className="flex">
                <p className="sans-serif text-gray-400 font-medium text-[11px]">Buy</p>
                <hr className="bg-green-500 w-[100px] md:w-[300px] h-[5px] rounded-xl mt-2 mr-2 ml-2"/>
                <p className="sans-serif text-gray-400 font-medium text-sm ">76%</p>
            </div>
            <div className="flex">
                <p className="sans-serif text-gray-400 font-medium text-[11px]">Hold</p>
                <hr className="bg-gray-300 w-[30px] md:w-[50px] h-[5px] rounded-xl mt-2 mr-2 ml-2"/>
                <p className="sans-serif text-gray-400 font-medium text-sm">8%</p>
            </div>
            <div className="flex">
                <p className="sans-serif text-gray-400 font-medium text-[11px]">Sell</p>
                <hr className="bg-red-500  w-[70px] md:w-[100px] h-[5px] rounded-xl mt-2 mr-2 ml-2"/>
                <p className="sans-serif text-gray-400 font-medium text-sm">16%</p>
            </div>



        </div>


        </div>




</div>
)
    }

export default Sentiment