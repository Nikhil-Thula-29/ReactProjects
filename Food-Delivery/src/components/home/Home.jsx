import Categories from "../category/category";
import Nav from "../nav/Nav";

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
    </div>
   ); 
}
export default Home;