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
        <section ref={sectionRef} className="bg-white py-20 px-4">
            <div className="bg-[#153b62] max-w-7xl mx-auto rounded-2xl p-16 shadow-2xl">
                <div className='flex flex-col md:flex-row items-center gap-8'>
                    {/*left column*/}
                    <div className="w-full md:w-2/5"> 
                            <img src="/chase_team.png" alt='workshop' className='w-full rounded-2xl shadow-lg'/>
                    </div>
                    {/*right column*/}
                    <div className="w-full md:w-3/5 text-white md:pl-8">
                        <p className="text-sm mb-4 font-medium tracking-wider opacity-80">
                            {displayText}
                            {isVisible && displayText.length < fullText.length && (
                                <span className="animate-pulse">|</span>
                            )}
                        </p>
                        <h2 className='text-4xl md:text-5xl font-bold mb-6 relative leading-tight'>
                            {/* Shadow Layer */}
                            <span className="absolute -z-0 select-none text-white opacity-30
                                left-1 top-1
                                md:left-2 md:top-2
                            ">
                                KEEN ON VOLUNTEERING?
                            </span>
                            {/* Main Text Layer */}
                            <span className="text-[#B0FE00] select-none">KEEN ON VOLUNTEERING?</span>
                        </h2>
                        <p className='mb-8 text-lg leading-relaxed opacity-90'>
                            CHASE is looking for new mentors and committee members with a passion for community health.
                        </p>
                        <button className="bg-gradient-to-r from-[#B0FE00] to-[#8BC34A] text-[#153b62] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-lg">
                            Join us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;