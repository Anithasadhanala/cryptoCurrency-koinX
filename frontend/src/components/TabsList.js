import {Box,Tab}  from "@mui/material"
import {TabContext, TabList,TabPanel} from "@mui/lab"
import {useState} from "react"
import PerformanceBoard from "@/components/PerformanceBoard";
import Sentiment from "@/components/Sentiment";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import Team from "@/components/Team";
import tabItems from "../utils/constants"


const TabsList = ()=>{

 
    const [value,setvalue] = useState("1")

    const handleChange=(event,newValue)=>{
        
        setvalue(newValue)
    }

    return(
        
<Box className="overflow-x-auto mb-6">
    <TabContext value={value}>
        <Box sx={{borderBottom:1, borderColor: "divider"}}>
            <TabList aria-label="Tabs example" onChange={handleChange} variant="scrollable" scrollButtons="auto">
            <Tab label="Overview" className="sans-serif text-grey-500 font-semibold  text-[12px] " value="1"/>
            <Tab label="Fundamentals" className="sans-serif text-grey-500 font-semibold text-[12px]" value="2"/>
            <Tab label="New Insights" className="sans-serif text-grey-500 font-semibold text-[12px]" value="3"/>
            <Tab label="Sentiments" className="sans-serif text-grey-500 font-semibold text-[12px]" value="4"/>
            <Tab label="Team" className="sans-serif text-grey-500 font-semibold text-[12px]" value="5"/>
            <Tab label="Technicals" className="sans-serif text-grey-500 font-semibold text-[12px]"value="6"/>
            <Tab label="Tokenomics" className="sans-serif text-grey-500 font-semibold text-[12px]" value="7"/>
         </TabList>
        </Box>


        <TabPanel value="1">
            <>
            <PerformanceBoard/>
            <Sentiment/>
            <About/>
            <Tokenomics/>
            <Team/>
               
              
               
                
            </>
        </TabPanel>
        <TabPanel value="2">
            <PerformanceBoard/>
        </TabPanel>
        <TabPanel value="3">
            <About/>
        </TabPanel>
        <TabPanel value="4">
            <Sentiment/>
        </TabPanel>
        <TabPanel value="5">
            <Team/>
        </TabPanel>
        <TabPanel value="6">
            <PerformanceBoard/>
        </TabPanel>
        <TabPanel value="7">
            <Tokenomics/>
        </TabPanel>
      
    </TabContext>

</Box>
    )
}

export default TabsList