import CustomerCard from "@/components/CustomerCard";

// Photo by <a href="https://unsplash.com/@michaeldam?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Michael Dam</a> on <a href="https://unsplash.com/photos/closeup-photography-of-woman-smiling-mEZ3PoFGs_k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@miracletwentyone?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Joseph Gonzalez</a> on <a href="https://unsplash.com/photos/man-wearing-white-v-neck-shirt-iFgRcqHznqg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@jakenackos?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jake Nackos</a> on <a href="https://unsplash.com/photos/woman-in-white-crew-neck-shirt-smiling-IF9TK5Uy-KI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

export default function Testimonials()  {
    return (
        <div className='flex justify-center bg-purple-100 pb-20'>
            <div className='container px-10'>
                <div className='flex justify-center my-20'>
                    <p
                        className='hidden md:block text-md font-medium text-violet-800 border-violet-800 border w-fit rounded-full px-4 py-1'>
                        SEE WHAT CUSTOMERS SAYS ABOUT US
                    </p>
                    <p
                        className='block md:hidden text-md font-medium text-violet-800 border-violet-800 border w-fit rounded-full px-4 py-1'>
                        Testimonials
                    </p>
                </div>
                <div className='flex flex-col md:flex-row justify-center gap-10'>
                    <CustomerCard
                        imageUrl='c3.jpg'
                        name='Mary Rose'
                        content="I'm delighted with the social media influencer enhancing service! They connected me with relevant influencers and provided valuable guidance on crafting engaging content. My brand visibility has soared, leading to increased engagement and followers. The team was professional, responsive, and knowledgeable. Highly recommend!"
                    />
                    <CustomerCard
                        imageUrl='c2.jpg'
                        name='Alice Cook'
                        content="The social media influencer enhancing service exceeded my expectations! Their expertise in identifying the right influencers for my brand and providing strategic advice on content creation was instrumental in boosting my online presence. Thanks to their help, I've experienced a noticeable uptick in engagement and followers. I couldn't be happier with the results!"
                    />
                    <CustomerCard
                        imageUrl='c1.jpg'
                        name='Alex Garcia'
                        content="I was skeptical at first, but the social media influencer enhancing service proved to be a game-changer for my business. Their personalized approach to connecting me with influencers who align perfectly with my brand values was impressive. The insights they provided on optimizing content for different platforms were invaluable."
                    />

                </div>
            </div>
        </div>
    )
}