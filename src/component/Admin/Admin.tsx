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
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {useState,useEffect} from 'react';
import AdminNavbar from './../Layout/AdminNavbar'

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
 { "ArticleNo": 1, "Product": 'this is invoice of shirt', "Inprice": 1234, "Price": 12343, "Unit": "Km/hr", "Instock": 235235, "Description": "This is the description with fifty character this." },
 { "ArticleNo": 1, "Product": 'this is invoice of shirt', "Inprice": 1234, "Price": 12343, "Unit": "Km/hr", "Instock": 235235, "Description": "This is the description with fifty character this." },
 { "ArticleNo": 1, "Product": 'this is invoice of shirt', "Inprice": 1234, "Price": 12343, "Unit": "Km/hr", "Instock": 235235, "Description": "This is the description with fifty character this." },
 { "ArticleNo": 1, "Product": 'this is invoice of shirt', "Inprice": 1234, "Price": 12343, "Unit": "Km/hr", "Instock": 235235, "Description": "This is the description with fifty character this." },
 { "ArticleNo": 1, "Product": 'this is invoice of shirt', "Inprice": 1234, "Price": 12343, "Unit": "Km/hr", "Instock": 235235, "Description": "This is the description with fifty character this." },
 { "ArticleNo": 1, "Product": 'this is invoice of shirt', "Inprice": 1234, "Price": 12343, "Unit": "Km/hr", "Instock": 235235, "Description": "This is the description with fifty character this." },
{ "ArticleNo": 1, "Product": 'this is invoice of shirt', "Inprice": 1234, "Price": 12343, "Unit": "Km/hr", "Instock": 235235, "Description": "This is the description with fifty character this." }, { "ArticleNo": 1, "Product": 'this is invoice of shirt', "Inprice": 1234, "Price": 12343, "Unit": "Km/hr", "Instock": 235235, "Description": "This is the description with fifty character this." },
{ "ArticleNo": 1, "Product": 'this is invoice of shirt', "Inprice": 1234, "Price": 12343, "Unit": "Km/hr", "Instock": 235235, "Description": "This is the description with fifty character this." },
{ "ArticleNo": 1, "Product": 'this is invoice of shirt', "Inprice": 1234, "Price": 12343, "Unit": "Km/hr", "Instock": 235235, "Description": "This is the description with fifty character this." },
{ "ArticleNo": 1, "Product": 'this is invoice of shirt', "Inprice": 1234, "Price": 12343, "Unit": "Km/hr", "Instock": 235235, "Description": "This is the description with fifty character this." },
{ "ArticleNo": 1, "Product": 'this is invoice of shirt', "Inprice": 1234, "Price": 12343, "Unit": "Km/hr", "Instock": 235235, "Description": "This is the description with fifty character this." },
{ "ArticleNo": 1, "Product": 'this is invoice of shirt', "Inprice": 1234, "Price": 12343, "Unit": "Km/hr", "Instock": 235235, "Description": "This is the description with fifty character this." },
] 
function min<T extends number>(a: T, b: T): T {
  return a < b ? a : b;
}

const Admin = () => {
  const [numberBox,setNumberBox]=useState<number>(1)
  const [pageSize,setPageSize]=useState<number>(10);
  const [resultInvoice,setResultInvoice]=useState<any>([])

  useEffect(()=>{
  let n=data.length;
  let result: any = data.slice((numberBox - 1) * 10, min(numberBox * 10, n) as any);
  setResultInvoice(result);
  console.log(result,'result');
  },[pageSize,numberBox])

  return (
    <div>
      <div className="bg-blue-600 fixed top-0 w-full"><AdminNavbar /></div>
      <div className="flex-row flex mt-20">
        <div className="hidden lg:block fixed top-24 flex-col w-52 text-center justify-center shadow-xl shadow-blue-500 rounded h-screen">
          <div className="border-b-2 border-blue-600 p-2 font-semibold text-xl text-gray-400">Menu</div>
          <div className="text-left pl-6 p-2 cursor-pointer font-semibold text-gray-400"><ReceiptIcon sx={{color:"green"}} />&nbsp;&nbsp;invoices</div>
          <div className="text-left pl-6 p-2  cursor-pointer font-semibold text-gray-400"><Person3Icon sx={{color:"green"}}/>&nbsp;&nbsp;Customers</div>
          <div className="text-left pl-6 p-2  cursor-pointer font-semibold text-gray-400"><DescriptionIcon sx={{color:"green"}}/>&nbsp;&nbsp;My Business</div>
          <div className="text-left pl-6 p-2  cursor-pointer font-semibold text-gray-400"><ReceiptIcon sx={{color:"orange"}}/>&nbsp;&nbsp;Invoice Journal</div>
          <div className="text-left pl-6 p-2  cursor-pointer font-semibold text-gray-400"><PaymentsIcon sx={{color:"orange"}}/>&nbsp;&nbsp;Price List</div>
          <div className="text-left pl-6 p-2  cursor-pointer font-semibold text-gray-400"><CancelIcon sx={{color:"red"}}/>&nbsp;&nbsp;Unpaid Invoices</div>
          <div className="text-left pl-6 p-2  cursor-pointer font-semibold text-gray-400"><AnnouncementIcon sx={{color:"blue"}}/>&nbsp;&nbsp;Inventory Control</div>
          <div className="text-left pl-6 p-2  cursor-pointer font-semibold text-gray-400"><ApiIcon sx={{color:"blue"}}/>&nbsp;&nbsp;Member Invoicing</div>
          <div className="text-left pl-6 p-2  cursor-pointer font-semibold text-gray-400"><LocalOfferIcon sx={{color:"green"}}/>&nbsp;&nbsp;offer</div>
          <div className="text-left pl-6 p-2  cursor-pointer font-semibold text-gray-400"><ImportExportIcon sx={{color:"blue"}}/>&nbsp;&nbsp;Import/Export</div>
          <div className="text-left pl-6 p-2  cursor-pointer font-semibold text-gray-400"><LogoutIcon sx={{color:"blue"}} />&nbsp;&nbsp;Logout</div>
        </div>

        <div className="flex-grow lg:ml-44 w-full justify-end p-6  overflow-auto">
          <div className="flex flex-col md:flex-row m-5">
          <div className="flex flex-col justify-start gap-4">
          <div className="flex flex-row border-2 rounded-lg"><input type="text" placeholder="Search Article No." className="flex-grow rounded-lg p-1" /><SearchIcon sx={{color:"green",marginTop:"5px"}}/></div>
          <div className="flex flex-row border-2 rounded-lg"><input type="text" placeholder="Search Product" className="flex-grow rounded-lg p-1" /><SearchIcon sx={{color:"green",marginTop:"5px"}}/></div>
          </div>
          <div className="hidden sm:flex flex-grow sm:mr-44 justify-start mt-2 md:mt-0 md:justify-end gap-4">
          <div className="border-2 rounded-lg  pl-1 pr-1 h-8 font-semibold text-gray-400">New Product<AddIcon sx={{color:"orange"}}/></div>
          <div className="border-2 rounded-lg  pl-1 pr-1 h-8 font-semibold text-gray-400">Print List<PrintIcon sx={{color:"orange"}} /></div>
          <div className="border-2 rounded-lg pl-1 pr-1 h-8 font-semibold text-gray-400">Advanced Mode<AssessmentIcon sx={{color:"orange"}}/></div>
          </div>
          <div className="sm:hidden flex flex-grow sm:mr-44 justify-start mt-2 md:mt-0 md:justify-end gap-4">
          <div className="border-2 rounded-lg p-1 h-10"><AddIcon sx={{color:"orange"}}/></div>
          <div className="border-2 rounded-lg p-1 h-10"><PrintIcon sx={{color:"orange"}} /></div>
          <div className="border-2 rounded-lg p-1 h-10"><AssessmentIcon sx={{color:"orange"}}/></div>
          </div>
          </div>
          <div className="m-5">
            <div className="flex flex-row gap-1">
              <div className="p-1 w-6"></div>
              <div className="pl-1 font-semibold w-36 text-center">Article No.<ArrowDownwardIcon sx={{color:"green"}} /></div>
              <div className="pl-1 font-semibold w-48 text-center">Product/Service.<ArrowDownwardIcon sx={{color:"green"}}/></div>
              <div className="pl-1 font-semibold w-16 hidden sm:block text-center">InPrice.</div>
              <div className="pl-1 font-semibold w-16 hidden sm:block text-center">Unit.</div>
              <div className="pl-1 font-semibold w-36 hidden sm:block text-center">In Stock.</div>
              <div className="pl-1 font-semibold flex-grow hidden sm:block text-center">Description</div>
            </div>
            <div className="flex flex-col gap-2">
              {resultInvoice.map((item:any, key:number) => {
                return (
                  <div className="flex flex-row gap-1" key={key}>
                    <div className="pl-1 pr-1 w-6"><ArrowForwardIcon sx={{color:"green"}}/></div>
                    <div className="pl-1 pr-1 border-2 rounded-2xl w-36">{item.ArticleNo}</div>
                    <div className="pl-1 pr-1 border-2 w-48 rounded-2xl">{item.Product}</div>
                    <div className="pl-1 pr-1 border-2 rounded-2xl w-16 hidden sm:block">{item.Inprice}</div>
                    <div className="pl-1 pr-1 border-2 rounded-2xl w-16 hidden sm:block">{item.Price}</div>
                    <div className="pl-1 pr-1 border-2 rounded-2xl w-36 hidden sm:block">{item.Instock}</div>
                    <div className="pl-1 pr-1 border-2 rounded-2xl flex-grow hidden sm:block">{item.Description}</div>
                    <div className="pl-1 pr-1 text-center justify-center flex flex-grow text-blue-500  sm:hidden"><MoreHorizIcon/></div>
                  </div>
                )
              })}
            </div>

          </div>
          <div className="flex flex-col sm:flex-row">
          <div className="flex flex-row ml-5 gap-4">
            <select value={25} className="border-2 border-black rounded-lg" onChange={(e:any)=>{setPageSize(e.target.value);}}>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={75}>75</option>
              <option value={100}>100</option>
            </select> 
            <div className="font-semibold">Page Size</div>
          </div>
          <div className="flex-grow">
          <div className="flex justify-end gap-4 text-right">
           <div className="border-2 border-black text-center rounded-lg w-12 h-7 font-semibold cursor-pointer" style={{backgroundColor:numberBox==1?'lightblue':''}} onClick={()=>{setNumberBox(1);}}>1</div>
           <div className="border-2 border-black text-center rounded-lg w-12 h-7 font-semibold cursor-pointer" style={{backgroundColor:numberBox==2?'lightblue':''}} onClick={()=>{setNumberBox(2);}}>2</div>
           {/* <div className="border-2 border-black text-center rounded-lg w-12 h-7" onClick={()=>{setNumberBox(3);}}>3</div>
           <div className="border-2 border-black text-center rounded-lg w-12 h-7" onClick={()=>{setNumberBox(4);}}>4</div> */}
          </div>
          </div>
        </div>
          
        </div>
       
      </div>
    </div>
  )
}

export default Admin