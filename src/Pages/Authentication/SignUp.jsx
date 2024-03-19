import React from 'react'

const SignUp = () => {
  return (
    <div>SignUp</div>
  )
}

export default SignUp
/*import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
//import firebase from 'firebase/app';
//import 'firebase/auth';
//import 'firebase/database';
const SignUp = () => {
  const history = useHistory();

  const onFinish = async (values) => {
      try {
          // Register user with email and password
          const userCredential = await firebase.auth().createUserWithEmailAndPassword(values.email, values.password);
          
          // Store additional user data in Firebase Realtime Database
          await firebase.database().ref('users/' + userCredential.user.uid).set({
              firstName: values.fnam,
              lastName: values.lnam,
              email: values.email,
              phone: values.phone
          });

          // Redirect to the desired page after successful registration
          history.push('/dashboard');
      } catch (error) {
          console.error('Error registering user:', error);
      }
  };
    return (
        <div className="flex flex-row w-full h-full phone:flex-col tablet:flex-col">
            <div className="flex flex-col items-start justify-center flex-3/5 bg-purple-700 px-12 phone:flex-2/5 tablet:flex-1/2 phone:x-auto tablet:x-auto tablet:items-center phone:items-center gap-4 tablet:rounded-bl-full phone:rounded-bl-2xl tablet:rounded-br-full phone:rounded-br-2xl">
                <div>
                    <h1 className="main-font text-5xl text-white tablet:text-5xl phone:text-3xl"> ProTrackr</h1>
                    <p className="body-font text-lg text-white">Project Mastery Starts Now</p>
                </div>
                <Link to="/">
                    <Button className='body-font bg-purple-900 text-white border-none flex items-center justify-center pr-8 custom-button'>
                        <ArrowLeftOutlined />Learn More
                    </Button>
                </Link>
            </div>

            <div className="flex-2/5 flex flex-col items-center justify-center">
                <h1 className="main-font text-4xl text-purple-700 tablet:text-5xl phone:text-3xl text-center">Sign Up</h1>
                <Form className='body-font flex flex-col tablet:justify-center phone:justify-center tablet:items-center phone:items-center tablet:w-4/5 phone:w-4/5 mx-auto gap-0' layout='vertical' onFinish={onFinish}>
                    <Form.Item className='body-font' label="First Name" name="fnam" rules={[{ required: true, message: 'Enter Your First Name', }]}>
                        <Input className='body-font w-4/5 border-purple-700 border-2 tablet:w-2/3 phone:w-3/4' />
                    </Form.Item>
                    <Form.Item className='body-font' label="Last Name" name="lnam" rules={[{ required: true, message: 'Enter Your Last Name', }]}>
                        <Input className='body-font w-4/5 border-purple-700 border-2 tablet:w-2/3 phone:w-3/4' />
                    </Form.Item>
                    <Form.Item name="email" label="Email" rules={[{ type: 'email', required: true, message: 'Please input a valid email!' }]}>
                        <Input className='body-font w-4/5 border-purple-700 border-2 tablet:w-2/3 phone:w-3/4' />
                    </Form.Item>
                    <Form.Item name="phone" label="Phone Number" rules={[{ required: true, message: 'Please input your phone number!' }]}>
                        <Input className='body-font border-purple-700 border-2 tablet:w-2/3 phone:w-3/4' />
                    </Form.Item>
                    <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please input a valid email!' }]}>
                        <div className='flex flex-col gap-1 phone:flex-col'>
                            <Input type="password" className='body-font w-4/5 border-purple-700 border-2 tablet:w-2/3 phone:w-3/4' />
                            <Link className='text-right text-gray-600 hover:text-purple-700'>Forgot Password?</Link>
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <div className='flex flex-col gap-1 items-center'>
                            <Button className='custom-button-hover hover:bg-purple-900 w-4/5 body-font bg-purple-700 text-white border-none tablet:w-2/3 phone:w-3/4' htmlType="submit">
                                Sign Up
                            </Button>
                            <p className='text-center text-gray-600'>
                                <span className='text-center'>Already have an account? <Link to="/login" className="text-purple-900 underline hover:text-purple-700">Login now!</Link></span>
                            </p>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default SignUp;*/
