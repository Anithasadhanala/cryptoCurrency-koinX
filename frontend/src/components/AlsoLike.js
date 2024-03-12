import AlsoLikeItem from "./AlsoLikeItem"
import { useState } from "react"
import useTrendingCoinsApi from "../utils/customHooks/APIs/useTrendingCoins.js"


const AlsoLike = () =>{



    const coins = []

    return(
        <div  className="bg-white rounded-xl p-4 mt-10 ">


            <h1 className="sans-serif  text-black font-medium text-xl mb-5">
                You May Also Like
               
            </h1>
                <div className="flex flex-col md:flex-row">

            {coins.map((each)=> <AlsoLikeItem key={each.item.coin_id} details={each.item}/>)}


        
            </div>

            <h1 className="sans-serif  text-black font-medium text-xl mb-5">
              Trending Coins
               
            </h1>
            <div className="flex flex-col md:flex-row">
            <AlsoLikeItem/>
            <AlsoLikeItem/>
            <AlsoLikeItem/>
            <AlsoLikeItem/>
            <AlsoLikeItem/>
            <AlsoLikeItem/>
            </div>



        </div>
    )

}

export default AlsoLike