import {useNavigate} from 'react-router-dom'
import {
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
    { key: '10', icon: <LogoutOutlined />, label: 'Logout' },
  ];
  
  
  const items = icons.map((item) => ({
    key: `/${item.label.toLowerCase()}`,
    icon: item.icon, // Accessing the icons array directly
    label: item.label,
  }));
  
  

const DashBoard = () => {
    const navigate =  useNavigate()

  return (
    <Layout hasSider className='flex flex-col'>
      <Sider trigger={null}  collapsed={true}
      className=' flex flex-col h-[100vh]  overflow-auto z-[1000] left-0 bottom-0 w-[20px]'
        style={{
          position: 'fixed',
          background:'#7A5DC7'
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
       <DashboardHeader pagename="DashBoard"/>       
         <Content className='flex flex-col gap-3'
          style={{
            margin: '10vh 14px 10vh 4px ',

          }}
        >
           <HomePage/>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashBoard;
