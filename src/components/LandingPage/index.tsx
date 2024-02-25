import Button from "@/components/Button";
import Lottie, { Options } from "react-lottie";
import socialMediaInfluencerAnimation from "@/util/social_media_influencer.json";
import Link from "next/link";

const LandingPage = () => {

    const defaultOptions: Options = {
        loop: true,
        autoplay: true,
        animationData: socialMediaInfluencerAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        },
    };


    return (
        <div className=' md:h-[calc(100vh-80px)] flex items-center justify-center'>
            <div className='container flex flex-col-reverse md:flex-row'>
                <div className='w-full md:w-1/2 p-10 flex flex-col justify-center'>
                    <div className='flex flex-col justify-center items-center md:items-start md:block'>
                        <p className='text-md ms-1 font-medium text-violet-800 border border-violet-800 w-fit rounded-full px-4 py-1'> WELCOME TO INFLUGRAM </p>
                        <h3 className='text-4xl text-center md:text-start md:text-6xl font-bold my-10'>
                            Elevate your brand with our influencer marketing solutions
                        </h3>
                        <Link href='/contact'>
                            <Button className='button-lg'>Contact Us</Button>
                        </Link>
                    </div>

                </div>
                <div className='w-full md:w-1/2 pt-0 p-10 pb-0 md:pb-10'>
                    <Lottie isClickToPauseDisabled={true} options={defaultOptions}/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;