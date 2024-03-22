import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if(!nav) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'scroll'
    }
  };

  return (
    <div className='w-full flex justify-between p-4 items-center absolute'>
      <h1 className='text-white font-bold text-2xl z-20'>Experiences</h1>
      <HiMenuAlt3 onClick={handleNav} className='text-white cursor-pointer z-20' size={25} />
      <div
        className={
          nav
          ? 'ease-in fixed duration-300 text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
          : 'ease-in absolute duration-500 top-0 h-screen left-[-1000%] z-10'
        }
      >
        <ul className='flex flex-col fixed w-full h-full items-center justify-center font-bold text-3xl space-x-8 space-y-8'>
          <li className=''>Home</li>
          <li className=''>Destinations</li>
          <li className=''>Reservations</li>
          <li className=''>Amenities</li>
          <li className=''>Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
