'use client';
const OurStory = () => {
    return (
      <section className="w-full pt-80 pl-40">
        <div className="flex">
          {/* Title section - 1/3 width */}
          <div className="w-1/3">
            {/* Apply the same pattern as your hero */}
            <h2 className="relative font-black leading-none
              text-[12vw]
              sm:text-[10vw]
              md:text-[8vw]
              lg:text-[6vw]
              xl:text-[150px]
            ">
              {/* Shadow Layer */}
              <span className="absolute -z-0 select-none text-[#B0FE00]
                left-[1.5vw] top-[1.2vw]
                sm:left-[1.4vw] sm:top-[0.9vw]
                md:left-[1vw] md:top-[0.6vw]
                lg:left-[0.8vw] lg:top-[0.5vw]
                xl:left-3 xl:top-1
              ">
                OUR<br/>STORY
              </span>
              
              {/* Main Text Layer */}
              <span className="text-[#153b62] select-none">
                OUR<br/>STORY
              </span>
            </h2>
          </div>
          
          {/* Description section - 2/3 width */}
          <div className="w-2/3 pl-8 md:pl-16 flex items-center">
            <div className="max-w-2xl">
                <p className="text-gray-700 text-lg md:text-2xl leading-relaxed mb-6">
                CHASE is a community health organization dedicated to improving public health outcomes through education, advocacy, and community engagement.
                </p>
                
                <p className="text-gray-600 text-base md:text-2xl leading-relaxed">
                Founded with a passion for community wellness, we work tirelessly to bridge healthcare gaps and empower individuals with the knowledge and resources they need to live healthier lives.
                </p>

                <div className="pt-8">
                    <button className="bg-[#B0FE00] text-[#153b62] px-8 py-3 rounded-full font-bold text-lg hover:bg-[#153b62] hover:text-[#B0FE00] transition-colors duration-300 pt-2">
                    Read More
                    </button>
                </div>
                
            </div>
        </div>
    </div>
    </section>
    );
};

export default OurStory;