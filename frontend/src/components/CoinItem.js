import Percentage from "./ui/Percentage";

const CoinItem = (props)=>{
    const {details} = props;
    const {name,symbol,small,data} = details;
    const {price_change_percentage_24h} = data
    const {aed} = price_change_percentage_24h

    const percentage = aed.toFixed(2);
    
    return(
        <div className="flex justify-between mr-4 mb-3">
            <div className="flex">
                <img src={small}  class="h-[22px] w-[22px] md:h-[30px] md:w-[30px]" alt={name}/>
                <h1 className="sans-serif text-black  font-medium pt-0 md:pt-1 pl-3 text-[12px] md:text-sm ">{name} ({symbol})</h1>
            </div>
        
            <Percentage details={percentage} />
        </div>
    )
}

export default CoinItem