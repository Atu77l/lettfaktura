import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"
import { useRef } from "react"
import background from './../../assets/background.jpg'

const Register = () => {
  const business=useRef<HTMLInputElement>(null)
  const contact=useRef<HTMLInputElement>(null)
  const password=useRef<HTMLInputElement>(null)
  const address=useRef<HTMLInputElement>(null)
  const city=useRef<HTMLInputElement>(null)
  const email=useRef<HTMLInputElement>(null)
  const postNumber=useRef<HTMLInputElement>(null)
  const phoneNumber=useRef<HTMLInputElement>(null)


  return (
    <div style={{backgroundImage:`url(${background})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
      <Navbar/>
      <div className="flex text-center justify-center m-5">
      <div className="text-center justify-center flex w-[600px] shadow-lg border-2 rounded-3xl bg-white">
        <div className="flex flex-col flex-grow gap-4">
        <div className="text-5xl text-red-600  font-bold m-5">Register</div>
        <input type="text" ref={business} className="rounded-4xl m-4 border-2 rounded-2xl p-2 h-10" placeholder="Business"/>
        <input type="text" ref={contact} className="rounded-4xl m-4 border-2 rounded-2xl p-2 h-10" placeholder="Contact Person"/>
        <input type="text" ref={password} className="rounded-4xl m-4 border-2 rounded-2xl p-2 h-10" placeholder="Password"/>
        <input type="text" ref={address} className="rounded-4xl m-4 border-2 rounded-2xl p-2 h-10" placeholder="Address"/>
        <input type="text" ref={city} className="rounded-4xl m-4 border-2 rounded-2xl p-2 h-10" placeholder="City"/>
        <input type="text" ref={postNumber} className="rounded-4xl m-4 border-2 rounded-2xl p-2 h-10" placeholder="Post Number"/>
        <input type="text" ref={email} className="rounded-4xl m-4 border-2 rounded-2xl p-2 h-10" placeholder="Email Address"/>
        <input type="text" ref={phoneNumber} className="rounded-4xl m-4 border-2 rounded-2xl p-2 h-10" placeholder="PhoneNumber"/>
        <div className="text-center justify-center flex m-4 h-10"><div className="bg-green-600 w-48 rounded-lg text-white text-xl">Register</div></div>
      </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Register