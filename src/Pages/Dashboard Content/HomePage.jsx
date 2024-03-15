import BubblesCard from "../../Components/Bubbles/BubblesCard"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import {ArrowRightOutlined } from '@ant-design/icons'
import TaskCard from "../../Components/TaskCard"
const HomePage = () => {
  return (
    <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
        <h2 className="main-font text-[15px] text-[#7A5DC7]">Projects <ArrowRightOutlined /></h2>
         <div className='flex flex-row gap-[3%]'>
            
            <BubblesCard size={20} content={
            <div className="flex flex-col items-center gap-4">
                <CircularProgress value={68} size='70px' thickness='10px' color="#A982E7">
                    <CircularProgressLabel className='body-font'>68%</CircularProgressLabel>
                    </CircularProgress>
                  <h4 className="body-font">Baking Cookies</h4>  
                    </div>}/>
            <BubblesCard size={20} content={
            <div className="flex flex-col items-center gap-4">
                <CircularProgress value={20} size='70px' thickness='10px' color="#A982E7">
                    <CircularProgressLabel className='body-font'>20%</CircularProgressLabel>
                    </CircularProgress>
                  <h4 className="body-font">FoodWorld</h4>  
                    </div>}/>
        <BubblesCard size={20} content={
            <div className="flex flex-col items-center gap-4">
                <CircularProgress value={90} size='70px' thickness='10px' color="#A982E7">
                    <CircularProgressLabel className='body-font'>90%</CircularProgressLabel>
                    </CircularProgress>
                  <h4 className="body-font">Canyon Valley</h4>  
                    </div>}/>
            <BubblesCard size={20} content={
            <div className="flex flex-col items-center gap-4">
                <CircularProgress value={60} size='70px' thickness='10px' color="#A982E7">
                    <CircularProgressLabel className='body-font'>60%</CircularProgressLabel>
                    </CircularProgress>
                  <h4 className="body-font">30day Challenge</h4>  
                    </div>}/>
            </div>
            </div>
            <div className="flex flex-col gap-3">
        <h2 className="main-font text-[15px] text-[#7A5DC7]">Tasks <ArrowRightOutlined /></h2>
         <div className='flex flex-row gap-[3%]'>
            
            <BubblesCard size={30} height={40} content={
                <TaskCard/>
            }/>
                 </div>
            </div>
    </div>
  )
}

export default HomePage