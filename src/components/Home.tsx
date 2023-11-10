import Birds from '../assets/birds.png'
import { IoIosArrowForward } from 'react-icons/io'


export default function Home() {




  return (
    <div id="home" className='w-screen bg-black'>

      <div className='max-w-screen-lg mx-auto text-center pt-[7rem] md:pt-[5rem] lg:text-left flex flex-col items-center justify-center px-4 md:flex-row'>
        <div className='flex flex-col items-center lg:items-start justify-center gap-8 md:px-12 lg:px-16 xl:px-0'>
          <h2 className='text-[3.5rem] md:text-[5rem] leading-tight font-bold text-white'>
           Front End React Developer
          </h2>

          <p className='pt-5 text-lg text-gray-400 md:max-w-md lg:mx-autp'> 
          I went to school for applied economics & mathematics and left as a programmer. I am an aspiring web developer with a passion for front-end development. And as a former student-athlete from Ursinus College, I take exceptional pride in my work ethic and adaptability while continuously improving my skillset as a software developer.
          </p>
          
            <div className='mx-auto py-6 pt-12 lg:pt-7'> 
              
              <button
                onClick={() => {
                  const element = document.getElementById("portfolio");
                  element!.scrollIntoView();
                }}
                className='group hover:scale-105 font-bold duration-500 hover:bg-green-200 hover:text-black text-white px-[4rem] lg:px-6 py-3.5 lg:py-4 flex items-center rounded-md border-2 border-green-200 '
              >Portfolio
                <span className="group-hover:rotate-90 duration-300 group-hover:text-black ">
                  <IoIosArrowForward 
                  className="ml-1 lg:mx-1"
                  size={15}/>
                </span>
              </button>
            </div>
        </div>

        <div className='mt-24 lg:pb-[9rem]'>
          <img 
            src={Birds} 
            alt="profile" 
            className="mx-auto xl:scale-125 rounded-full w-full"
          />
        </div>

      </div>
    </div>
  );
}
