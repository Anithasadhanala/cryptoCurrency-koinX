
import Navbar from "../../components/Navbar"
import Headroom from "react-headroom"
import GetStarted from "@/components/GetStarted"
import TrendingCoins from "@/components/TrendingCoins"
import TabsList from "@/components/TabsList";
import BreadBoard from "@/components/BreadBoard";
import AlsoLike from "@/components/AlsoLike";
import TradingViewWidget from "@/components/TradingViewWidget";
import Rank from '../../components/ui/Rank';
import Percentage from '../../components/ui/Percentage';
import useCoinPrice from "@/utils/customHooks/APIs/useCoinPrice";
import useEachCoinData from "@/utils/customHooks/APIs/useEachCoinData";
import CoinContext from "../../context/CoinContext"



const CurrencyItem = () =>{


    const data = useCoinPrice()
   
    const coinData=useEachCoinData()

    console.log(coinData,"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

    return(
     
<div className="overflow-x-hidden">
    <Headroom>
        <Navbar/>
    </Headroom>

    <div className=" bg-gray-100">

        <BreadBoard/>

    <div className="grid grid-rows-20 grid-cols-6 ">

        <div className=" ml-2 md:ml-12 md:col-span-4  col-span-6 gap-y-4">

        <div className="mt-3 px-2 h-[500px] mb-10 bg-white w-100 rounded-lg p-3 pl-3">
        <div className="flex flex-col mb-4">
            <div className="flex">
                <img className=" mr-4 h-[35px] w-[35px]" src={coinData?.image?.small} alt="coin"/>
                <h1 className='sans-serif  text-black font-medium text-xl mb-5  mr-3 md:mr-4' >{coinData?.name}</h1>
                <p className="sans-serif text-gray-600 font-medium text-[12px] mb-2 mr-3 md:mr-6 mt-2 md:mt-1">{coinData?.symbol?.toUpperCase()}</p>
                <Rank details={coinData?.market_cap_rank}/>
            </div>

            <div className="flex">
                <div className="flex flex-col">
                    <h1 className='sans-serif  text-black font-bold text-2xl mb-2 mr-4'>${data?.usd}</h1>
                    <p className='"sans-serif  text-gray-600 font-medium text-sm mb-2"'>&#8377; {data?.inr}</p>
                </div>
                <Percentage details="0.23"/>
                <p className="sans-serif text-gray-500 font-medium text-[12px] mb-2 ml-4">(24H)</p>
             </div>
        </div>
            <TradingViewWidget/>
        </div>



            <TabsList/>
           
        </div>
        <div className="md:col-span-2  col-span-6 "><GetStarted/> <TrendingCoins/></div>
        <div className="bg-white md:col-span-full col-span-6 h-[200px]">


            <AlsoLike/>
        </div>
    </div>  
</div>
</div>
)
    }

export default CurrencyItem