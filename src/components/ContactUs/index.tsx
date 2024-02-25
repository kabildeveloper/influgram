import Image from "next/image";
import {RiGoogleFill, RiInstagramFill, RiTwitterXFill, RiWhatsappFill} from "react-icons/ri";

export default function ContactUs() {
    return(
        <div className='flex justify-center pb-10'>
            <div className='container p-10'>
                <div className='flex justify-center'>
                    <p
                        className='text-md font-medium text-violet-800 border-violet-800 border w-fit rounded-full px-4 py-1 m-10 mb-14'>
                        CONTACT US
                    </p>
                </div>

                <div className='w-full flex flex-col gap-10 md:gap-0 md:flex-row'>
                    <div className='w-full md:w-1/2'>
                        <div className='py-0 md:px-10'>
                            <h6 className='text-2xl mb-2'> Get In touch with us </h6>
                            <p>Have questions or ready to get started? Don't hesitate to reach out to us! Our team is here to assist you every step of the way. Whether you're looking for more information about our services, want to discuss a potential collaboration, or simply have a query, we're just a click or a call away. </p>
                        </div>
                        <div className='py-14 md:px-10'>
                            <div>
                                <h6 className='text-2xl mb-2'> Our office located at </h6>
                                <p> 24/7, 1st Street </p>
                                <p> AnyPlaza, AnyTown </p>
                                <p> Trichy - 602314 </p>
                            </div>
                        </div>
                        <div className='py-0 md:px-10'>
                            <h6 className='text-2xl mb-2'> Reach us through</h6>
                            <ul className='w-full mt-2 [&>li]:mb-1 [&>li>*]:text-violet-800'>
                                <li><RiInstagramFill className='inline  text-xl'/> Instagram</li>
                                <li><RiTwitterXFill className='inline  text-xl'/> Twitter</li>
                                <li><RiWhatsappFill className='inline  text-xl'/> WhatsApp</li>
                                <li><RiGoogleFill className='inline  text-xl'/> Email</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 flex justify-end h-[520px]'>
                        <Image src={'/maps.png'} alt={''} width={0} height={0} sizes='100vw' style={{width:'auto', height:'500px'}}/>
                    </div>

                </div>
            </div>
        </div>
    )
}