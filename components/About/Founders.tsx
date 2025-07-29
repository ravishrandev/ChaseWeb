'use client';
const Founders = () => {
    return (
        <section className="py-32 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-6xl md:text-5x; font-bold mb-16 text-[#153b62]">Our Founders</h2>

                {/* Card Layout */}
                <div className="flex flex-col md:flex-row justify-center gap-10">
                    {/* Card 1 */}
                    <div className="bg-[#009844] rounded-2xl shadow-x; p-10 w-full md:w-1/2">
                        <img src="/jenny_tran.jpg" alt="Founder 1" className= "rounded-full w-full h-90 object-cover mb-6" />
                        <h3 className="text-[#ffffff] font-bold text-2xl mb-2">Dr. Jenny Tran</h3>
                        <p className="text-[#ffffff] text-lg">
                            Dr Jenny Tran is a Lead Analyst at the Paul Ramsay Foundation where she helped to lead the COVID-19 response.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-[#009844] rounded-2xl shadow-x; p-10 w-full md:w-1/2">
                        <img src="/richard_liu.jpg" alt="Founder 2" className= "rounded-full w-full h-90 object-cover mb-6" />
                        <h3 className="text-[#ffffff] font-bold text-2xl mb-2">Dr. Jenny Tran</h3>
                        <p className="text-[#ffffff] text-lg">
                            Dr Richard Liu is currently working as a Paediatric Registrar at the Sydney Children's Hospitals Network.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Founders;