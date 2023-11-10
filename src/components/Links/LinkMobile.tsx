import { SetStateAction } from "react"


const LinksMobile = (props: {id: number, link: string, nav: React.Dispatch<SetStateAction<boolean>>}) => {


  return (
    <a
    href={`#${props.link}`}
            >
        <li 
          onClick={() => props.nav(null!)}
          key={props.id}
          className=" hover:bg-white hover:duration-200 hover:text-black cursor-pointer capitalize py-4 px-3 text-xl"
        >
            {props.link}
          
        </li>
      </a>
  )
}

export default LinksMobile