const Link = (props: { id: number; link: string
  download?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  demo?: string;
}) => {
  return (
    <a 
      href={props.id !== 6 ? `#${props.link}`: `${props.href}`}
      download={props.download}
      target={props.target}
      rel={props.rel}
    >
      <li
        key={props.id}
        className="px-4 gap-3 cursor-pointer capitalize font-medium text-white hover:text-green-200 hover:scale-125 duration-500"
        
      >
          {props.link}
      </li>
  </a>
  );
};

export default Link;
