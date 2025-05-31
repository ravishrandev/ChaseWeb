'use client';
import { useState, useEffect, useRef } from 'react';
// Import custom CSS
import '../app/components.css';

const GetInvolved = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [displayText, setDisplayText] = useState('');
    const sectionRef = useRef(null);
    const fullText = 'GET INVOLVED';

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (isVisible) {
            let index = 0;
            const timer = setInterval(() => {
                if (index <= fullText.length) {
                    setDisplayText(fullText.slice(0, index));
                    index++;
                } else {
                    clearInterval(timer);
                }
            }, 100);

            return () => clearInterval(timer);
        }
    }, [isVisible]);

    return(
        <section ref={sectionRef} className="bg-neutral-100 py-20 px-4 -mt[30px]">
            <div className='flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto mt-32'>
                {/*left column*/}
                <div className="w-full lg:w-1/2"> 
                    <div className="relative">
                        <img src="/chase_team.png" alt='workshop' className='w-full  shadow-xl'/>
                    </div>
                </div>
                {/*right column*/}
                <div className="w-full lg:w-1/2 md:pl-8">
                    <p className="text-sm mb-4 font-medium tracking-wider text-[#153b62]">
                        {displayText}
                        {isVisible && displayText.length < fullText.length && (
                            <span className="animate-pulse">|</span>
                        )}
                    </p>
                    <h2 className='relative font-black leading-none
                    text-4xl lg:text-6xl mb-6
                '>
                    {/* Shadow Layer */}
                    <span className="absolute -z-10 select-none text-[#B0FE00]
                        left-[0.8vw] top-[0.5vw]
                        sm:left-[0.6vw] sm:top-[0.4vw]
                        md:left-[0.4vw] md:top-[0.3vw]
                        lg:left-2 lg:top-2
                    ">
                        KEEN ON<br/>VOLUNTEERING?
                    </span>
                    
                    {/* Main Text Layer */}
                    <span className="text-[#153b62] select-none left-5">
                        KEEN ON<br/>VOLUNTEERING?
                    </span>
                </h2>
                    <p className='mb-8 text-lg lg:text-xl leading-relaxed text-gray-700 max-w-2xl'>
                        CHASE is looking for new mentors and committee members with a passion for community health.
                    </p>
                    <button className="bg-gradient-to-r from-[#153b62] to-[#1e4976] text-white px-12 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg">
                        Join us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;