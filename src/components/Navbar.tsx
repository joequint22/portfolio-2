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
            link: '#about'
        },
        {
            id: 3,
            link: "experience"
        },

        {
            id: 4,
            link: "portfolio"
        },
        
        {
            id: 5,
            link: "contact"
        }
    ]
    
 


  return (
    <div id="navbar" className='flex justify-between items-center w-full h-20 px-4 text-white bg-black sticky z-50 top-0 '>
       <div>
            <a href="#home">
                <h1 className=' text-2xl  text-green-200 font-signature ml-2'>DEVELOPEDBYJOE</h1>
            </a>
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
           {nav ? <FaTimes className='text-white' size={30} /> : <FaBars className='text-white' size={30} />}
        </div>

        { nav && (
             <ul id='menu' className='flex flex-col items-left absolute top-[100%] right-0 w-2/5 h-fit bg-black '>
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