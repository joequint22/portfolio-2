import { useState, useEffect, useRef } from 'react'
import ProjectComponent from "./Project";
import todoList from "../assets/todo-list.png";
import gallery from "../assets/gallery.png";
import hangman from "../assets/hangman.png";
import dashboard from "../assets/dashboard.png";
import directory from "../assets/directory.png";
import portPic from "../assets/port-pic.png";

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
      id: 1,
      src: portPic,
      title: "My Portfolio",
      download: true,
      href: "/resume.pdf",
      target: '_blank',
      rel: 'noreferrer',
      demo: "https://joequint22.github.io/techdegree-project-6/",
      code: "https://github.com/joequint22/portfolio-2.git",
    },
    {
      id: 2,
      src: todoList,
      title: "Order of the Day",
      demo: "https://todo-list-five-gold.vercel.app/",
      code: "https://github.com/joequint22/todo-2.git",
    },
    {
      id: 3,
      src: directory,
      title: "Employee Search Directory",
      demo: "https://joequint22.github.io/techdegree-project-8/",
      code: "https://github.com/joequint22/techdegree-project-8.git",
    },
    
    {
      id: 4,
      src: hangman,
      title: "French Greetings",
      demo: "https://joequint22.github.io/techdegree-project-6/",
      code: "https://github.com/joequint22/techdegree-project-6.git",
    },
    {
      id: 5,
      src: dashboard,
      title: "Web App Dashboard",
      demo: " https://joequint22.github.io/techdegree-project-7/",
      code: "https://github.com/joequint22/techdegree-project-7.git",
    },
    
    {
      id: 6,
      src: gallery,
      title: "Interative Photo Gallery",
      demo: " https://joequint22.github.io/techdegree-project-5/",
      code: "https://github.com/joequint22/techdegree-project-5.git",
    },
  ]

  const [portfolio, setPortfolio] = useState<TPortfolio[]>([])



  useEffect(() => {
    setPortfolio(portfolioData)
  }, [portfolioData])
    
    
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
      className="bg-gradient-to-b via-black from-black to-gray-900 w-full text-white md:min-h-screen"
    >
      <div className="max-w-screen-lg shadow-lg mx-auto py-24 p-4 flex flex-col justify-center w-full h-full text-white">
        <div >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <div className="py-8 text-xl px-4 italic">
            Below, displays the progression throughout my journey 
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-6 ">
            {portfolio.map(({ id, src, demo, code, title }) => (
              <ProjectComponent
                id={id}
                src={src}
                demo={demo}
                code={code}
                title={title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
