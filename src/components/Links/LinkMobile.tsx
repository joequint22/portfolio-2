
const LinksMobile = (props: {id: number, link: string}) => {
  return (
    <li
      key={props.id}
      className="px-4 cursor-pointer capitalize py-6 text-4xl"
    >
      {props.link}
    </li>
  )
}

export default LinksMobile