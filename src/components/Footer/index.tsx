import { RiInstagramFill, RiWhatsappFill, RiTwitterXFill, RiGoogleFill } from 'react-icons/ri';
import Link from "next/link";

export default function Footer () {
    return (
        <div className='bg-violet-950 w-full p-10 flex justify-center'>
            <div className='container flex flex-col md:flex-row'>
                <div className='md:w-1/3 text-center'>
                    <h5 className='text-2xl text-amber-300'> Influgram </h5>
                    <p className='text-gray-400 mt-2 text-justify md:text-left'>
                        We specialize in elevating brands through strategic partnerships with influential voices in the digital space. Our tailored approach maximizes engagement, driving growth and visibility for our clients.
                    </p>
                </div>
                <div className='md:w-1/3 flex flex-col items-center mt-10 md:mt-0'>
                    <div>
                        <h6 className='text-amber-300'>QUICK LINKS</h6>
                        <ul className='w-full mt-2 text-gray-300 [&>li]:mb-2'>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/about'>About</Link></li>
                            <li><Link href='/services'>Services</Link></li>
                            <li><Link href='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='md:w-1/3 flex flex-col items-center mt-10 md:mt-0'>
                    <div>
                        <h6 className='text-amber-300'>CONTACT US</h6>
                        <ul className='w-full mt-2 text-gray-300 [&>li]:mb-2'>
                            <li><RiInstagramFill className='inline text-amber-300 text-xl'/> Instagram</li>
                            <li><RiTwitterXFill className='inline text-amber-300 text-xl'/> Twitter </li>
                            <li><RiWhatsappFill className='inline text-amber-300 text-xl'/> WhatsApp</li>
                            <li><RiGoogleFill className='inline text-amber-300 text-xl'/> Email</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}