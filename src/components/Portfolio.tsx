import { useState, useEffect } from 'react'
import ProjectComponent from "./Project";
import todoList from "../assets/todo-list.png";
import gallery from "../assets/gallery.png";
import hangman from "../assets/hangman.png";
import dashboard from "../assets/dashboard.png";
import directory from "../assets/directory.png";
import portPic from "../assets/port-pic.png";
import windowTracker from "../assets/window-tracker.png";
import tenzies from "../assets/tenzies.png";
import memeGenerator from "../assets/memeGen.png";
import YT_Homepage from '../assets/yt-homepage.png'

type TPortfolio = {
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
};

// type TSocialLinks = {
//   id: number;
//   child: React.ReactNode;
//   href: string;
//   style?: string;
//   download?: boolean;
//   target?: string;
//   rel?: string;
// };


  

export default function Portfolio() {

  const portfolioData: TPortfolio[] = [
    {
      id: 10,
      src: YT_Homepage,
      title: "YouTube Homepage",
      demo: "https://tenzies-sand.vercel.app/",
      code: "https://github.com/joequint22/tenzies.git",
      context: "React JS, CSS Grid, CSS Flexbox"
    },
    {
      id: 9,
      src: tenzies,
      title: "TENZIES",
      demo: "https://tenzies-sand.vercel.app/",
      code: "https://github.com/joequint22/tenzies.git",
      context: "React JS, CSS Grid, CSS Flexbox"
    },
    {
      id: 8,
      src: memeGenerator,
      title: "Meme Generator",
      demo: "https://meme-generator-tau-sandy.vercel.app/",
      code: "https://github.com/joequint22/meme-generator.git",
      context: "React JS, CSS Grid, CSS Flexbox"
    },
    {
      id: 7,
      src: windowTracker,
      title: "Window Tracker",
      demo: "https://window-tracker.vercel.app/",
      code: "https://github.com/joequint22/window-tracker.git",
      context: "React JS, CSS Flexbox"
    },
    {
      id: 6,
      src: portPic,
      title: "My Portfolio",
      // download: true,
      // href: "./joeq-resume.pdf",
      // target: '_blank',
      // rel: 'noreferrer',
      href: "./joeq-resume.pdf",
      download: true,
      target: "_blank",
      rel: 'noreferrer',
      demo: "./joeq-resume.pdf",
      code: "https://github.com/joequint22/portfolio-2.git",
      context: "TypeScript, React JS, Tailwind CSS"
    },
    {
      id: 5,
      src: todoList,
      title: "Order of the Day",
      demo: "https://todo-list-five-gold.vercel.app/",
      code: "https://github.com/joequint22/todo-2.git",
      context: "TypeScript, React JS, Tailwind CSS"

    },
    {
      id: 4,
      src: directory,
      title: "Employee Search Directory",
      demo: "https://joequint22.github.io/techdegree-project-8/",
      code: "https://github.com/joequint22/techdegree-project-8.git",
      context: 'JavaScript, CSS, HTML'
    },
    
    {
      id: 3,
      src: hangman,
      title: "French Greetings",
      demo: "https://joequint22.github.io/techdegree-project-6/",
      code: "https://github.com/joequint22/techdegree-project-6.git",
      context: 'JavaScript, CSS, HTML'

    },
    {
      id: 2,
      src: dashboard,
      title: "Web App Dashboard",
      demo: " https://joequint22.github.io/techdegree-project-7/",
      code: "https://github.com/joequint22/techdegree-project-7.git",
      context: 'JavaScript, CSS, HTML'

    },
    
    {
      id: 1,
      src: gallery,
      title: "Interative Photo Gallery",
      demo: " https://joequint22.github.io/techdegree-project-5/",
      code: "https://github.com/joequint22/techdegree-project-5.git",
      context: 'JavaScript, Sass, HTML'

    },
  ]

  const [portfolio, setPortfolio] = useState<TPortfolio[]>(portfolioData)

    
    useEffect(() => {
      setPortfolio(portfolioData)

    }, []) 
    // {
    //   id: 7,
    //   src: circles,
    //   title: "Web Style Guide",
    //   demo: "https://joequint22.github.io/techdegree-project-4/",
    //   code: "https://github.com/joequint22/techdegree-project-4.git",
    // },
    

  return (
    <div
      id="portfolio"
      className="bg-black w-full text-white md:min-h-screen"
    >
      <div className="max-w-screen-lg shadow-lg mx-auto py-24 p-4 flex flex-col justify-center w-full h-full text-white">
        <div className='text-center grid place-items-center md:text-left'>
          <p className="text-4xl font-bold inline border-b-4 border-green-200 ">
            Portfolio
          </p>
          <div className="py-8 text-xl px-4 italic">
            
          </div> 
          <div className="grid place-items-center sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-6 ">
            {portfolio.map(({ id, src, demo, code, title, context, download }) => (
              <ProjectComponent
                key={id}
                id={id}
                src={src}
                demo={demo}
                code={code}
                title={title}
                context={context}
                download={download}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
