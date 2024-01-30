import { useRef } from "react"
import { Link } from "react-router-dom"
import Navbar from './../Layout/Navbar.tsx'
import Footer from './../Layout/Footer.tsx'
import background from './../../assets/background.jpg'

const Login = () => {
  const login = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-blue-400 h-screen" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <Navbar />
      <div className="bg-white sm:m-auto h-[400px] m-5 sm:w-[600px] rounded-lg text-center justify-center">
        <div className="text-red-600 text-4xl font-semibold text-left p-4 m-2">Login</div>
        <div className="flex flex-col p-4 m-2">
          <div className="text-xl text-left">Enter Your Email Address</div>
          <input type="text" ref={login} className="border-2 rounded-lg h-8 p-1" placeholder="Email Address" />
          <div className="text-xl text-left">Enter Your Password</div>
          <input type="text" ref={password} className="border-2 rounded-lg h-8 p-1" placeholder="Password" />
          <div className="text-left mt-2"><input type="checkbox" className="h-4 w-4" />Remember Password</div>
          <div className="flex text-center justify-center"><div className="bg-green-500 rounded-2xl w-36 h-10 text-xl text-center justify-center text-white">Login</div></div>
        </div>
        <div className="flex flex-row text-center justify-center gap-5">
          <Link to='/register'><div className="text-l font-serif">Register</div></Link>
          <Link to='/forget_password'><div className="text-l font-serif">Forget Password</div></Link>
        </div>
      </div>
      <div className="fixed bottom-0 w-full"><Footer /></div>
    </div>
  )
}

export default Login