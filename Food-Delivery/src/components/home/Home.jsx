import Card from "../card/Card";
import Categories from "../category/category";
import Nav from "../nav/Nav";
import { food_items } from "../../food";

function Home(){
   return (
    <div  className="bg-slate-200 w-full min-h-screen">
        <Nav/>
        <div className="flex flex-wrap justify-center items-center gap-2 w-[100%]">
            {
                Categories.map((ele)=>{
                    return(
                        <div className="w-[140px] h-[150px] bg-white flex-col items-start p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-x hover:bg-green-200 cursor-pointer transition-all duration-200">
                            {ele.icon}
                            {ele.name}
                        </div>
                    );
                    
                })
            }
        </div>
        <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
            {
                food_items.map((item)=>{
                    return(
                        <div className="m-3">
                            <Card id={item.id} name={item.food_name} type={item.food_type} image={item.food_image} price={item.price}/>
                        </div>
                    );
                })
            }
        </div>
    </div>
   ); 
}
export default Home;