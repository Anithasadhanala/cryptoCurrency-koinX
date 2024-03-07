import AlsoLikeItem from "./AlsoLikeItem"


const AlsoLike = () =>{


    return(
        <div  className="bg-white rounded-xl p-4 mt-10 ">
            <h1 className="sans-serif  text-black font-medium text-xl mb-5">
                You May Also Like
               
            </h1>
<div class="flex flex-col md:flex-row">
            <AlsoLikeItem/>
            <AlsoLikeItem/>
            <AlsoLikeItem/>
            <AlsoLikeItem/>
            <AlsoLikeItem/>
            <AlsoLikeItem/>

            </div>

            <h1 className="sans-serif  text-black font-medium text-xl mb-5">
              Trending Coins
               
            </h1>
            <div class="flex flex-col md:flex-row">
            <AlsoLikeItem/>
            <AlsoLikeItem/>
            <AlsoLikeItem/>
            <AlsoLikeItem/>
            <AlsoLikeItem/>
            <AlsoLikeItem/>
            </div>



        </div>
    )

}

export default AlsoLike