import * as React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'
import Link from './Links/Link'
import LinkMobile from './Links/LinkMobile'

type LinksType = {
        id: number,
        link: string
    }


const Navbar = () => {
    //NEED STATE TO BE ABLE TO FLIP NAVBAR FROM MOBILE TO DESKTOP
    const [nav, setNav] = useState(false);

    const links: LinksType[] = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "about"
        },
        {
            id: 3,
            link: "portfolio"
        },
        {
            id: 4,
            link: "experience"
        },
        {
            id: 5,
            link: "Contact"
        }
    ]
    
 


  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black sticky z-50 top-0 '>
       <div>
            <h1 className='text-2xl font-signature ml-2'>DEVELOPEDBYJOE</h1>
        </div>

        <ul className="hidden md:flex">
            {links.map(({id, link}) => {
                return <Link 
                    key={id}
                    id={id} 
                    link={link}
                />
            })}
        </ul>

        <div
        onClick={() => setNav(!nav)} 
        className='cursor-pointer pr-4 z-10 text-gray-800 md:hidden'>
           {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        { nav && (
             <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400'>
        {links.map(({id, link}) => {
                return <LinkMobile 
                    key={id}
                    id={id} 
                    link={link}
                />
            })}
        </ul>
        )}

       
        

    </div>


  )
}

export default Navbar;