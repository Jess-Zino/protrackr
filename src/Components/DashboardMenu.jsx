import React from 'react';
import {Button} from 'antd'
import { useNavigate } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
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

const icons = {
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
};

const items = [
  { key: '1', icon: 'HomeOutlined', label: 'Dashboard' },
  { key: '2', icon: 'ProjectOutlined', label: 'Projects' },
  { key: '3', icon: 'SolutionOutlined', label: 'Tasks' },
  { key: '4', icon: 'CalendarOutlined', label: 'Calendar' },
  { key: '5', icon: 'TeamOutlined', label: 'Teams' },
  { key: '6', icon: 'FileTextOutlined', label: 'Reports' },
  { key: '7', icon: 'BellOutlined', label: 'Notifications' },
  { key: '8', icon: 'SettingOutlined', label: 'Settings' },
  { key: '9', icon: 'QuestionCircleOutlined', label: 'Help' },
  { key: '10', icon: 'LogoutOutlined', label: 'Logout' },
];

const MenuItem = ({ icon, label, onClick }) => {
  const IconComponent = icons[icon];
  return (
    <div className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-200" onClick={onClick}>
      <IconComponent />
      <span>{label}</span>
    </div>
  );
};

const DashBoardMenu = ({ collapsed, toggleCollapse }) => {
  const navigate = useNavigate();

  return (
    <div className={`flex flex-col ${collapsed ? 'justify-end h-screen' : 'h-1/2'}`}>
      {collapsed && (
        <div className="p-4 text-white main-font text-[20px] text-center pt-[20px]">
          {collapsed ? 'ProT' : 'Protrackr'}
        </div>
      )}
      <div className="flex flex-col flex-grow overflow-auto">
        {items.map(({ key, icon, label }) => (
          <MenuItem key={key} icon={icon} label={label} onClick={() => navigate(`/${label.toLowerCase()}`)} />
        ))}
      </div>
      {!collapsed && (
        <Button
          className="text-white bg-blue-300"
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggleCollapse}
          style={{
            margin: '0 auto',
            fontSize: '16px',
            width: 'fit-content',
            height: 'fit-content',
            padding: '10px',
          }}
        />
      )}
    </div>
  );
};

export default DashBoardMenu;
