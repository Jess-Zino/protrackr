import { Link } from "react-router-dom"
import {Form, Input, Button} from 'antd'
const SignUp = () => {
  return (
    <div className="flex flex-row w-[100vw] h-[100vh] ">
    <div className="flex flex-col items-start justify-center flex-[.7] bg-[#7A5DC7]  px-[60px] ">
        <h1 className="main-font text-[80px] text-white"> ProTrackr</h1>
        <p className="body-font text-[20px] text-white">Where Projects Meet Precision!</p>
    </div>
    <div className="flex-[1] flex flex-col items-center justify-center">
        <h1 className=" main-font text-4xl text-[#7A5DC7] tablet:text-[40px] phone:text-[30px] tablet:text-center phone:text-center">SignUp</h1>
        <Form className='body-font flex flex-col tablet:justify-center phone:justify-center tablet:items-center phone:items-center tablet:w-[80vw] phone:w-[80vw]  tablet:mx-auto phone:mx-auto gap-[0]' 
        layout='vertical'>
                      <Form.Item
        className='body-font '
        label="First Name"
        name="fnam"
        rules={[
            {
            required: true,
            message: 'Enter Your First Name',
            },
        ]}
    >
      <Input className=' body-font w-[25vw] border-[#7A5DC7] border-2 tablet:w-[40vw] phone:w-[60vw] ' />
    </Form.Item>
    <Form.Item
        className='body-font '
        label="Last Name"
        name="lnam"
        rules={[
            {
            required: true,
            message: 'Enter Your Last Name',
            },
        ]}
    >
      <Input className=' body-font w-[25vw] border-[#7A5DC7] border-2 tablet:w-[40vw] phone:w-[60vw] ' />
    </Form.Item>
            <Form.Item
            className=''
            label="Email"
            name="email"
            rules={[{ type: 'email', required: true, message: 'Please input a valid email!'}]}
            >
                <Input className=' w-[25vw] body-font border-[#7A5DC7] border-2 tablet:w-[40vw] phone:w-[60vw]'></Input>
            </Form.Item>
            <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      
      >
        <Input className=' body-font border-[#7A5DC7] border-2 tablet:w-[40vw] phone:w-[60vw]' />
      </Form.Item>
            <Form.Item
            className='flex flex-col '
            label="Password"
            name="password"
            rules={[{ type: 'password', required: true, message: 'Cannot be leftt blank'}]}
            >
               
                <Input type="password" className=' w-[25vw] body-font border-[#7A5DC7] border-2 tablet:w-[40vw] phone:w-[60vw]'></Input>
                
            </Form.Item>
           
            <Form.Item>
                <div className='flex flex-col gap-1 items-center'>
          <Button className='  hover:bg-[#A982E7] w-[25vw] body-font bg-[#7A5DC7] text-white border-none'
            htmlType="submit"
          >
            Log in
          </Button>
          <p className='text-center'>
            <span className='text-center text-[#33333377]'>Already have an account? <Link to="/login" className="text-[#A982E7] underline hover:text-[#7A5DC7]">Login now!</Link></span>
          </p>
          </div>
      </Form.Item>
        </Form>
    </div>
</div>
  )
}

export default SignUp