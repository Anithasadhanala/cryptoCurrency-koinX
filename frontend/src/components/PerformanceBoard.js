import { useContext } from "react"
import PerformanceItem from "./PeformanceItem"

import SubInfo from "./ui/SubInfo"
import CoinContext from "../context/CoinContext"


const PerformanceBoard = () => {

    const data = useContext(CoinContext)

return(
    
         <div className="bg-white rounded-md p-4 ">

            <h1 className="sans-serif t text-black font-medium text-xl mb-5">Performance</h1>
        <div className="flex flex-col mb-10">
            <PerformanceItem/>
            <PerformanceItem/>
            </div>
        
            <SubInfo details="Fundamentals"/>

            <div className="flex flex-grow flex-col md:flex-row">
               
                <div className="flex flex-col  md:mr-10 md:w-[400px]">
                    <div className="flex flex-col mb-2">
                        <div className="flex justify-between">
                            <p className="sans-serif  text-zinc-500 font-medium text-[13px]">BitCoin Price</p>
                            <p className="sans-serif t text-black font-medium text-[12px]">$16,815.46</p>

                        </div>
                        <hr className="bg-gray-300 mt-2"/>
                    </div>

                    <div className="flex flex-col mb-2">
                        <div className="flex justify-between">
                            <p className="sans-serif  text-zinc-500 font-medium text-[13px]">24h Low / 24h High</p>
                            <p className="sans-serif t text-black font-medium text-[12px]">$16,815.46 / 16,873</p>

                        </div>
                        <hr className="bg-gray-300 mt-2"/>
                    </div>

                    <div className="flex flex-col mb-2">
                        <div className="flex justify-between">
                            <p className="sans-serif  text-zinc-500 font-medium text-[13px]">7d Low / 7d High</p>
                            <p className="sans-serif t text-black font-medium text-[12px]">$16,815.46 / $16,815.46</p>

                        </div>
                        <hr className="bg-gray-300 mt-2"/>
                    </div>

                    <div className="flex flex-col mb-2">
                        <div className="flex justify-between">
                            <p className="sans-serif  text-zinc-500 font-medium text-[13px]">Trading Volume</p>
                            <p className="sans-serif t text-black font-medium text-[12px]">$16,815.46</p>

                        </div>
                        <hr className="bg-gray-300 mt-2"/>
                    </div>

                    <div className="flex flex-col mb-2">
                        <div className="flex justify-between">
                            <p className="sans-serif  text-zinc-500 font-medium text-[13px]">Market Cap </p>
                            <p className="sans-serif t text-black font-medium text-[12px]">#1</p>

                        </div>
                        <hr className="bg-gray-300 mt-2"/>
                    </div>

                    <div className="flex flex-col mb-2">
                        <div className="flex justify-between">
                            <p className="sans-serif  text-zinc-500 font-medium text-[13px]">Market Cap</p>
                            <p className="sans-serif t text-black font-medium text-[12px]">$16,815,099,46</p>

                        </div>
                        <hr className="bg-gray-300 mt-2"/>
                    </div>

                </div>

                <div className="flex flex-col  md:mr-10 md:w-[400px]">
                    <div className="flex flex-col mb-2">
                        <div className="flex justify-between">
                            <p className="sans-serif  text-zinc-500 font-medium text-[13px]"> Market Cap Domi</p>
                            <p className="sans-serif t text-black font-medium text-[12px]">815.46%</p>

                        </div>
                        <hr className="bg-gray-300 mt-2"/>
                    </div>

                    <div className="flex flex-col mb-2">
                        <div className="flex justify-between">
                            <p className="sans-serif  text-zinc-500 font-medium text-[13px]">Volume / Market Cap</p>
                            <p className="sans-serif t text-black font-medium text-[12px]">0.0718</p>

                        </div>
                        <hr className="bg-gray-300 mt-2"/>
                    </div>

                    <div className="flex flex-col mb-2">
                        <div className="flex justify-between">
                            <p className="sans-serif  text-zinc-500 font-medium text-[13px]">All-Time High</p>
                            <p className="sans-serif t text-black font-medium text-[12px]">$16,815.46</p>

                        </div>
                        <hr className="bg-gray-300 mt-2"/>
                    </div>

                    <div className="flex flex-col mb-2">
                        <div className="flex justify-between">
                            <p className="sans-serif  text-zinc-500 font-medium text-[13px]">All-Time Low </p>
                            <p className="sans-serif t text-black font-medium text-[12px]">$16.46</p>

                        </div>
                        <hr className="bg-gray-300 mt-2"/>
                    </div>
                    <div className="flex flex-col mb-2">
                        <div className="flex justify-between">
                            <p className="sans-serif  text-zinc-500 font-medium text-[13px]">BitCoin Price</p>
                            <p className="sans-serif t text-black font-medium text-[12px]">$16,815.46</p>

                        </div>
                        <hr className="bg-gray-300 mt-2"/>
                    </div>
                    <div className="flex flex-col mb-2">
                        <div className="flex justify-between">
                            <p className="sans-serif  text-zinc-500 font-medium text-[13px]">BitCoin Price</p>
                            <p className="sans-serif t text-black font-medium text-[12px]">$16,815.46</p>

                        </div>
                        <hr className="bg-gray-300 mt-2"/>
                    </div>

                </div>
                
            </div>


            
        </div>
    )

}

export default PerformanceBoard