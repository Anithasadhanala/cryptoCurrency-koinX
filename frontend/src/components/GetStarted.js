import ArrowBtn from "./ui/ArrowBtn"


const GetStarted = ()=>(
    <div className="bg-blue-600 rounded-xl h-100 flex flex-col justify-center items-center ml-3 mr-3 md:ml-4 md:mr-4  pt-6 pb-4 mt-4">
        <h1 className="sans-serif text-white font-medium text-xl w-56 text-center">Get Started with KoniX for FREE</h1>
        <p className="sans-serif text-white font-normal text-xs w-52 md:w-72 text-center mt-5 ">With our range of features that you can equip for free KoniX allows you to be more educated and aware of your reports.</p>
        <img className="h-[200px] w-[200px]" src="/favicon/getStarted.png" alt="get started"/>
        <ArrowBtn details="Get Started fo FREE"/>
    </div>

)

export default GetStarted