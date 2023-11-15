import { SetStateAction } from "react"


const LinksMobile = (props: {id: number, link: string, nav: React.Dispatch<SetStateAction<boolean>>
  download?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  demo?: string;
}) => {

  const handleButtonClick = (url: string) => {
    
    window.open(url, '_blank')
}


  return (
    <a
      href={props.id !== 6 ? `#${props.link}`: `${props.href}`}
      download={props.download}
      target={props.target}
      rel={props.rel}
      
      >
        <li 
        onClick={props.id === 6 ? () => handleButtonClick('./joeq-resume.pdf') : () => props.nav(null!) }
              // onClick={() => props.nav(null!)}
          key={props.id}
          className=" hover:bg-white hover:duration-200 hover:text-black cursor-pointer capitalize py-4 px-3 text-xl"
        >
            {props.link}
          
        </li>
      </a>
  )
}

export default LinksMobile