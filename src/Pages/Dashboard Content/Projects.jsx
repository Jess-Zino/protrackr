import {Tabs} from 'antd'
import BubblesCard from "../../Components/Bubbles/BubblesCard"
import AnimatedCircularProgress from '../../Components/AnimatedCircularProgress'

const overviewData = [
  { 
    id: 1, 
    task: "30day Challenge",
    description: "A 30-day fitness challenge",
    startDate: "2024-01-01",
    endDate: "2024-01-30",
    progress: 56
  },
  { 
    id: 2, 
    task: "FoodWorld",
    description: "Developing an online food delivery platform",
    startDate: "2024-02-01",
    endDate: "2024-03-15",
    progress: 24
  },
  { 
    id: 3, 
    task: "Baking Cookies",
    description: "Baking cookies for a charity event",
    startDate: "2024-03-01",
    endDate: "2024-03-10",
    progress: 79
  },
  { 
    id: 4, 
    task: "Canyon Valley",
    description: "Planning a hiking trip to Canyon Valley",
    startDate: "2024-04-01",
    endDate: "2024-04-07",
    progress: 12
  }
];

const items = [
  {
    key: '1',
    label: 'Overview',
    children: <div className="grid grid-cols-3 gap-4 phone:flex phone:flex-col">
    {overviewData.map((item)=>(
                 <BubblesCard key={item.id} size={30} height={40} content={
                    <div className="flex flex-col items-center gap-4">
                        <AnimatedCircularProgress value={item.progress}/>
                        <div className="flex flex-col gap-3">
                          <h4 className="body-font text-[20px] text-center text-[#333] font-bold">{item.task}</h4>
                          <p className="body-font text-[15px] text-[#595959]">{item.description}</p>  
                          <p className="body-font text-[15px] text-[#a5a5a5]"><b className="text-[#595959]">Start Date: </b>{item.startDate}</p> 
                          <p className="body-font text-[15px] text-[#a5a5a5]"><b className="text-[#595959]">End Date: </b>{item.endDate}</p> 
                          </div>
                            </div>}/>
            ))}
    </div>,
  },
  {
    key: '2',
    label: 'Milestones',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Files',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '4',
    label: 'Timeline',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '5',
    label: 'Reports:',
    children: 'Content of Tab Pane 3',
  },
];

const Projects = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} centered className='body-font mt-4 phone:mt-2'/>;
    </div>
  )
}

export default Projects