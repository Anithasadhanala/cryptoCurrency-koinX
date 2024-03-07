import { TbChevronsRight } from "react-icons/tb";
import Navbar from "../../components/Navbar"
import Headroom from "react-headroom"
import GetStarted from "@/components/GetStarted"
import TrendingCoins from "@/components/TrendingCoins"
import TabList from "@/components/TabList";


const CurrencyItem = () =>(
     
<div className="overflow-x-hidden ">
    <Headroom>
        <Navbar/>
    </Headroom>


    <div className=" bg-gray-100">
        <div className="flex ml-2 md:ml-12 pt-5 ">
            <p className="sans-serif text-gray-500 font-medium text-md">Crytocurrencies</p>
            <TbChevronsRight className="text-gray-500 mt-1"/>
            <p className="sans-serif text-black font-medium text-md">Bitcoin</p>
        </div>
    <div className="grid grid-rows-20 grid-cols-6 ">

        <div className=" ml-2 md:ml-12 md:col-span-4  col-span-6 gap-y-4">
            <TabList/>
        </div>
        <div className="md:col-span-2  col-span-6 "><GetStarted/> <TrendingCoins/></div>
        <div className="bg-blue-500 md:col-span-full col-span-6 h-[200px]">3</div>
    </div>  
</div>
</div>
)

export default CurrencyItem