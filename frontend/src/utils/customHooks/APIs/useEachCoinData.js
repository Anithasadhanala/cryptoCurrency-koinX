import { useEffect,useState } from "react";
import {coinSingleDataUrl} from "../../constants"


const useEachCoinData = () =>{

     const [coin,setCoin] = useState([]);
  
     useEffect(()=>{
        const coinsfetchAPI = async() => {
            const url = coinSingleDataUrl

            const response = await fetch(url)
            if(response.ok){
                const data = await response.json()
                console.log(data,"===============")
                setCoin(data)
            }
        }
        coinsfetchAPI() 
    },[])

    return coin

}

export default useEachCoinData