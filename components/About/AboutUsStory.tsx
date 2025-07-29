'use client';
import Image from 'next/image';

const AboutUsStory = () => {
    return (
        <section className='relative h-screen'>
            {/* background image layer */}
            <Image
                src ="/our_story.jpg"
                alt = "chase community image"
                fill
                className="object-cover opacity-5"
            />
            <section className = ' relative z-10 px-6 sm:px-8 md:px-12 lg:px-18 py-32'>
                <div className= 'max-w-4xl mx-auto'>
                        <h2 className='text-4xl md:text-6xl font-bold text-[#153b62] text-center mb-10'>
                            Our Beginning
                        </h2>
                        <p className='mt-6 text-center text-2xl text-gray-700 leading-relaxed'>
                        CHASE began as a response <br/> to what we, as medical students and junior doctors, witnessed in our overflowing public hospitals – numerous patients suffering the consequences of chronic diseases. 
                        We valiantly believed their problems, which took decades to manifest, could be fixed with a few days of careful medical attention, only to see them return weeks later, in another crisis.
                        </p>
                        <p className='mt-6 text-center text-2xl text-gray-700 leading-relaxed'>
                        We wanted to find solutions <br/>and looked to the community health worker model in developing nations such as India as our inspiration. 
                        Their principles of empowerment of the community, through education and mentorship, still resonate in the CHASE program today.
                        </p>
                        <p className='mt-6 text-center text-2xl text-gray-700 leading-relaxed'>
                        However, now CHASE means more than this.The goals of our organisation have evolved from health literacy to life literacy. The greatest achievements of our program are not only the student projects we help implement, but <br/>the students we help empower to become future community leaders. 
                        With their leadership, CHASE hopes for a brighter, healthier future for the Western suburbs of Melbourne, and all of Australia.
                        </p>
                </div>
            </section>

        </section>
        

    );
   
}
export default AboutUsStory;