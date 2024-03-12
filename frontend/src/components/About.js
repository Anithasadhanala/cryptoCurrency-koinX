import ArrowBtn from "./ui/ArrowBtn"

const About = () => (
    <div className="bg-white rounded-xl p-4 mt-10 ">
        <h1 className="sans-serif  text-black font-medium text-xl mb-5">About Bitcoin</h1>

    <div className="flex flex-col">
        <h1 className="sans-serif  text-black font-medium text-md mb-2">What is Bitcoin</h1>
        <p className="sans-serif text-gray-500 font-medium text-[12px] mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>

    <hr className="bg-gray-300 mt-3 mb-3"/>


    <div className="flex flex-col">
        <h1 className="sans-serif  text-black font-medium text-md mb-2">Lorem ipsum dolor sit amet</h1>
        <p className="sans-serif text-gray-500 font-medium text-[12px] mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p className="sans-serif text-gray-500 font-medium text-[12px] mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p className="sans-serif text-gray-500 font-medium text-[12px] mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        
    </div>

    <hr className="bg-gray-300 mt-3 mb-3"/>

    <div className="flex flex-col">
    <h1 className="sans-serif  text-black font-medium text-md mb-2">Already holding Bitcoin?</h1>
    <div className="flex flex-col md:flex-row">

 
        <div className="flex rounded-lg h-[110px] md:h-[180px]  mr-1 md:mr-6 p-4 bg-gradient-to-r mb-4 md:mb-0 from-green-500 to-blue-500">
            <img  className="rounded-lg w-[80px] h-[80px]  md:h-[140px] md:w-[140px]" src="/favicon/stocks-image.png" alt="alreay-image"/>
            <div className="flex flex-col ml-5">
                <h1 className="sans-serif text-white font-large  text-md md:text-xl  mb-1 md:mb-3">Calculate your Profits</h1>
                <ArrowBtn details="Check Now"/>
            </div>
        </div>

        <div className="flex rounded-lg h-[110px] md:h-[180px] mr-1 md:mr-6 p-4 bg-gradient-to-r from-orange-500 to-red-500">
            <img  className="rounded-lg w-[80px] h-[80px]  md:h-[140px] md:w-[140px]" src="/favicon/stocks-image.png" alt="alreay-image"/>
            <div className="flex flex-col ml-5">
                <h1 className="sans-serif text-white font-large text-md md:text-xl  mb-1 md:mb-3">Calculate  tax liability</h1>
                <ArrowBtn details="Check Now"/>
            </div>
        </div>
    </div>

    <hr className="bg-gray-300 mt-3 mb-3"/>

    <p className="sans-serif text-gray-500 font-medium text-[12px] mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      



    </div>

    
    

    </div>
    
)

export default About