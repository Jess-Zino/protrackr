import BubblesCard from "../../Components/Bubbles/BubblesCard"
const HomePage = () => {
  return (
    <div>
         <div className='flex flex-row gap-[3%]'>
            <BubblesCard/>
            <BubblesCard/>
            <BubblesCard/>
            <BubblesCard/>
            </div>
         
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: 'white',
            
            }}
          >
            <p>long content</p>
            
          </div>
    </div>
  )
}

export default HomePage