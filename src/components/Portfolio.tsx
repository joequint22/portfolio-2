import killua from "../assets/killua-picture.png";
import ProjectComponent from './Project'


type TPortfolio = {
  id: number;
  src: string;
  demo: string;
  code: string;
};

export default function Portfolio() {


  const portfolio: TPortfolio[] = [
    {
      id: 1,
      src: killua,
      demo: "https://joequint22.github.io/techdegree-project-4/",
      code: "https://github.com/joequint22/techdegree-project-4.git",
    },
    {
      id: 2,
      src: killua,
      demo: " https://joequint22.github.io/techdegree-project-5/",
      code: "https://github.com/joequint22/techdegree-project-5.git",
    },
    {
      id: 3,
      src: killua,
      demo:"https://joequint22.github.io/techdegree-project-6/",
      code: "https://github.com/joequint22/techdegree-project-6.git",
    },
    {
      id: 4,
      src: killua,
      demo: " https://joequint22.github.io/techdegree-project-7/",
      code: "https://github.com/joequint22/techdegree-project-7.git",
    },
    {
      id: 5,
      src: killua,
      demo: "https://joequint22.github.io/techdegree-project-8/",
      code: "https://github.com/joequint22/techdegree-project-8.git",
    },
    {
      id: 6,
      src: killua,
      demo: "https://joequint22.github.io/todo-2/",
      code: "https://github.com/joequint22/todo-2.git",
    },
  ];

  return (
    <div
      id="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
        </div>
        <p className="py-6">Check out some of my work right here</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolio.map(({id, src, demo, code}) => (
            <ProjectComponent 
                id={id}
                src={src}
                demo={demo}
                code={code}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
