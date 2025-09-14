import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { useContext, useEffect } from "react";
import userContext from "../context/UserContext";
import { food_items } from "../../food";

function Nav(){
    let {input,setInput,cat,setCat,cart,setCart}=useContext(userContext);
    useEffect(()=>{
        //console.log(input);
        let newList=food_items.filter((ele)=>{
            const foodName = ele.food_name.toLowerCase().replace(/\s+/g, "");  // remove spaces with ""
            const searchInput = input.toLowerCase().replace(/\s+/g, "");       // remove spaces
            return foodName.includes(searchInput);
        })
        setCat(newList);
    },[input]);
    return (
        //Generally in tailwind css all the css we write will directly for the mobile app this is written in tailwind docs for web app for large screen we need to modify accordingly so for that
        //we are using md:px-8 that is if it is medium screen px-8 i.e it become responsive.
        //In same way we will write for all the components.
        <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8">
            <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
                <MdFastfood className="w-[30px] h-[30px] text-green-500" />
            </div>
            <form className="w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md 
            md:w-[70%]" onSubmit={(e)=>{
                e.preventDefault();
            }}>
                <FaSearch className="text-green-500 w-[20px] h-[20px]"/>
                <input type="text" placeholder="Search Items..." className="bg-white w-[100%] outline-none text-[16px] 
                md:text-[20px]" onChange={(e)=>{ 
                    setInput(e.target.value);
                }}   value={input}/>
            </form>
           <div className="relative w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl cursor-pointer" onClick={()=>{
            setCart(true);
           }}>
                <span className="absolute -top-1 -right-1 bg-green-500 text-white font-bold text-[12px] w-[20px] h-[20px] flex items-center justify-center rounded-full">
                    0
                </span>
            <FaBagShopping className="w-[30px] h-[30px] text-green-500" />
            </div>

        </div>
    );
}
export default Nav;