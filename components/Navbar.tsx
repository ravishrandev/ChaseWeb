'use client';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full h-auto bg-[#65a30d] flex flex-col sm:flex-row sm:items-center justify-between px-4 py-2 shadow-lg space-y-2 sm:space-y-0 sm:space-x-4">
      <div className="text-white text-xl font-bold">CHASE</div>
      <nav className="flex flex-wrap sm:flex-nowrap overflow-x-auto space-x-4">
        <a href="#home" className="text-white whitespace-nowrap hover:underline">Home</a>
        <a href="#about" className="text-white whitespace-nowrap hover:underline">About</a>
        <a href="#contact" className="text-white whitespace-nowrap hover:underline">Contact</a>
        <a href="#people" className="text-white whitespace-nowrap hover:underline">Our people</a>
        <a href="#program" className="text-white whitespace-nowrap hover:underline">Our program</a>
        <a href="#involved" className="text-white whitespace-nowrap hover:underline">Get involved</a>
        <a href="#donate" className="text-white whitespace-nowrap hover:underline">Donate</a>
      </nav>
    </div>
  );
};

export default Navbar;
