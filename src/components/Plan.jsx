
const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto grid lg:grid-cols-2 gap-4 py-16 px-4'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='p-2 object-cover row-span-3 w-full h-full p-2'
          src='https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80'
          alt='/'
        />
        <img
          className='w-full h-full p-2 object-cover row-span-2'
          src='https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
          alt='/'
        />
        <img
          className='w-full h-full p-2 object-cover row-span-2'
          src='https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80'
          alt='/'
        />
        <img
          className='w-full h-full p-2 object-cover row-span-3'
          src='https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='/'
        />
        <img
          className='w-full h-full p-2 object-cover row-span-2'
          src='https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80'
          alt='/'
        />
      </div>
      {/* Right Side */}
      <div className='flex flex-col my-auto'>
        <h3 className='text-6xl font-bold'>Plan Your Next Trip</h3>
        <p className='text-2xl py-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nam?
        </p>
        <p className='pb-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptates nostrum dolorum reprehenderit error! Doloribus est illo
          eius saepe? Molestias sapiente perspiciatis doloribus consectetur
          nihil facilis aliquid eaque vel quisquam.
        </p>
        <div>
          <button className='px-3 py-2 rounded-full border border-black'>
            Learn More
          </button>
          <button className='px-3 py-2 rounded-full border border-black ml-5 bg-black text-white'>Book Your Trip</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
