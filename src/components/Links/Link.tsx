const Link = (props: { id: number; link: string }) => {
  return (
    <li
      key={props.id}
      className="px-4 gap-3 cursor-pointer capitalize font-medium text-white hover:text-green-200 hover:scale-125 duration-500"
    >
      <a href={`#${props.link}`}>{props.link}</a>
    </li>
  );
};

export default Link;
