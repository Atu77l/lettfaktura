import Navbar from "../Layout/Navbar"
import ReceiptIcon from '@mui/icons-material/Receipt';
import DescriptionIcon from '@mui/icons-material/Description';
import Person3Icon from '@mui/icons-material/Person3';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PaymentsIcon from '@mui/icons-material/Payments';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import LogoutIcon from '@mui/icons-material/Logout';
import CancelIcon from '@mui/icons-material/Cancel';
import PrintIcon from '@mui/icons-material/Print';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ApiIcon from '@mui/icons-material/Api';
import AnnouncementIcon from '@mui/icons-material/Announcement';

// interface dataType {
//   "ArticleNo": String,
//   "Product": String,
//   "Inprice": Number,
//   "Price": Number,
//   "Unit": Number,
//   "Instock": Number,
//   "Description": String
// }

const data = [
  { "ArticleNo": 1, "Product": 'this is invoice of shirt', "Inprice": 1234, "Price": 12343, "Unit": "Km/hr", "Instock": 235235, "Description": "This is the description with fifty character this." },
  { "ArticleNo": 1, "Product": 'this is invoice of shirt', "Inprice": 1234, "Price": 12343, "Unit": "Km/hr", "Instock": 235235, "Description": "This is the description with fifty character this." },
  { "ArticleNo": 1, "Product": 'this is invoice of shirt', "Inprice": 1234, "Price": 12343, "Unit": "Km/hr", "Instock": 235235, "Description": "This is the description with fifty character this." },
  { "ArticleNo": 1, "Product": 'this is invoice of shirt', "Inprice": 1234, "Price": 12343, "Unit": "Km/hr", "Instock": 235235, "Description": "This is the description with fifty character this." },
  { "ArticleNo": 1, "Product": 'this is invoice of shirt', "Inprice": 1234, "Price": 12343, "Unit": "Km/hr", "Instock": 235235, "Description": "This is the description with fifty character this." },
  { "ArticleNo": 1, "Product": 'this is invoice of shirt', "Inprice": 1234, "Price": 12343, "Unit": "Km/hr", "Instock": 235235, "Description": "This is the description with fifty character this." }
]

