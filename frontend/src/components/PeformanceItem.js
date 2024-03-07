import ProgressionBar from "./ui/ProgressionBar"



const PerformanceItem = () =>(
    <div className="flex justify-between mt-4">
    <div className="flex flex-col">
        <p className="sans-serif  text-zinc-500 font-medium text-[12px]">Today's Low</p>
        <p className="sans-serif t text-black font-medium text-[12px]">46,930.22</p>
    </div>
    <ProgressionBar/>
    <div className="flex flex-col">
        <p className="sans-serif t text-zinc-500 font-medium text-[12px]">Today's High</p>
        <p className="sans-serif t text-black font-medium text-[12px]">46,930.22</p>
    </div>

</div>
)

export default PerformanceItem