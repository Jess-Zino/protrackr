import {Badge, Avatar, Layout} from 'antd'
import {Link} from 'react-router-dom'
import {
  BellOutlined,
  SettingOutlined
} from '@ant-design/icons'
import PropTypes from 'prop-types'
const DashboardHeader = ({pagename}) => {
  const {Header } = Layout;
  return (
    <div>
       <Header className='bg-white fixed w-[95vw] phone:w-[90vw] my-[5px]'
       style={{
        margin:"0 0 0 -20px",
        zIndex:"1000"
       }}>
            <div className='flex flex-row justify-between items-center'>
            <h2 className='main-font text-[#7A5DC7] text-[30px] phone:text-[20px]'>{pagename}</h2>
            <div className='flex flex-row justify-between gap-5 items-center'>
            <Link to='/settings'>
            <SettingOutlined className='text-[#7A5DC7] text-[19px]'/>
            </Link>
            <Link to='/notifications'>
            <Badge  count={2} className='text-red-600' size='small'>
           
            <BellOutlined className='text-[#7A5DC7] text-[19px] ' />
            
            </Badge>
            </Link>
            <Badge dot>
    
            <Avatar shape='square' size={{ xs: 30, sm: 30, md: 30, lg: 30, xl: 30, xxl: 40 }} style={{ backgroundColor: '#7A5DC7', color: 'white' }}>JA</Avatar>
            </Badge>
            </div>
            </div>
            

        </Header>
    </div>
  )
}

export default DashboardHeader
DashboardHeader.propTypes ={
  pagename: PropTypes.string
}