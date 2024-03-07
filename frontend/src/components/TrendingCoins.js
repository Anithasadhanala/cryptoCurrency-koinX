import useTrendingCoins from "../utils/customHooks/useTrendingCoins.js"
import CoinItem from "./CoinItem.js";

const TrendingCoins = () =>{

    const data = useTrendingCoins();
   
    return(
        <div className="bg-white rounded-lg min-h-[56px] ml-3 mr-3 md:ml-4 md:mr-4  pt-2 pl-4 pb-4 mt-4 mb-4">
            <h1 className="sans-serif text-black font-medium text-xl mb-4"> Trending Coins &nbsp; (24h)</h1>
            <ul>
                {data.map(each=><CoinItem details={each.item} key={each.item.coin_id}/>)}
            </ul>
        </div>
    )
}

export default TrendingCoins