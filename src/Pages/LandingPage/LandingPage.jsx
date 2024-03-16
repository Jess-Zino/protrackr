import {Button, Card, Form, Input} from 'antd'
import hero from "../../images/HeroImage.webp"
import address from '../../images/address.webp'
import phone from '../../images/phone.webp'
import mail from '../../images/mail.webp'
import Navbar from '../../Components/Navbar'
import { Link } from 'react-router-dom'
import InitialLoadAnimation from '../../Animations/InitialLoadAnimation'
import ScrollAnimation from '../../Animations/ScrollAnimation'
import LoadAnimation from '../../Animations/LoadAnimation'
const LandingPage = () => {
    const service =[
        {id:1, text:"Create Projects and Tasks Easily"},
        {id:2, text:"Track Progress and Stay Updated in Real Time"},
        {id:3, text:"Assign Team Members and Set Deadlines"},
        {id:4, text:"Enhance Collaboration with Comments and File Attachments"},
        {id:5, text:"Gain Insights with Reporting and Analytics Tools"},
        ]
    const pricing =[
        {id:1,title:"Basic Plan", price:"$0/month",features:["Up to 5 Projects", "Basic Task Management","Limited Reporting"]},
        {id:1,title:"Standard Plan", price:"$20/month",features:["Up to 20 Projects", "Advanced Task Management", "Full Reporting and Analytics", "Team Collaboration Tools"]},
        {id:1,title:"Premium Plan", price:"$50/month",features:["Unlimited Projects","Priority Support","Custom Branding", "API Access"]},
    ]
    const {TextArea} = Input
   
  return (
    <div className='landing overflow-x-hidden flex flex-col items-center gap-20'>
    <InitialLoadAnimation>
        <header className='hero'>
            <Navbar/>

    <div className="w-[90vw]  flex flex-row items-center mx-auto justify-center tablet:flex-col-reverse phone:flex-col-reverse tablet:text-center phone:text-center ">
      
        <div className=' flex-1  flex flex-col gap-5 '>
            <h1 className='main-font text-[56px] text-white tablet:text-[40px] phone:text-[25px] ' >Unleash Productivity:<br/> Our Ultimate Project Partner</h1>
            <p className='body-font text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illum, repellendus aperiam suscipit aliquid.</p>
            <div className='flex gap-3 body-font tablet:justify-center phone:justify-center'>
            <Button className='body-font bg-[#A982E7] text-white border-none custom-button'>Learn More</Button>
            <Button className='body-font text-[#7A5DC7] bg-white border-none custom-button-hover'><Link to="/signup">Sign Up Now</Link></Button>
            </div>

        </div>

        <div className='right flex-[1.8]'>
            <img src={hero} style={{width:"85%"}}/>
        </div>
    </div>
    </header>
    </InitialLoadAnimation>
   
    <div id="services" className='service w-[100vw]  flex flex-col items-center gap-9 tablet:px-[30px]'>
    <ScrollAnimation id="services" direction='top' threshold={0.4} >
        <div className='flex flex-col items-center gap-2'>
        <h1 className='main-font text-4xl text-[#7A5DC7] tablet:text-[40px] phone:text-[30px] tablet:text-center phone:text-center'>Streamline Your Project Management Process with ProTrackr</h1>
        <p className='body-font text-[#333] tablet:text-center phone:text-center'>Effortlessly Manage Projects, Collaborate with Your Team, and Stay Organized with Our Feature-Rich Project Management Platform.</p>
        </div>
        </ScrollAnimation>
        <ScrollAnimation id="services" direction='left' threshold={0.5} >

        <div className='flex flex-row w-[90vw] gap-6 text-center tablet:flex-col phone:flex-col'>
        {service.map((item)=>(
                <Card key={item.id} className='body-font w-[20vw] h-[35vh] odd:bg-[#7A5DC7] odd:text-white even:bg-white even:border-[#7A5DC7] even:text-[#7A5DC7] font-bold flex justify-center items-center tablet:mx-auto phone:mx-auto tablet:w-[60vw] phone:w-[80vw] tablet:h-[10vh] phone:h-[10vh] tablet:text-2xl phone:text-l '><p>{item.text}</p></Card>
            ))}
            </div>
          
            </ScrollAnimation >

        
    </div>

    <div id="pricing" className='pricing w-[100vw]  flex flex-col items-center gap-9 tablet:px-[30px]'>
        <div className='flex flex-col items-center gap-2'>
        <h1 className='main-font text-4xl text-[#7A5DC7] tablet:text-[40px] phone:text-[30px] tablet:text-center phone:text-center'>Choose the Plan That Fits Your Needs</h1>
        <p className='body-font text-[#333] tablet:text-center phone:text-center'>We Offer Flexible Pricing Plans to Accommodate Teams of All Sizes and Budgets. Get Started Today!</p>
        </div>
       
        <div className='flex flex-row w-[90vw] gap-8 items-center justify-center tablet:flex-col phone:flex-col'>
          
             {pricing.map((item)=>(
                <Card key={item.id} className=' w-[20vw] h-[50vh] flex flex-col justify-center items-center bg-[#A982E7] text-white first:text-[#7A5DC7] first:border-[#7A5DC7] first:bg-[white] last:bg-[#7A5DC7] tablet:mx-auto phone:mx-auto tablet:w-[60vw] phone:w-[80vw] tablet:h-[40vh] phone:h-[40vh] tablet:text-2xl  '>
                    <h1 className='main-font text-3xl mb-7 text-center'>{item.title}</h1>
                    <p className='body-font font-bold text-xl text-center mb-5'>{item.price}</p>
                    <ul className='list-disc body-font'>
                        {item.features.map((opt, index)=><li key={index} className='mb-2'>{opt}</li>)}
                    </ul>
                </Card>
            ))}
            
        </div>
    </div>
    <div id="contact" className='contact flex flex-col gap-6 tablet:px-[30px]'>
    <div className='flex flex-col items-center gap-2'>

        <h1 className='main-font text-4xl text-[#7A5DC7] tablet:text-[40px] phone:text-[30px] tablet:text-center phone:text-center'>Have Questions or Need More Information?</h1>
        <p className='body-font text-[#333] tablet:text-center phone:text-center'>We&apos;re Here to Help! Reach Out to Us for Any Inquiries or to Learn More About Our Project Management Platform.</p>
        </div>
        <div className="w-[80vw]  flex flex-row items-center  text-[#333] tablet:flex-col-reverse phone:flex-col-reverse tablet:w-[100vw] phone:w-[100vw] " style={{ justifyContent:'center'}}>
        <div className='left  flex-1  flex flex-col gap-20 body-font  items-center tablet:flex-row phone:flex-row tablet:mx-auto phone:mx-auto tablet:w-[100vw] phone:w-[90vw] tablet:justify-center phone:justify-center tablet:gap-5 phone:gap-3 phone:text-center text-wrap'>
          <div className='flex flex-row items-center tablet:flex-col phone:flex-col '>
                <img src={address} width={"40px"}/>
                <p>123 Main Street,<br/> Anytown, USA <br/>Postal Code: 12345</p>
          </div>
          <div className='flex flex-row items-center tablet:flex-col phone:flex-col '>
                <img src={phone} width={"40px"}/>
                <p>+1 (555) 123-4567</p>
          </div>
          <div className='flex flex-row items-center tablet:flex-col phone:flex-col '>
                <img src={mail} width={"40px"}/>
                <p> info@yourprotrackr.com</p>
          </div>
        </div>
        <div className='right flex flex-1 body-font tablet:w-[80vw] phone:w-[80vw]  tablet:mx-auto phone:mx-auto tablet:justify-center phone:justify-center tablet:items-center phone:items-center '>
            <Form className='body-font flex flex-col tablet:justify-center phone:justify-center tablet:items-center phone:items-center tablet:w-[80vw] phone:w-[80vw]  tablet:mx-auto phone:mx-auto'
            layout='vertical'>
            <Form.Item
        className='body-font '
        label="Name"
        name="username"
        rules={[
            {
            required: true,
            message: 'Enter Your Name',
            },
        ]}
    >
      <Input className=' body-font w-[30vw] border-[#7A5DC7] border-2 tablet:w-[40vw] phone:w-[60vw] ' />
    </Form.Item>
    <Form.Item name='email' label="Email" rules={[{ type: 'email', required: true, message: 'Please input a valid email!'}]} >
      <Input className=' body-font border-[#7A5DC7] border-2 tablet:w-[40vw] phone:w-[60vw]'/>
    </Form.Item>
    <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      
      >
        <Input className=' body-font border-[#7A5DC7] border-2 tablet:w-[40vw] phone:w-[60vw]' />
      </Form.Item>
    <Form.Item
      label="Message"
      name="message"
      rules={[
        {
          required: true,
          message: 'Enter Your Inquiry',
        },
      ]}
    >
      <TextArea className=' body-font border-[#7A5DC7] border-2 text-[#333] tablet:w-[40vw] phone:w-[60vw]'/>
    </Form.Item>
    <Button className=' custom-button-hover hover:bg-[#A982E7] w-[30vw] body-font bg-[#7A5DC7] text-white border-none tablet:w-[40vw] phone:w-[60vw]'
            htmlType="submit"
          >
            Submit
          </Button>
            </Form>
        </div>
        </div>
    </div>
    <footer className='bg-[#7A5DC7] w-[100vw] h-[10vh] flex items-center justify-center text-white body-font'>
    © 2024 ProTrackr. All rights reserved.
    </footer>
    </div>
  )
}

export default LandingPage