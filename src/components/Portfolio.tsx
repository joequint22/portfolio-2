import * as React from "react";
import killua from "../assets/killua-picture.png";
import ButtonComponent from './Buttons'


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
      demo: "https://joequint22.github.io/techdegree-project-4/",
      code: "https://github.com/joequint22/techdegree-project-4.git",
    },
    {
      id: 3,
      src: killua,
      demo:"https://joequint22.github.io/techdegree-project-4/",
      code: "https://github.com/joequint22/techdegree-project-4.git",
    },
    {
      id: 4,
      src: killua,
      demo: "https://joequint22.github.io/techdegree-project-4/",
      code: "https://github.com/joequint22/techdegree-project-4.git",
    },
    {
      id: 5,
      src: killua,
      demo: "https://joequint22.github.io/techdegree-project-4/",
      code: "https://github.com/joequint22/techdegree-project-4.git",
    },
    {
      id: 6,
      src: killua,
      demo: "https://joequint22.github.io/techdegree-project-4/",
      code: "https://github.com/joequint22/techdegree-project-4.git",
    },
  ];

  return (
    <div
      name="portfolio"
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
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                className="rounded-md duration-200 hover:scale-110"
                src={src}
                alt="project picture"
              />

              <div className="flex justify-center items-center ">
                <ButtonComponent url={demo} textContent='Demo' />
                <ButtonComponent url={code} textContent='Code' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
