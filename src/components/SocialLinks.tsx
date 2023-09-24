import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

type TSocialLinks = {
  id: number;
  child: React.ReactNode;
  href: string;
  style?: string;
  download?: boolean;
  target?: string;
  rel?: string;
};

const SocialLinks = () => {
  const links: TSocialLinks[] = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30}/>
        </>
      ),
      href: "https://www.linkedin.com/in/joseph-quintiliano-017893164/",
      style: "rounded-tr-md",
    },

    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30}/>
        </>
      ),
      href: "https://github.com/joequint22",
    },

    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30}/>
        </>
      ),
      href: "mailto: joequintiliano4wk@gmail.com"
    },

    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30}/>
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
      target: "_blank",
      rel: 'noreferrer'
    },
  ];

  return (
    <div id="socialLinks" className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>

        {links.map(({id, child, href, style, download}) => (
          <li
            key={id}
            className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-transparent" + " " + style}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white "
              download={download}
              target='_blank'
            >
              {child}
            </a>
          </li>
        ))}


      </ul>
    </div>
  );
};

export default SocialLinks;
