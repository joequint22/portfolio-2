import ButtonComponent from './Buttons'


type TProject = {
  id: number;
  src: string;
  demo: string;
  code: string;
  title: string;
  download?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  context?: string;
}

const Project = (props: TProject) => {
  return (
      <div
        key={props.id}
        className="hover:scale-105  border border-gray-700 hover:shadow-green-300 duration-500 flex flex-col justify-between text-center rounded-md"
      >
        <div className='flex flex-col pb-3'>
        <div className=' text-md text-white py-4 mx-auto'>{props.title}</div>
        <div className='mx-auto text-gray-400'>{props.context}</div>
       </div> 
       
       <img
          className="rounded-[5%] px-3 duration-200"
          src={props.src}
          alt="project picture"
        />
        
        <div className="flex justify-center h-18 items-center ">
        {props.id === 1 ? 
            
              <ButtonComponent
                url={'/resume.pdf'}
                 textContent='Resume'
               /> 
            : 
              <ButtonComponent url={props.demo} textContent='Demo' />}
          
          <ButtonComponent url={props.code} textContent='Code' />
        </div>
      </div>
)
}
`~`
export default Project