import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"
import background from './../../assets/background.jpg'


const Terms = () => {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <Navbar/>
      <div className="text-2xl font-semibold flex  text-white text-center justify-center">TERMS AND CONDITION</div>
      <div className="p-10 text-l m-10 rounded-lg bg-white text-black flex-col">
      <p className="font-semibold text-xl">1.Service Overview:</p>

<p className="font-semibold text-l pl-5 pt-1">Describe the nature of your invoice provider services.</p>
<p className="font-semibold text-l pl-5 pt-1">Specify the features and functionalities provided.</p>
<p className="font-semibold text-xl">2.User Accounts:</p>

<p className="font-semibold text-l pl-5 pt-1">Outline the registration process for user accounts.</p>
<p className="font-semibold text-l pl-5 pt-1">Detail the responsibilities of users in maintaining account security.</p>
<p className="font-semibold text-l pl-5 pt-1">Reserve the right to suspend or terminate accounts for violations.</p>
<p className="font-semibold text-xl">3.Billing and Payments:</p>

<p className="font-semibold text-l pl-5 pt-1">Specify the pricing structure for your services.</p>
<p className="font-semibold text-l pl-5 pt-1">Outline payment terms, including billing cycles and accepted payment methods.</p>
<p className="font-semibold text-l pl-5 pt-1">Clarify any additional fees or charges.</p>
<p className="font-semibold text-xl">4.Service Modifications:</p>

<p className="font-semibold text-l pl-5 pt-1">Reserve the right to modify or update the services, features, or pricing.</p>
<p className="font-semibold text-l pl-5 pt-1">Communicate how users will be informed about changes.</p>
<p className="font-semibold text-xl">5.Data Security and Privacy:</p>

<p className="font-semibold text-l pl-5 pt-1">Highlight your commitment to protecting user data.</p>
<p className="font-semibold text-l pl-5 pt-1">Describe the measures taken to ensure data security and privacy.</p>
<p className="font-semibold text-l pl-5 pt-1">Explain how user data will be handled, stored, and protected.</p>
<p className="font-semibold text-xl">6.Intellectual Property:</p>

<p className="font-semibold text-l pl-5 pt-1">Clarify ownership of intellectual property, including software, content, and trademarks.</p>
<p className="font-semibold text-l pl-5 pt-1">Outline user rights and restrictions regarding the use of your intellectual property.</p>
<p className="font-semibold text-xl">7.Usage Policies:</p>

<p className="font-semibold text-l pl-5 pt-1">Specify acceptable use policies for your services.</p>
<p className="font-semibold text-l pl-5 pt-1">Prohibit illegal or unauthorized activities.</p>
<p className="font-semibold text-l pl-5 pt-1">Address the consequences of violating usage policies.</p>
<p className="font-semibold text-xl">8.Termination:</p>

<p className="font-semibold text-l pl-5 pt-1">Outline the conditions under which either party can terminate the agreement.</p>
<p className="font-semibold text-l pl-5 pt-1">Detail the process for terminating user accounts.</p>
<p className="font-semibold text-xl">9.Limitation of Liability:</p>

<p className="font-semibold text-l pl-5 pt-1">Define the extent of your company liability for any damages or losses.</p>
<p className="font-semibold text-l pl-5 pt-1">Clarify that the company is not responsible for user-generated content.</p>
<p className="font-semibold text-xl">10.Dispute Resolution:</p>

<p className="font-semibold text-l pl-5 pt-1">Specify the procedures for resolving disputes, including any arbitration or mediation clauses.</p>
<p className="font-semibold text-l pl-5 pt-1">Outline the jurisdiction and governing law.</p>
<p className="font-semibold text-xl">11.Communication:</p>

<p className="font-semibold text-l pl-5 pt-1">Establish communication channels for support, feedback, or dispute resolution.</p>
      </div>
      <div className="flex text-center justify-center m-5">
      <div className="text-xl bg-green-600 text-white flex font-semibold text-center w-64 m-5 rounded-xl  justify-center p-2">Close and Go Back</div>
      </div>
      <Footer/>
    </div>
  )
}

export default Terms