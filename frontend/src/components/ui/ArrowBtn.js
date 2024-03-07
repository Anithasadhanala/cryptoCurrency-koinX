import { FaArrowRight } from "react-icons/fa6";

const ArrowBtn = (props)=>{

    const {details} = props;
    

return(
    <div className="">
        <button type="button" className="bg-white text-black rounded-md p-2 text-sm text-small"><span className="flex">{details}&nbsp; <FaArrowRight className="mt-1"/> </span></button>
    </div>
)
}

export default ArrowBtn