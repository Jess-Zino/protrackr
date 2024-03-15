import { useState } from 'react';
import { Avatar, List, Radio, Space } from 'antd';
const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

const TaskCard = () => {
   
  return (
    <div> 
        
  <List
  className='flex flex-col'
  itemLayout='vertical'
    pagination={{"position":"bottom",
    "align":"center"
    }}
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item  className='flex flex-row'>
        <List.Item.Meta className='flex flex-row'
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  /></div>
  )
}

export default TaskCard