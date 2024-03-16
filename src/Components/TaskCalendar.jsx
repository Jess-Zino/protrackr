import { Calendar, theme } from 'antd';
const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};
const TaskCalendar = () => {
    const { token } = theme.useToken();
  const wrapperStyle = {

    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    
  };
  return (
    <div style={wrapperStyle} className="body-font h-[55vh] phone:h-[40vh] tablet:h-[30vh]">
    <Calendar className="body-font phone:h-[40vh]" fullscreen={false} onPanelChange={onPanelChange} />
  </div>
  )
}

export default TaskCalendar