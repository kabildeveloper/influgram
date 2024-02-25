import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import {
    RiVidicon2Line,
    RiCameraLensLine,
    RiMegaphoneLine,
    RiFilmLine,
    RiNumbersLine,
    RiSendPlane2Line
} from "react-icons/ri";
import Link from "next/link";
import {useRouter} from "next/router";
export default function Services ()  {

    const router = useRouter();

    const getViewMoreVisibility = () => {
        return router.pathname === '/'
    }

    return(
        <div className='flex justify-center mt-10 md:mt-0'>
            <div className='container px-10'>
                <div className='flex justify-center mb-20'>
                    <p
                        className='text-md font-medium text-violet-800 border-violet-800 border w-fit rounded-full px-4 py-1'>
                        SERVICES WE OFFER
                    </p>
                </div>
                <div className='flex flex-col md:flex-row gap-10'>
                    <div className='md:w-1/3'>
                        <ServiceCard
                            icon={RiFilmLine}
                            title="Video Editing"
                            content={"Our experienced editors specialize in creating visually stunning videos tailored for popular social media platforms like Instagram, YouTube, and TikTok. Whether it's quick edits for daily vlogs, professionally produced content for sponsored campaigns, or engaging reels to boost your audience interaction, we've got you covered"}
                        />
                    </div>
                    <div className='md:w-1/3'>
                        <ServiceCard
                            icon={RiCameraLensLine}
                            title="Photo Editing"
                            content={"Our skilled photo editors ensure impactful images on Instagram, Facebook, and Twitter. From basic retouching to professional editing, we've got you covered with attention-grabbing visuals! Our expertise will elevate your online presence. With our dedicated team, expect nothing less than exceptional quality every time."}
                        />
                    </div>
                    <div className='md:w-1/3'>
                        <ServiceCard
                            icon={RiMegaphoneLine}
                            title="Marketing"
                            content={"Our adept digital marketers elevate your online presence across Instagram, Facebook, and Twitter. From crafting compelling content to strategic campaigns, we've got you covered! Whether it's boosting engagement or driving conversions, trust our expertise to deliver exceptional results consistently."}
                        />
                    </div>
                </div>
                {!getViewMoreVisibility() && <div className='flex flex-col md:flex-row gap-10 mt-10 mb-10 md:mb-0'>
                    <div className='md:w-1/3'>
                        <ServiceCard
                            icon={RiVidicon2Line}
                            title="Ad Shooting"
                            content={"Our company offers comprehensive ad shooting services, collaborating closely with influencers to create captivating visual content tailored to brand objectives. From concept development to post-production, our experienced team manages all aspects of the shoot, ensuring high-quality results that resonate with target audiences"}
                        />
                    </div>
                    <div className='md:w-1/3'>
                        <ServiceCard
                            icon={RiNumbersLine}
                            title="Competitor Analysis"
                            content={"We specialize in nurturing online communities around influencer content, fostering meaningful interactions, and strengthening brand loyalty. Our team monitors and engages with followers across platforms, ensuring every interaction contributes to campaign success while reinforcing brand values and messaging."}
                        />
                    </div>
                    <div className='md:w-1/3'>
                        <ServiceCard
                            icon={RiSendPlane2Line}
                            title="Events and Activations"
                            content={"Our company excels in crafting memorable influencer events and activations to boost brand visibility and create lasting connections. From product launches to immersive experiences, we handle all logistics, ensuring seamless integration of influencer voices for maximum engagement and authentic brand experiences."}
                        />
                    </div>
                </div>}
                {getViewMoreVisibility() && <div className='flex justify-center my-20'>
                    <Link href='/services'>
                        <Button className='button-lg'>View More</Button>
                    </Link>
                </div>}
            </div>
        </div>
    )
}