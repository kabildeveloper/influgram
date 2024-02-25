import { RiMoneyDollarCircleLine, RiLightbulbFlashLine, RiHandHeartLine } from "react-icons/ri";
const WhyChooseUsCard = () => {
    return (
        <div className='bg-violet-950 text-white p-5 md:p-10 shadow-violet-300 shadow-2xl rounded-2xl h-fit'>
            <div className='flex flex-col md:flex-row justify-center gap-5 md:gap-10'>
                <div className='border-violet-800 border rounded p-5 md:p-10 md:w-[300px] '>
                    <div className='flex items-center gap-2'>
                        <RiMoneyDollarCircleLine className='text-amber-300 text-4xl mb-2'/>
                        <h6 className='font-bold text-xl pb-2'>Cost Efficiency</h6>
                    </div>
                    <p className='text-violet-300'>
                        Torquent porttitor magnis lacus duis hac donec praesent elementum platea
                    </p>
                </div>
                <div className='border-violet-800 border rounded p-5 md:p-10 md:w-[300px] '>
                    <div className='flex items-center gap-2'>
                        <RiLightbulbFlashLine className='text-amber-300 text-4xl mb-2'/>
                        <h6 className='font-bold text-xl pb-2'>Creative Showcase</h6>
                    </div>
                    <p className='text-violet-300'>
                        Torquent porttitor magnis lacus duis hac donec praesent elementum platea
                    </p>
                </div>
                <div className='border-violet-800 border rounded p-5 md:p-10 md:w-[300px] '>
                    <div className='flex items-center gap-2'>
                        <RiHandHeartLine className='text-amber-300 text-4xl mb-2'/>
                        <h6 className='font-bold text-xl pb-2'>Premium Support</h6>
                    </div>
                    <p className='text-violet-300'>
                        Torquent porttitor magnis lacus duis hac donec praesent elementum platea
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUsCard;