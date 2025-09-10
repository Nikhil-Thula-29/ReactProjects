import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

function Nav(){
    return (
        <div className="w-full h-[100px] flex justify-between items-center px-8">
            <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
                <MdFastfood className="w-[30px] h-[30px] text-green-500" />
            </div>
            <form className="w-[60%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md">
                <FaSearch className="text-green-500 w-[20px] h-[20px]"/>
                <input type="text" placeholder="Search Items..." className="bg-white w-[100%] outline-none font-[20px]"/>
            </form>
           <div className="relative w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
                <span className="absolute -top-1 -right-1 bg-green-500 text-white font-bold text-[12px] w-[20px] h-[20px] flex items-center justify-center rounded-full">
                    0
                </span>
            <FaBagShopping className="w-[30px] h-[30px] text-green-500" />
            </div>

        </div>
    );
}
export default Nav;