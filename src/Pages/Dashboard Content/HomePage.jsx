import BubblesCard from "../../Components/Bubbles/BubblesCard"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import {ArrowRightOutlined } from '@ant-design/icons'
import TaskCard from "../../Components/TaskCard"
import TaskCalendar from "../../Components/TaskCalendar"
const HomePage = () => {
    const projects= [
        {id:1, value:56, task:"30day Challenge"},
        {id:2, value:24, task:"FoodWorld"},
        {id:3, value:79, task:"Baking Cookies"},
        {id:4, value:12, task:"Canyon Valley"},
    ]
  return (
    <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
        <h2 className="main-font text-[15px] text-[#7A5DC7] flex flex-row items-center gap-2">Projects <ArrowRightOutlined /></h2>
         <div className='flex flex-row gap-[3%]  phone:flex-col phone:gap-8'>
            {projects.map((item)=>(
                 <BubblesCard key={item.id} size={20} height={20} content={
                    <div className="flex flex-col items-center gap-4">
                        <CircularProgress value={item.value} size='70px' thickness='10px' color="#A982E7">
                            <CircularProgressLabel className='body-font'>{item.value}%</CircularProgressLabel>
                            </CircularProgress>
                          <h4 className="body-font">{item.task}</h4>  
                            </div>}/>
            ))}
           
           </div>
           </div>
    <div className="flex flex-row gap-4 phone:flex-col">
            <div className="flex flex-col gap-3">
        <h2 className="main-font text-[15px] text-[#7A5DC7]  flex flex-row items-center gap-2 ">Tasks <ArrowRightOutlined /></h2>
         <div className='flex flex-row gap-[3%]'>
            
            <BubblesCard size={30} height={50} content={
                <TaskCard/>
            }/>
            </div>
        </div>
        <div className="flex flex-col gap-3">
        <h2 className="main-font text-[15px] text-[#7A5DC7]  flex flex-row items-center gap-2 ">Calendar <ArrowRightOutlined /></h2>
         <div className='flex flex-row gap-[3%]'>
            
            <BubblesCard size={30} height={70} content={
                <div className="flex flex-col items-center gap-4 p-[20px]">
                    <h2 className="body-font text-[25px]">Upcoming Tasks</h2>
            <TaskCalendar/>
            </div>
            }/>
            </div>
        </div>
        <div className="flex flex-col gap-3">
        <h2 className="main-font text-[15px] text-[#7A5DC7]  flex flex-row items-center gap-2 ">Tasks <ArrowRightOutlined /></h2>
         <div className='flex flex-row gap-[3%]'>
            
            <BubblesCard size={30} height={50} content={
                <TaskCard/>
            }/>
            </div>
        </div>
        
            </div>
    </div>
  )
}

export default HomePage