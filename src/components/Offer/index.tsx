import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";


export default function Offer() {
    /*
    * Photo by <a href="https://unsplash.com/@alexbemore?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alexander Shatov</a> on <a href="https://unsplash.com/photos/blue-red-and-green-letters-illustration-mr4JG4SYOF8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
    * */
    return(
            <div className='offer'>
                <div className='bg-gray-950 bg-blend-darken bg-opacity-75 w-full flex justify-center'>
                    <div className='container py-20 flex flex-col md:flex-row items-center justify-center gap-10 px-5'>
                        <h3 className='text-3xl text-white text-center md:text-start'>
                            Still not convinced, let's talk
                        </h3>
                        <Link href='/contact'>
                            <Button className='hidden md:block button-lg button-secondary'>Contact us</Button>
                            <Button className='md:hidden button-secondary w-full'>Contact us</Button>
                        </Link>
                    </div>
                </div>
            </div>
    )
}