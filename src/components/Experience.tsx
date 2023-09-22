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


type TExperience = {
    id: number;
    src: string
    text: string;
}

const Experience = () => {

    const experience: TExperience[] = [
        {
            id: 1,
            src: typescript,
            text: 'Typescript'
        },
        {
            id: 2,
            src: react,
            text: 'ReactJS'

        },
        {
            id: 3,
            src: tailwindcss,
            text: 'TailwindCSS'

        },
        {
            id: 4,
            src: git,
            text: 'Git'

        },
        {
            id: 5,
            src: github,
            text: 'Github'

        },
        {
            id: 6,
            src: sass,
            text: 'SASS'

        },
        {
            id: 7,
            src: javascript,
            text: 'Javascript'

        },
        {
            id: 9,
            src: css,
            text: 'CSS'

        },
        {
            id: 10,
            src: html,
            text: 'HTML'
        },
        
    ]

  return (
    <div>
        <div>
            <div>
                <p>Experience</p>
                <p>The following are the technologies I've worked with</p>
            </div>

            <div>
                {experience.map(({id, src, text}) => {
                    return <XpCard id={id} src={src} text={text} />
                })}
            </div>
        </div>
    </div>
  )
}

export default Experience