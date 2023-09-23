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
}

const Project = (props: TProject) => {
  return (
      <div
        key={props.id}
        className=" shadow-gray-400 shadow-sm grid text-center justify-between rounded-lg"
      >
        <div className='text-md text-white py-4 mx-auto'>{props.title}</div>
        <img
          className="rounded-md duration-200 hover:scale-110"
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

export default Project