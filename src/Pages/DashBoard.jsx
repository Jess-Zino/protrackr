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
import { Layout, Menu, Badge,  Avatar} from 'antd';
const {Header,   Content, Footer, Sider } = Layout;

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
          marginLeft: '75px', // No need for margin on mobile
          minHeight: '100vh',
        }}
      >
        <Header className='bg-[#7A5DC7] fixed w-[93vw] phone:w-[87vw] rounded-tl-[30px] rounded-tr-[30px] my-[5px]'>
            <div className='flex flex-row justify-between items-center'>
            <h2 className='main-font text-white text-[30px] phone:text-[20px]'>Dashboard</h2>
            <div className='flex flex-row justify-between gap-5 items-center'>
            <SettingOutlined className='text-white text-[19px]'/>
            <Badge  count={2} className='text-red-600' size='small'>

            <BellOutlined className='text-white text-[19px] ' />
            </Badge>
            <Badge dot>
    
            <Avatar shape='square' size={{ xs: 30, sm: 12, md: 15, lg: 22, xl: 30, xxl: 40 }} style={{ backgroundColor: '#A982E7', color: 'white' }}>JA</Avatar>
            </Badge>
            </div>
            </div>
            
        </Header>{/*
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: 'white',
            
            }}
          >
            <p>long content</p>
            
          </div>
        </Content>*/}
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
