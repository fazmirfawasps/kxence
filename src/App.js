import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

// Create the styled-component for the circular icon

export default function App() {
  return (
    <div class="container mx-auto px-0 sm:px-0 lg:px-40 md:px-0 relative " style={{ overflowX: 'hidden' }}>
      <img src="./website-bg1-02.webp" alt="" style={{ position: 'fixed', marginTop: '-303px', zIndex: '-1', marginLeft: '350px', }} />

      <div class="w-100 h-20 grid grid-cols-2 pt-5 ">
        <div class=" col-span-2 sm:col-span-1 justify-center">
          <div class="flex justify-center sm:justify-start ">
            <img src="./KXENCE_logo-05.png"  style={{width:'200px'}} alt="" />
          </div>
        </div>
        <div class="sm:flex justify-center gap-4 col-span-1 hidden sm:block ">
          <div class="flex flex-row gap-10  items-center justify -center ">
            <p style={{ fontFamily: "", color: '#3c3c3c', fontSize: '17px', fontWeight: '500' }}>About</p>
            <p style={{ fontFamily: "", color: '#3c3c3c', fontSize: '17px', fontWeight: '500' }}>Services</p>


          </div>
        </div>
      </div>


      <div class="w-100 h-100  grid grid-cols-2 pt-0 sm:pt-20" >
        <div class=" order-2 sm:order-1 flex flex-col gap-2 sm:gap-4  col-span-2 sm:col-span-1 items-center sm:items-start " style={{ width: '100%', height: '30vw', display: 'flex', justifyContent: 'center', minHeight: '300px', 
 }}>
          <div class="flex flex-row gap-1 items-center  ">
            <div style={{
              width: '6px',
              height: '6px',
              backgroundColor: 'black',
              transform: 'rotate(45deg)',
            }}></div>
            <div class='block sm:hidden' style={{
              width: '6px',
              height: '6px',
              backgroundColor: 'black',
              transform: 'rotate(45deg)',
            }}></div>
            <div class='block sm:hidden' style={{
              width: '6px',
              height: '6px',
              backgroundColor: 'black',
              transform: 'rotate(45deg)',
            }}></div>
            <p class="font-Scada font-semibold text-l   leading-10" style={{ fontFamily: "Scada, sans-serif", color: '#3c3c3c', fontSize: '18px', fontWeight: '600' }}>Coming Soon</p>
          </div>
          <div >
            <h1 class=" font-semibold text-4xl hidden sm:inline  leading-20" style={{ fontFamily: 'Scada, sans-serif' }}>
              Get Notified
              <span ><br /></span>
              When We Launch
            </h1>
          </div>
          <div class=" flex  items-center justify-center inline sm:hidden ">
            <h1 class="font-semibold text-xl text-center" style={{ fontFamily: 'Scada, sans-serif' }}>
              Get Notified When We Launch
            </h1>
          </div>
          <div class="flex flex-row gap-3 sm:flex-row sm:gap-3 ">
            <div>
              <input
                style={{
                  border: '1px solid black',
                  color: 'black',
                  paddingLeft: '10px',
                  height: '40px',
                  borderRadius: '5px',
                  width: '25vw', // Adjust the width for larger screens
                  minWidth: '200px', // Add a maximum width for the input
                  maxWidth: '500px'
                }}
                type="email"
                placeholder="Email"
              />
            </div>
            <button style={{
              backgroundColor: 'black', color: '#fff', borderRadius: '5px',
              padding: '8px 20px' // Add some padding to the button
            }}>send</button>
          </div>
          <p style={{ color: '#3c3c3c', fontSize: '14px' }}> *Don’t worry. we will not spam you 🙂 </p>
        </div>
        <div class="order-1 sm:order-2 col-span-2 sm:col-span-1" style={{ width: '100%', height: '30vx', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '250px' }}>
          <div class="flex justify-center">
            <img src=".\website-design1-01.webp" style={{ width: '100%', height: 'auto', maxWidth: '500px' }} alt="" />
          </div>
        </div>
      </div>

      <div class=" grid grid-cols-2  gap-4" >
        <div class="w-100 h-100 flex  col-span-2 sm:col-span-1  justify-center sm:justify-start space-x-4">
          <InstagramIcon className="w-7 h-7" />
          <FacebookIcon></FacebookIcon>
          <LinkedInIcon className="w-7 h-7" />
          <TwitterIcon className="w-7 h-7" />
         
        </div>
        <div class=" flex  col-span-2 sm:col-span-1 justify-center " >
          <ol class="flex list-none space-x-4 justify-center items-center " >
            <li class="font-Poppins font-normal text-gray-600">FAQS</li>
            <li class="font-Poppins font-normal text-gray-600">Privacy Policy</li>
            <li class="font-Poppins font-normal text-gray-600">Terms of Service</li>
          </ol>
        </div>


      </div>

    </div>




  )
}