const TeamMember = (props) =>{

    const {details} = props;
    const {name,designation,image} = details

    return(
        <div className="bg-blue-50 rounded-lg p-5 mb-4">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col mr-6">
                    <img className="h-[110px] md:h-[80px] w-[400px] rounded-md mb-1" src={image} alt="person"/>
                    <h1 className="sans-serif  text-black font-medium text-sm ">{name}</h1>
                    <p className="sans-serif text-gray-500 font-small text-[12px] mb-3 md:mb-0 "> {designation}</p>
                </div>
                <p className="sans-serif text-gray-700 font-base text-[11px] mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    )

}


export default TeamMember