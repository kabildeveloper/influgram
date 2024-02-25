import Link from "next/link";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Button from "@/components/Button";
import {RiMenuLine} from "react-icons/ri";



const Navbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const router = useRouter();


    useEffect(() => {

        const handleClick = (event: MouseEvent) => {
            if (isOpen && (event.target as Element).id !== 'hamburger') {
                setIsOpen(false);
            }
            if (isOpen && (event.target as Element).id === 'hamburger') {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        }
    }, [isOpen])

    const getActiveClass = (path: string): string => {
        if (router.pathname === path) {
            return 'text-amber-300 md:text-violet-600'
        }
        return '';
    }



    return(
        <div className='z-10 sticky top-0 bg-white'>
            <nav className=' flex items-center justify-between px-5 md:px-20 py-5'>
                <h3 className='font-medium text-xl'>Influgram</h3>
                <ul className='hidden md:flex gap-10 font-medium'>
                    <li><Link className={getActiveClass('/')} href='/'>Home</Link></li>
                    <li><Link className={getActiveClass('/about')} href='/about'>About</Link></li>
                    <li><Link className={getActiveClass('/services')} href='/services'>Services</Link></li>
                    <li><Link className={getActiveClass('/contact')} href='/contact'>Contact</Link></li>
                </ul>
                <Link href='/contact'>
                    <Button className='hidden md:block button'>Contact Us</Button>
                </Link>
                <button id='hamburger'  className='md:hidden'>
                    {!isOpen && <RiMenuLine onClick={()=>setIsOpen(true)} className='text-2xl'/>}
                    {isOpen && <RiMenuLine onClick={() => setIsOpen(false)} className='text-2xl'/>}
                </button>
            </nav>
            <ul className={`w-full bg-violet-950 text-gray-300 absolute flex flex-col md:hidden gap-5 font-medium px-10 ${isOpen ? 'max-h-[200px] py-5 opacity-100' : 'max-h-0 opacity-20'} overflow-hidden transition-all duration-300`}>
                <li><Link className={getActiveClass('/')} href='/'>Home</Link></li>
                <li><Link className={getActiveClass('/about')} href='/about'>About</Link></li>
                <li><Link className={getActiveClass('/services')} href='/services'>Services</Link></li>
                <li><Link className={getActiveClass('/contact')} href='/contact'>Contact</Link></li>
            </ul>
        </div>

    )
}

export default Navbar;