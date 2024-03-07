import TeamMember from "./TeamMember"
import {teamMembersList} from "../utils/constants"

const Team = () =>(

    <div className="bg-white rounded-xl p-4 mt-10 mb-6 ">
        <h1 className="sans-serif t text-black font-medium text-xl mb-5">Team</h1>
        <p className="sans-serif text-gray-500 font-medium text-[12px] mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
   

   {teamMembersList.map((each)=><TeamMember details={each} key={each.id}/>)}
   
   
    </div>

)

export default Team