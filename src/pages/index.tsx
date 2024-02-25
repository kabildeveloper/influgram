import Navbar from "@/components/Navbar";
import Lottie from 'react-lottie';
import socialMediaInfluencerAnimation from '../util/social_media_influencer.json';
import Button from "@/components/Button";
import LandingPage from "@/components/LandingPage";
import AboutUs from "@/components/AboutUs";
import WhyChooseUsCard from "../components/WhyChooseUsCard";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonals";
import Offer from "@/components/Offer";
import ContactUs from "@/components/ContactUs";

export default function Home() {

    return (
        <div className=''>
            <LandingPage/>
            <AboutUs/>
            {/*<div className='top-[-150px] relative w-full'>
                <div className='flex justify-center'>
                    <WhyChooseUsCard/>
                </div>
            </div>*/}
            <div className='hidden md:flex justify-center bg-gradient-to-b from-purple-100 from-0% via-purple-100 via-50% to-white to-50% mb-20'>
                <WhyChooseUsCard/>
            </div>
            <div className='md:hidden p-5'>
                <WhyChooseUsCard/>
            </div>

            <Services/>
            <Offer/>
            <Testimonials/>
            <ContactUs/>
        </div>
    );
}
