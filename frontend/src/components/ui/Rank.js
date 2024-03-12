const Rank = (props) =>{


    const {details} = props
    return(
        <div className="bg-gray-500 rounded-lg p-1 w-[70px] h-[30px] flex justify-center">
            <h1 className="text-white sans-serif fond-semibold text-[13px] ">Rank #{details}</h1>
        </div>
    )
}

export default Rank