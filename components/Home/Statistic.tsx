'use client';

const Statistic = () => {
    return (
        <div className="-mt-32 -mb-32 bg-neutral relative z-30">
            <div className="flex flex-wrap justify-center gap-6 px-4">
                {/* Box 1 */}
                <div className="bg-white p-8 rounded-xl shadow-2xl w-80 h-80 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
                    <h3 className="text-9xl font-bold text-[#153b62] mb-2">10</h3>
                    <p className="text-gray-600 font-bold uppercase tracking-wide">Years</p>
                </div>
                
                {/* Box 2 */}
                <div className="bg-white p-8 rounded-xl shadow-2xl w-80 h-80 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
                    <h3 className="text-9xl font-bold text-[#153b62] mb-2">8</h3>
                    <p className="text-gray-600 font-bold uppercase tracking-wide">Schools</p>
                </div>
                
                {/* Box 3 */}
                <div className="bg-white p-8 rounded-xl shadow-2xl w-80 h-80 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
                    <h3 className="text-8xl font-bold text-[#153b62] mb-2">400+</h3>
                    <p className="text-gray-600 font-bold uppercase tracking-wide">Volunteers</p>
                </div>
                
                {/* Box 4 */}
                <div className="bg-white p-8 rounded-xl shadow-2xl w-80 h-80 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
                    <h3 className="text-8xl font-bold text-[#153b62] mb-2">1600+</h3>
                    <p className="text-gray-600 font-bold uppercase tracking-wide">Students</p>
                </div>
            </div>
        </div>
    );
};

export default Statistic;