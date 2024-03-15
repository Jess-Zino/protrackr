import { Calendar, theme } from 'antd';
const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};
const TaskCalendar = () => {
    const { token } = theme.useToken();
  const wrapperStyle = {
    width: "100%",
    height:"45vh",
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    
  };
  return (
    <div style={wrapperStyle} className="body-font phone:h-[40vh]">
    <Calendar className="body-font phone:h-[40vh]" fullscreen={false} onPanelChange={onPanelChange} />
  </div>
  )
}

export default TaskCalendar