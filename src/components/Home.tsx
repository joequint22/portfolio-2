import Killua from '../assets/killua-profile.png'
import { IoIosArrowForward } from 'react-icons/io'


export default function Home() {
  return (
    <div id="home" className='h-full
     w-full bg-gradient-to-b from-black via-black to-gray-900'>

      <div className='max-w-screen-lg py-36 relative mx-auto text-center sm:text-left flex flex-col items-center justify-center h-full px-4 md:flex-row '>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-7xl font-bold text-white '>
           Junior Front End Web Developer
          </h2>

          <p className='pt-10 text-gray-500 py-4 max-w-md '> 
            I went to school for applied economics, and left a programmer. An aspiring web developer with a passion for front end development. And as a former student-athlete from Ursinus College, I take exceptional pride in my work ethic & adaptibility while continuously improving my skillset as a software developer.
          </p>

          <div className='pt-16 pb-16'> 
            
            <a href="#portfolio">
            <button
              className='group ml-1 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'
            >Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <IoIosArrowForward 
                className="mx-1"
                size={15}/>
              </span>
            </button>
            </a>

          </div>
        </div>

        <div>
          <img 
            src={Killua} 
            alt="profile" 
            className=" mx-auto rounded-full w-2/3 md:w-full"
            />
        </div>

      </div>
    </div>
  );
}
