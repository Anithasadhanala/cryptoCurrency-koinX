
import Navbar from "../../components/Navbar"
import Headroom from "react-headroom"
import GetStarted from "@/components/GetStarted"
import TrendingCoins from "@/components/TrendingCoins"
import TabsList from "@/components/TabsList";
import BreadBoard from "@/components/BreadBoard";
import PerformanceBoard from "@/components/PerformanceBoard";
import Sentiment from "@/components/Sentiment";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import Team from "@/components/Team";
import AlsoLike from "@/components/AlsoLike";

const CurrencyItem = () =>(
     
<div className="overflow-x-hidden ">
    <Headroom>
        <Navbar/>
    </Headroom>

    <div className=" bg-gray-100">
        <BreadBoard/>
    <div className="grid grid-rows-20 grid-cols-6 ">

        <div className=" ml-2 md:ml-12 md:col-span-4  col-span-6 gap-y-4">
            <TabsList/>
            <PerformanceBoard/>
            <Sentiment/>
            <About/>
            <Tokenomics/>
            <Team/>
        </div>
        <div className="md:col-span-2  col-span-6 "><GetStarted/> <TrendingCoins/></div>
        <div className="bg-white md:col-span-full col-span-6 h-[200px]">


            <AlsoLike/>
        </div>
    </div>  
</div>
</div>
)

export default CurrencyItem