import { SetStateAction, useState } from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'
import Link from './Links/Link'
import LinkMobile from './Links/LinkMobile'

type LinksType = {
        id: number,
        link: string,
        nav: React.Dispatch<SetStateAction<boolean>>
    }


const Navbar = () => {
    //dropdown starts as false because it is hidden 
    const [nav, setNav] = useState(false);
    const handleNav = () => (
        setNav(!nav)
    )

    const links: LinksType[] = [
        {
            id: 1,
            link: "home",
            nav: handleNav
        },
        {
            id: 2,
            link: 'about',
            nav: handleNav

        },
        {
            id: 3,
            link: "portfolio",
            nav: handleNav
        },

        {
            id: 4,
            link: "experience",
            nav: handleNav
        },
        
        {
            id: 5,
            link: "contact",
            nav: handleNav
        }
    ]
    
 


  return (
    <div id="navbar" className='flex justify-between items-center w-full h-20 px-4 text-white bg-black sticky z-50 top-0 '>
       <div>
            <a href="#home">
                <h1 className=' text-2xl  hover:scale-110 duration-500 text-green-200 font-signature ml-2'>DEVELOPEDBYJOE</h1>
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
        onClick={handleNav} 
        className='cursor-pointer pr-4 z-10 text-gray-800 md:hidden'> {/* */}
           {nav ? <FaTimes className='text-white' size={30} /> : <FaBars className='text-white' size={30} />}
        </div>

        { nav && (
             <ul id='menu' className='flex flex-col items-left absolute top-[100%] right-0 w-2/5 h-fit bg-black '>
                {links.map(({id, link, nav}) => {
                        return <LinkMobile 
                            key={id}
                            id={id} 
                            link={link}
                            nav={nav}
                        />
                })}
            </ul>
        )}

       
        

    </div>


  )
}

export default Navbar;