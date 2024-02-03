import country from './../../assets/country.png'
import diamond from './../../assets/diamond.png'
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navbar = () => {
  const [mobileView,setMobileView]=useState<Boolean>(false);
  return (
    <>
    <div className='flex-row flex'>
      <div className='m-4'>
        <img src={diamond} className='h-10 w-10'/>
      </div>
      <div className='hidden sm:flex flex-grow flex-row p-4 justify-end text-white text-xl'>
        <Link to='/admin'><div className='text-l font-semibold p-4'>Home</div></Link>
        <Link to='/admin'><div className='text-l font-semibold p-4'>Order</div></Link>
        <Link to='/admin'><div className='text-l font-semibold p-4'>Customer</div></Link>
        <Link to='/admin'><div className='text-l font-semibold p-4'>About</div></Link>
        <Link to='/admin'><div className='text-l font-semibold p-4'>English</div></Link>
        <Link to='/terms'><div className='text-l font-semibold p-4'>Terms</div></Link>
        <img src={country} className='h-5 w-10 mt-4'/>
      </div>
      <div className='sm:hidden flex justify-end flex-grow p-4 cursor-pointer' onClick={()=>{setMobileView(!mobileView);}}><MenuIcon sx={{color:"white"}}/></div>
    </div>
    { mobileView && <div className='bg-white'>
    <Link to='/admin'><div className='text-l font-semibold p-2 hover:bg-blue-400'>Home</div></Link>
      <Link to='/admin'><div className='text-l font-semibold p-2 hover:bg-blue-400'>Order</div></Link>
      <Link to='/admin'><div className='text-l font-semibold p-2 hover:bg-blue-400'>Customer</div></Link>
      <Link to='/admin'><div className='text-l font-semibold p-2 hover:bg-blue-400'>About</div></Link>
      <Link to='/admin'><div className='text-l font-semibold p-2 hover:bg-blue-400'>English</div></Link>
      <Link to='/terms'><div className='text-l font-semibold p-4'>Terms</div></Link>
    </div> }
    </>
  )
}

export default Navbar