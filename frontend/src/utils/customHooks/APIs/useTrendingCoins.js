import { useState, useEffect } from "react";
import {trendingCoinsGetUrl} from "../../constants"


const useTrendingCoins = () =>{
    const [trendingData, setTrendingData] = useState([]);
    const url = trendingCoinsGetUrl

  
    useEffect(() => {

        const fetchTrendingData = async() =>{
            const response = await fetch(url);
            if(response.ok){
                const body = await response.json();
                setTrendingData(body.coins)
            }
        }
        fetchTrendingData()
      
      },[]);



      return trendingData
}

export default useTrendingCoins