'use client';

const OurStory = () => {
  return (
    <section className="w-full pt-40 md:pt-52 lg:pt-80 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40">
      {/* Responsive layout: column on mobile, row on medium+ */}
      <div className="flex flex-col md:flex-row">
        
        {/* Title Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 md:pr-6 lg:pr-10">
          <h2 className="relative font-black leading-none
            text-[18vw]
            sm:text-[15vw]
            md:text-[10vw]
            lg:text-[8vw]
            xl:text-[130px]
          ">
            {/* Shadow Layer */}
            <span className="absolute -z-0 select-none text-[#B0FE00]
              left-[2.5vw] top-[2vw]
              sm:left-[2vw] sm:top-[1.5vw]
              md:left-[1.5vw] md:top-[1vw]
              lg:left-[1vw] lg:top-[0.6vw]
              xl:left-3 xl:top-1
            ">
              OUR<br />STORY
            </span>

            {/* Main Text Layer */}
            <span className="text-[#153b62] select-none">
              OUR<br />STORY
            </span>
          </h2>
        </div>

        {/* Description Section */}
        <div className="w-full md:w-2/3 md:pl-8 lg:pl-16 flex items-center">
          <div className="max-w-full md:max-w-2xl">
            <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 md:mb-6">
              CHASE is a community health organization dedicated to improving public health outcomes through education, advocacy, and community engagement.
            </p>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 md:mb-8">
              Founded with a passion for community wellness, we work tirelessly to bridge healthcare gaps and empower individuals with the knowledge and resources they need to live healthier lives.
            </p>

            <div>
              <button className="bg-[#B0FE00] text-[#153b62] px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg hover:bg-[#153b62] hover:text-[#B0FE00] transition-colors duration-300">
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