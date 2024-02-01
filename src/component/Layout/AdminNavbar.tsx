import country from './../../assets/country.png'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    return (
        <>
            <div className='flex-row flex'>
                <div className='m-4 flex flex-row gap-4'>
                    <div className='text-white h-10 w-10'><AccountCircleIcon style={{fontSize:"50px"}}/></div>
                    <div className='sm:hidden text-white'><MenuIcon /></div>
                    <div className='flex flex-col hidden sm:block'>
                        <div className="text-white font-semifold">John Androse</div>
                        <div className="text-white font-semifold">Financial Manager</div>
                    </div>
                </div>
                <div className='hidden sm:flex flex-grow flex-row p-4 justify-end text-white text-xl'>
                    <Link to='/admin'><div className='text-l font-semibold p-4'>English</div></Link>
                    <img src={country} className='h-5 w-10 mt-4' />
                </div>
                <div className='sm:hidden flex justify-end flex-grow p-4 cursor-pointer'>
                    <div className='flex flex-row text-white'>
                        <Link to='/admin'><div className='text-l font-semibold p-2 hover:bg-blue-400'>English</div></Link>
                        <img src={country} className='h-5 w-10 mt-2' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar