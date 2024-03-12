import { HiMiniNewspaper } from "react-icons/hi2";



const Event = (props)=>{
    const {details} = props
    const {icon, color,bgColor} = details

    const fonts = "flex justify-center items-center  rounded-full p-3 h-[30px] w-[30px] md:mr-2 mr:0 " + color 

    const contFonts ="bg-gray-100 p-3 mr-2 md:mr-6 rounded-lg mb-6 " + bgColor
    

    return(

        <div className={contFonts}>
            <div className="flex md:flex-start flex-col md:flex-row justify-center items-center md:items-start">
                <div className={fonts}>
                    <HiMiniNewspaper className="min-h-[15px] min-w-[15px]"/>
                </div>
                <div className="flex flex-col">
                    <h1 className="sans-serif text-gray-700 font-medium text-[14px] mb-2">LoremIpsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt</h1>
                    <p className="sans-serif text-gray-500 font-medium text-[12px]">LoremIpsum dolor sit amet consectetur.psum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tinciduntLoremIpsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt</p>
                </div>
            </div>
        </div>

    )
}
export default Event