const Admin = () => {
  return (
    <div>
      <div className="bg-blue-600 fixed top-0 w-full"><Navbar /></div>
      <div className="flex-row flex h-screen mt-20">
        <div className="hidden lg:block fixed top-24 flex-col w-48 text-center justify-center shadow-lg border-2 rounded h-screen">
          <div className="border-b-2 border-blue-600 p-2">Menu</div>
          <div className="text-left pl-6 p-2"><ReceiptIcon sx={{color:"green"}} />invoices</div>
          <div className="text-left pl-6 p-2"><Person3Icon sx={{color:"green"}}/>Customers</div>
          <div className="text-left pl-6 p-2"><DescriptionIcon sx={{color:"green"}}/>My Business</div>
          <div className="text-left pl-6 p-2"><ReceiptIcon sx={{color:"orange"}}/>Invoice Journal</div>
          <div className="text-left pl-6 p-2"><PaymentsIcon sx={{color:"orange"}}/>Price List</div>
          <div className="text-left pl-6 p-2"><CancelIcon sx={{color:"red"}}/>Unpaid Invoices</div>
          <div className="text-left pl-6 p-2"><AnnouncementIcon sx={{color:"blue"}}/>Inventory Control</div>
          <div className="text-left pl-6 p-2"><ApiIcon sx={{color:"blue"}}/>Member Invoicing</div>
          <div className="text-left pl-6 p-2"><LocalOfferIcon sx={{color:"green"}}/>offer</div>
          <div className="text-left pl-6 p-2"><ImportExportIcon sx={{color:"blue"}}/>Import/Export</div>
          <div className="text-left pl-6 p-2"><LogoutIcon sx={{color:"blue"}} />Logout</div>
        </div>

        <div className="flex-grow lg:ml-44 w-full justify-end fixed top-20">
          <div className="flex flex-col md:flex-row m-5">
          <div className="flex flex-col justify-start gap-4">
          <div className="flex flex-row border-2 rounded-lg"><input type="text" placeholder="Search Article No." className="flex-grow rounded-lg p-1" /><SearchIcon sx={{color:"green",marginTop:"5px"}}/></div>
          <div className="flex flex-row border-2 rounded-lg"><input type="text" placeholder="Search Product" className="flex-grow rounded-lg p-1" /><SearchIcon sx={{color:"green",marginTop:"5px"}}/></div>
          </div>
          <div className="hidden sm:flex flex-grow sm:mr-44 justify-start mt-2 md:mt-0 md:justify-end gap-4">
          <div className="border-2 rounded-lg p-1 h-10">New Product<AddIcon sx={{color:"orange"}}/></div>
          <div className="border-2 rounded-lg p-1 h-10">Print List<PrintIcon sx={{color:"orange"}} /></div>
          <div className="border-2 rounded-lg p-1 h-10">Advanced Mode<AssessmentIcon sx={{color:"orange"}}/></div>
          </div>
          <div className="sm:hidden flex flex-grow sm:mr-44 justify-start mt-2 md:mt-0 md:justify-end gap-4">
          <div className="border-2 rounded-lg p-1 h-10"><AddIcon sx={{color:"orange"}}/></div>
          <div className="border-2 rounded-lg p-1 h-10"><PrintIcon sx={{color:"orange"}} /></div>
          <div className="border-2 rounded-lg p-1 h-10"><AssessmentIcon sx={{color:"orange"}}/></div>
          </div>
          </div>
          <div className="m-5">
            <div className="flex flex-row gap-1">
              <div className="p-1"></div>
              <div className="p-1 font-semibold w-36 text-center">Article No.<ArrowDownwardIcon sx={{color:"green"}} /></div>
              <div className="p-1 font-semibold text-center">Product/Service.<ArrowDownwardIcon sx={{color:"green"}}/></div>
              <div className="p-1 font-semibold w-16 hidden sm:block text-center">InPrice.</div>
              <div className="p-1 font-semibold w-16 hidden sm:block text-center">Unit.</div>
              <div className="p-1 font-semibold w-36 hidden sm:block text-center">In Stock.</div>
              <div className="p-1 font-semibold flex-grow hidden sm:block text-center">Description</div>
            </div>
            <div className="flex flex-col">
              {data.map((item, key) => {
                return (
                  <div className="flex flex-row gap-1">
                    <div className="p-1 "><ArrowForwardIcon sx={{color:"green"}}/></div>
                    <div className="p-1 border-2 rounded-2xl w-36">{item.ArticleNo}</div>
                    <div className="p-1 border-2 rounded-2xl">{item.Product}</div>
                    <div className="p-1 border-2 rounded-2xl w-16 hidden sm:block">{item.Inprice}</div>
                    <div className="p-1 border-2 rounded-2xl w-16 hidden sm:block">{item.Price}</div>
                    <div className="p-1 border-2 rounded-2xl w-36 hidden sm:block">{item.Instock}</div>
                    <div className="p-1 border-2 rounded-2xl flex-grow hidden sm:block">{item.Description}</div>
                  </div>
                )
              })}
            </div>

          </div>
          <div className="grid grid-cols-2">
          <div className="flex flex-row ml-5 gap-4">
            <select value={25} className="border-2 rounded-lg">
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={75}>75</option>
              <option value={100}>100</option>
            </select> 
            <div className="font-semibold">Page Size</div>
          </div>
          <div className="flex">
          <div className="flex justify-end gap-4">
           <div className="border-2 border-black text-center rounded-lg w-12 h-7">1</div>
           <div className="border-2 border-black text-center rounded-lg w-12 h-7">2</div>
           <div className="border-2 border-black text-center rounded-lg w-12 h-7">3</div>
           <div className="border-2 border-black text-center rounded-lg w-12 h-7">4</div>
          </div>
          </div>
        </div>
          
        </div>
       
      </div>
    </div>
  )
}

export default Admin