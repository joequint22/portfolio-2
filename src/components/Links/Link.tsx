
const Link = (props: {id: number, link: string}) => {
  return (
    <a href={`#${props.link}`}>
      <li
        key={props.id}
        className="px-4 gap-3 cursor-pointer capitalize font-medium text-white hover:scale-110 duration-200"
      >
        {props.link}
      </li>
    </a>
  )
}

export default Link