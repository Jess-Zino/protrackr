import { Calendar, theme } from 'antd';
const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};
const TaskCalendar = () => {
    const { token } = theme.useToken();
  const wrapperStyle = {
    width: "100%",
    height:"50vh",
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    
  };
  return (
    <div style={wrapperStyle} className="body-font">
    <Calendar className="body-font" fullscreen={false} onPanelChange={onPanelChange} />
  </div>
  )
}

export default TaskCalendar