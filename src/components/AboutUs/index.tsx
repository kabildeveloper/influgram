import Lottie, {Options} from "react-lottie";
import aboutUsLottieAnimation from "@/util/about_us.json";

const AboutUs = () => {

    const defaultOptions: Options = {
        loop: true,
        autoplay: true,
        animationData: aboutUsLottieAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        },
    };

    return(
        <div className='flex justify-center md:h-dvh bg-purple-100'>
            <div className='container flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 pt-0 p-10'>
                    <Lottie isClickToPauseDisabled={true} options={defaultOptions}/>
                </div>
                <div className='w-full md:w-1/2 p-10 flex flex-col justify-center'>
                    <div className=''>
                        <p
                            className='text-md font-medium text-violet-800 border-violet-800 border w-fit rounded-full px-4 py-1'>
                            WHO WE ARE ?
                        </p>
                        <h3 className='text-4xl md:text-6xl font-bold my-10'>
                            Your Trusted Ally in Social Media Marketing Excellence
                        </h3>
                        <p className='text-gray-500 text-lg font-light'>
                            We have 25 years of experience in supporting and marketing social media influencers, including video editing, photoshopping etc
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;