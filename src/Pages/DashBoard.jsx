import {useNavigate} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import {UserOutlined,
    HomeOutlined,
    ProjectOutlined,
    SolutionOutlined,
    CalendarOutlined,
    TeamOutlined,
    FileTextOutlined,
    BellOutlined,
    SettingOutlined,
    QuestionCircleOutlined,
    LogoutOutlined,

} from '@ant-design/icons';
import { Layout, Menu} from 'antd';
import DashboardHeader from '../Components/DashboardHeader';
import HomePage from './Dashboard Content/HomePage';
import Projects from './Dashboard Content/Projects';
import TasksPage from './Dashboard Content/TasksPage';
import Teams from './Dashboard Content/Teams';
import Reports from './Dashboard Content/Reports';
import Setting from './Dashboard Content/Setting';
import Notifications from './Dashboard Content/Notifications';
import CalendarPage from './Dashboard Content/CalendarPage';
import Help from './Dashboard Content/Help';
import Profile from './Dashboard Content/Profile';
const {Content, Footer, Sider } = Layout;

  const icons = [
    { key: '1', icon: <HomeOutlined />, label: 'Dashboard' },
    { key: '2', icon: <ProjectOutlined />, label: 'Projects' },
    { key: '3', icon: <SolutionOutlined />, label: 'Tasks' },
    { key: '4', icon: <CalendarOutlined />, label: 'Calendar' },
    { key: '5', icon: <TeamOutlined />, label: 'Teams' },
    { key: '6', icon: <FileTextOutlined />, label: 'Reports' },
    { key: '7', icon: <BellOutlined />, label: 'Notifications' },
    { key: '8', icon: <SettingOutlined />, label: 'Settings' },
    { key: '9', icon: <QuestionCircleOutlined />, label: 'Help' },
    { key: '10', icon: <UserOutlined />, label: 'Profile' },
    { key: '11', icon: <LogoutOutlined />, label: 'Logout' },
  ];
  
  
  const items = icons.map((item) => ({
    key: `/${item.label.toLowerCase()}`,
    icon: item.icon, // Accessing the icons array directly
    label: item.label,
  }));
  
  

const DashBoard = () => {
    const navigate =  useNavigate()
    const location = useLocation()
    const currentPath = location.pathname;
    const dashName = (str)=>{
      const newstr = str.slice(1, str.length)
      return newstr[0].toUpperCase() + newstr.slice(1)
    }
  return (
    <Layout hasSider className='flex flex-col'>
      <Sider trigger={null}  collapsed={true}
      className=' flex flex-col h-[100vh]  overflow-auto z-[1001] left-0 bottom-0 w-[20px]'
        style={{
          position: 'fixed',
          background:'#7A5DC7',
         
        }}
      >
        <div className="demo-logo-vertical  " />
        <div className='flex flex-col justify-center gap-3 mb-6 '>
        <h4 className='text-white main-font text-[15px] text-center pt-[20px] '>ProTrackr</h4>
       
          </div>
        <Menu className="bg-[#7A5DC7] text-white"   mode="inline" defaultSelectedKeys={['4']} items={items}   onClick={(item)=>{
            navigate(item.key)
        }} />   
      </Sider>
      <Layout 
        style={{
            paddingLeft:"10px",
          marginLeft: '90px', // No need for margin on mobile
          minHeight: '100vh',

        }}
      >
       <DashboardHeader pagename={dashName(currentPath)}/>       
         <Content className='flex flex-col gap-3'
          style={{
            margin: '10vh 14px 10vh 4px ',

          }}
        >
          {currentPath == '/dashboard'? <HomePage/>:currentPath == '/projects'? <Projects/>:currentPath == '/tasks'? <TasksPage/>:currentPath == '/teams'? <Teams/>:currentPath == '/reports'? <Reports/>:currentPath == '/settings'? <Setting/>:currentPath == '/notifications'? <Notifications/>:currentPath == '/calendar'? <CalendarPage/>:currentPath == '/help'? <Help/>:currentPath == '/profile'? <Profile/>:navigate('/')}
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          ProTrackr ©{new Date().getFullYear()} Created by Aki Jessica
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashBoard;
