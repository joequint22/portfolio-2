import html from '../assets/html.png'
import css from '../assets/css.png'
import tailwindcss from '../assets/tailwind.png'
import react from '../assets/react.png'
import typescript from '../assets/typescript.png'
import git from '../assets/git.png'
import sass from '../assets/sass.png'
import javascript from '../assets/javascript.png'
import github from '../assets/github.png'
import XpCard from './XpCard'
import bootstrap from '../assets/bootstrap.png'
import vite from '../assets/vite.png'


type TExperience = {
    id: number;
    src: string
    text: string;
    style: string;
    sassStyle?: string
}

const Experience = () => {

    const experience: TExperience[] = [
        {
            id: 1,
            src: typescript,
            text: 'Typescript',
            style: 'shadow-sky-600'

        },
        {
            id: 2,
            src: react,
            text: 'React JS',
            style: 'shadow-blue-600'


        },
        {
            id: 3,
            src: tailwindcss,
            text: 'Tailwind CSS',
            style: 'shadow-sky-400'


        },
        {
            id: 4,
            src: github,
            text: 'Github',
            style: 'shadow-white',

        },

        {
            id: 5,
            src: javascript,
            text: 'Javascript',
            style: 'shadow-yellow-500'

        },


        
        {
            id: 6,
            src: bootstrap,
            text: 'Bootstrap',
            style: 'shadow-purple-600 ',
            sassStyle: 'pt-6'


        },

        {
            id: 7,
            src: sass,
            text: 'SASS',
            style: 'shadow-pink-500 ',
            sassStyle: 'pt-6'


        },

        {
            id: 8,
            src: git,
            text: 'Git',
            style: 'shadow-orange-600'


        },
        
        {
            id: 9,
            src: css,
            text: 'CSS',
            style: 'shadow-blue-500'


        },
        {
            id: 10,
            src: html,
            text: 'HTML',
            style: 'shadow-orange-500' 

        },
        {
            id: 11,
            src: vite,
            text: 'Vite',
            style: 'shadow-yellow-300'
            

        },
        
        
    ]

  return (
    <div id="experience" className='bg-black w-full h-full '>

        <div className='max-w-screen-lg mx-auto p-4 py-36 flex flex-col justify-center min-h-screen text-white'>
            <div className='text-center md:text-left'>
                <p className='text-4xl font-bold inline border-b-4 border-green-200 '>Experience</p>
                <p className='py-12 text-lg lg:text-xl italic'>Familiar with the following technologies...</p>
            </div>

            <div className="w-full place-items-center  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-24 md:gap-8 px-4 pb-16 mt-0 sm:px-0">
                {experience.map(({id, src, text, style, sassStyle}) => {
                    return <XpCard key={id} sassStyle={sassStyle} style={style} id={id} src={src} text={text} />
                })}
            </div>
        </div>

    </div>
  )
}

export default Experience