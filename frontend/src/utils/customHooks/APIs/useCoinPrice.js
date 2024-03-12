import { useEffect,useState } from "react";
import {coinPriceUrl} from "../../constants"


const useCoinPrice = ()=>{

    const [coinPrice, setCoinPrice] = useState({})

    const url = coinPriceUrl + "?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true"
    

    console.log(url,"++++++++++++++++++++")

    useEffect(()=>{
        const coinsfetchPriceAPI = async() =>{

            const response = await fetch(url)
           
                if(response.ok){
                    const data = await response.json()
                    
                    const dist = {
                        "inr": data?.bitcoin?.inr,
                        "usd":data?.bitcoin?.usd,
                    }

                    setCoinPrice(dist)
                }
        }
        coinsfetchPriceAPI()
    },[])
    return coinPrice
}


export default useCoinPrice