
const LinksMobile = (props: {id: number, link: string}) => {






  return (
    <a 
    href={`#${props.link}`}>
      <li
        key={props.id}
        className=" hover:bg-white hover:duration-200 hover:text-black cursor-pointer capitalize py-4 px-3 text-xl"
      >
        {props.link}
      </li>
    </a>
  )
}

export default LinksMobile