
import Percentage from "./ui/Percentage"




const AlsoLikeItem = (props)=>{


    const {details} = props

    

   

    const {market_cap,price_change_percentage_24h,symbol,small} = ["sdkfj",7,"sdf","sdlfkj"]

       

    return(


    <div className="flex flex-col rounded-lg border-2 w-[250px]  md:w-[200px] h-[100px] p-4 mr-3 mb-3" >
        <div className="flex">
            <img className="h-[30px] w-[30px]" src={small} alt="coin-icon"/>
            <p className="sans-serif  text-black font-medium text-md mb-5 mr-2">{symbol}</p>
         
     <Percentage details={price_change_percentage_24h}/>
        
       
        </div>
        <h1 className="sans-serif  text-black font-medium text-md mb-5">{market_cap}</h1>

    </div>
)

}
export default AlsoLikeItem