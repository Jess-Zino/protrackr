import {Form, Input, Button} from 'antd'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="flex flex-row w-[100vw] h-[100vh] ">
    <div className="flex flex-col items-start justify-center flex-[.7] bg-[#7A5DC7]  px-[60px] ">
        <h1 className="main-font text-[80px] text-white"> ProTrackr</h1>
        <p className="body-font text-[20px] text-white">Project Mastery Starts Now</p>
    </div>
    <div className="flex-[1] flex flex-col items-center justify-center">
        <h1 className=" main-font text-4xl text-[#7A5DC7] tablet:text-[40px] phone:text-[30px] tablet:text-center phone:text-center">Login</h1>
        <Form className='body-font flex flex-col tablet:justify-center phone:justify-center tablet:items-center phone:items-center tablet:w-[80vw] phone:w-[80vw]  tablet:mx-auto phone:mx-auto'
        layout='vertical'>
            <Form.Item
            className=''
            label="Email"
            name="email"
            rules={[{ type: 'email', required: true, message: 'Please input a valid email!'}]}
            >
                <Input className=' w-[25vw] body-font border-[#7A5DC7] border-2 tablet:w-[40vw] phone:w-[60vw]'></Input>
            </Form.Item>
            <Form.Item
            className='flex flex-col '
            label="Password"
            name="password"
            rules={[{ type: 'password', required: true, message: 'Cannot be leftt blank'}]}
            >
                <div className='flex flex-col gap-1 '>
                <Input type="password" className=' w-[25vw] body-font border-[#7A5DC7] border-2 tablet:w-[40vw] phone:w-[60vw]'></Input>
                <Link className='text-right text-[#33333377] hover:text-[#7A5DC7]'>Forgot Password?</Link>
                </div>
            </Form.Item>
           
            <Form.Item>
                <div className='flex flex-col gap-1 items-center'>
          <Button className='  hover:bg-[#A982E7] w-[25vw] body-font bg-[#7A5DC7] text-white border-none'
            htmlType="submit"
          >
            Log in
          </Button>
          <p className='text-center'>
            <span className='text-center text-[#33333377]'>Don’t have an account? <Link to="/signup" className="text-[#A982E7] underline hover:text-[#7A5DC7]">Create one now!</Link></span>
          </p>
          </div>
      </Form.Item>
        </Form>
    </div>
</div>
  )
}

export default Login