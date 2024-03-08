import {Button, Card, Form, Input} from 'antd'
import { Link } from 'react-router-dom'
import hero from "../../images/HeroImage.webp"
import address from '../../images/address.webp'
import phone from '../../images/phone.webp'
import mail from '../../images/mail.webp'
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
  return (
    <div className='landing overflow-x-hidden flex flex-col items-center gap-20'>
        <header className='hero'>
    <div className='w-[95vw] flex flex-row justify-between items-center mx-auto'>
        <div  className="main-font text-white text-3xl">Protrackr </div>
        <nav className='flex flex-row gap-5 text-[#333333] body-font'>
            <Link>Services</Link>
            <Link>Pricing</Link>
            <Link>Contact Us</Link>
        </nav>
        <Button className="bg-[#7A5DC7] text-[#fff] body-font border-none" >Login</Button>
    </div>
    <div className="w-[95vw]  flex flex-row items-center mx-[auto]">
        <div className='left flex-1  flex flex-col gap-5'>
            <h1 className='main-font text-[56px] text-white' style={{lineHeight:"60px"}}>Unleash Productivity:<br/> Our Ultimate Project Partner</h1>
            <p className='body-font text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illum, repellendus aperiam suscipit aliquid.</p>
            <div className='flex gap-3 body-font'>
            <Button className='body-font bg-[#A982E7] text-white border-none'>Learn More</Button>
            <Button className='body-font text-[#7A5DC7] bg-white border-none'>Sign Up Now</Button>
            </div>
        </div>
        <div className='right flex-[1.8]'>
            <img src={hero} style={{width:"85%"}}/>
        </div>
    </div>
    </header>
    <div className='service w-[100vw]  flex flex-col items-center gap-9'>
        <div className='flex flex-col items-center gap-2'>
        <h1 className='main-font text-4xl text-[#7A5DC7]'>Streamline Your Project Management Process with ProTrackr</h1>
        <p className='body-font text-[#333]'>Effortlessly Manage Projects, Collaborate with Your Team, and Stay Organized with Our Feature-Rich Project Management Platform.</p>
        </div>
       
        <div className='flex flex-row w-[90vw] gap-6 text-center '>
        {service.map((item)=>(
                <Card key={item.id} className='body-font w-[20vw] h-[35vh] odd:bg-[#7A5DC7] odd:text-white even:bg-white even:border-[#7A5DC7] even:text-[#7A5DC7] font-bold flex justify-center items-center'><p>{item.text}</p></Card>
            ))}
        </div>
    </div>
    <div className='pricing w-[100vw]  h-[80vh] flex flex-col items-center gap-9'>
        <div className='flex flex-col items-center gap-2'>
        <h1 className='main-font text-4xl text-[#7A5DC7]'>Choose the Plan That Fits Your Needs</h1>
        <p className='body-font text-[#333]'>We Offer Flexible Pricing Plans to Accommodate Teams of All Sizes and Budgets. Get Started Today!</p>
        </div>
       
        <div className='flex flex-row w-[90vw] gap-8 items-center justify-center'>
          
             {pricing.map((item)=>(
                <Card key={item.id} className=' w-[20vw] h-[50vh] flex flex-col justify-center items-center bg-[#A982E7] text-white first:text-[#7A5DC7] first:border-[#7A5DC7] first:bg-[white] last:bg-[#7A5DC7]'>
                    <h1 className='main-font text-3xl mb-7'>{item.title}</h1>
                    <p className='body-font font-bold text-xl text-center mb-5'>{item.price}</p>
                    <ul className='list-disc body-font'>
                        {item.features.map(opt=><li key={opt.indexOf} className='mb-2'>{opt}</li>)}
                    </ul>
                </Card>
            ))}
            
        </div>
    </div>
    <div className='contact'>
    <div className='flex flex-col items-center gap-2'>
        <h1 className='main-font text-4xl text-[#7A5DC7]'>Have Questions or Need More Information?</h1>
        <p className='body-font text-[#333]'>We&apos;re Here to Help! Reach Out to Us for Any Inquiries or to Learn More About Our Project Management Platform.</p>
        </div>
        <div className="w-[95vw]  flex flex-row items-center mx-[auto]">
        <div className='left flex-1  flex flex-col gap-5 body-font'>
          <div className='flex flex-row items-center '>
                <img src={address} width={"40px"}/>
                <p>123 Main Street,<br/> Anytown, USA <br/>Postal Code: 12345</p>
          </div>
          <div className='flex flex-row items-center '>
                <img src={phone} width={"40px"}/>
                <p>+1 (555) 123-4567</p>
          </div>
          <div className='flex flex-row items-center '>
                <img src={mail} width={"40px"}/>
                <p> info@yourprotrackr.com</p>
          </div>
        </div>
        <div className='right flex-[1.3]'>
            <Form>
            <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
            </Form>
        </div>
        </div>
    </div>
    </div>
  )
}

export default LandingPage