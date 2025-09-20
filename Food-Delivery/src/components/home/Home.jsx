import Card from "../card/Card";
import Categories from "../category/category";
import Nav from "../nav/Nav";
import { food_items } from "../../food";
import { useContext } from "react";
import userContext from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";


function Home(){

    let {input,setInput,cat,setCat,cart,setCart}=useContext(userContext);
    function getCategories(catname){
        if(catname==="All"){
            setCat(food_items);
        }else{
            let newList=food_items.filter((ele)=>{
                return ele.food_category.toLowerCase()===catname.toLowerCase();
            });
            setCat(newList);
        }
    }

    let items=useSelector((state)=>{
        return state.cart //this cart is used in store (name).
    })
    return (
    <div  className="bg-slate-200 w-full min-h-screen">
        <Nav/>
        {
            !input?<div className="flex flex-wrap justify-center items-center gap-2 w-[100%]">
            {
                Categories.map((ele)=>{
                    return(
                        <div className="w-[140px] h-[150px] bg-white flex-col items-start p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-x hover:bg-green-200 cursor-pointer 
                        transition-all duration-200" onClick={()=>{
                            getCategories(ele.name)
                        }}>
                            {ele.icon}
                            {ele.name}
                        </div>
                    );
                    
                })
            }
        </div>:null
        }
        
        <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
            {
                cat.length>0?(
                cat.map((item)=>{
                    return(
                        <div className="m-3">
                            <Card id={item.id} name={item.food_name} type={item.food_type} image={item.food_image} price={item.price} qty={item.food_quantity}/>
                        </div>
                    );
                })
            ):(
                <p className="text-gray-600 text-2xl font-semibold w-full text-center mt-10">
                    No items found.....
                 </p>
                )
            }
        </div>

        <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 ${cart?"translate-x-0":"translate-x-full "}`}>
            <header className="w-[100%] flex justify-between items-center">
                <span className="text-green-400 text-[18px] font-semibold">Order Items</span>
                <RxCross2 className= "w-[30px] h-[30px] text-green-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600" 
                onClick={()=>{
                    setCart(false);
                }}/>
            </header>
            <div className="w-full mt-9 flex flex-col gap-8">
           {items.map((item)=>{
                return <Cart id={item.id} image={item.image} name={item.name} qty={item.qty} price={item.price}/> 
           })}
           </div>
        </div>
    </div>
   ); 
}
export default Home;