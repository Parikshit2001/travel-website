import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
        <div className=''>
          <h6 className='font-bold pt-2'>Solutions</h6>
          <ul className='flex flex-col justify-between space-y-2 mt-2'>
            <li className=''>Travel</li>
            <li className=''>Booking</li>
            <li className=''>Flights</li>
            <li className=''>Cruises</li>
            <li className=''>Ground</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold pt-2'>Support</h6>
          <ul className='flex flex-col justify-between space-y-2 mt-2'>
            <li className=''>Pricing</li>
            <li className=''>Documentation</li>
            <li className=''>Tours</li>
            <li className=''>Refunds</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold pt-2'>Company</h6>
          <ul className='flex flex-col justify-between space-y-2 mt-2'>
            <li className=''>About</li>
            <li className=''>Blog</li>
            <li className=''>Jobs</li>
            <li className=''>Press</li>
            <li className=''>Partners</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold pt-2'>Legal</h6>
          <ul className='flex flex-col justify-between space-y-2 mt-2'>
            <li className=''>Claims</li>
            <li className=''>Privacy</li>
            <li className=''>Terms</li>
            <li className=''>Policies</li>
            <li className=''>Conditions</li>
          </ul>
        </div>
        <div className='col-span-2 flex flex-col'>
          <p className='font-bold uppercase'>Subscribe to our newsletters</p>
          <p className='py-4'>
            The Latest deals, articles and resources sent to your inbox weekly.
          </p>
          <form className='flex flex-col sm:flex-row wrap'>
            <input className='p-2 rounded w-full' type='email' placeholder='Enter email..' />
            <button className='rounded border border-white p-2 ml-2'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row text-center text-gray-500 max-w-[1400px] mx-auto px-2 py-4 justify-between'>
        <p className=''>2022 Experiences, LLC. All rights reserved</p>
        <div className='flex justify-between py-4 space-x-20'>
          <FaFacebook size={30}/>
          <FaInstagram size={30}/>
          <FaTwitter size={30}/>
          <TiSocialPinterest size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
