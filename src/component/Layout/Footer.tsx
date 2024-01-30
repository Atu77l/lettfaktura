import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className='bg-blue-400 flex flex-col text-center justify-center'>
      <div className='flex text-center justify-center p-4'>
        <Link to='/home'><div className='p-4 font-semibold text-xl'>Home</div></Link>
        <Link to='/order'><div className='p-4 font-semibold text-xl'>Order</div></Link>
        <Link to='/contact'><div className='p-4 font-semibold text-xl'>Contact</div></Link>
      </div>
      <div className='p-4 flex text-center justify-center text-l font-semibold'>
        <div className=''>© Lettfaktura, CRO no. 638535, 2023. All rights reserved.</div>
      </div>
    </div>
  )
}

export default Footer