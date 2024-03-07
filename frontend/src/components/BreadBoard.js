import { TbChevronsRight } from "react-icons/tb";

const BreadBoard = ()=>{
    return(
        <div className="flex ml-8  md:ml-12 pt-5 ">
            <p className="sans-serif text-gray-500 font-medium text-sm md:text-md">Crytocurrencies</p>
            <TbChevronsRight className="text-gray-500 mt-1"/>
            <p className="sans-serif text-black font-medium text-md">Bitcoin</p>
        </div>
    )
}

export default BreadBoard