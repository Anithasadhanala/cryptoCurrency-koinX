import { MdInfo } from "react-icons/md";


const SubInfo = (props)=>{

    const {details} = props
    return(
        <div className="flex mb-5 mt-0 md:mt-6">
            <h1 className="sans-serif  text-black font-medium text-md ">{details}</h1>
            <MdInfo className=" mt-1 md:mt-1 ml-2 text-gray-400"/>
            </div>
    )
}

export default SubInfo

