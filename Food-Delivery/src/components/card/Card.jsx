
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../../redux/cartSlice";
import { toast } from "react-toastify";


function Card({id,name,type,image,price,qty}) {

  let dispatch=useDispatch();
  return (
    <div className="w-[280px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-3 border-green-300">
        <div className="w-[100%] h-[60%] overflow-hidden rounded-lg">
           <img src={image} alt="Card" className="object-cover"/>
        </div>
        <div className="text-2xl font-semibold">
            {name}
        </div>
        <div className="w-full flex justify-between items-center">
            <div className="text-lg font-bold text-green-500">{price}/-</div>
            <div className="flex justify-center items-center gap-2 text-green-500 text-lg font-semibold">{type==="veg"?<LuLeafyGreen />:<GiChickenOven />}<span>{type}</span></div>
        </div>
        <button className="w-full p-3 rounded-lg bg-green-500 text-white hover:bg-green-600 cursor-pointer transition-all" onClick={()=>{
          dispatch(AddItem({id:id,name:name,type:type,image:image,price:price,qty:qty}));  //these names id,price will be used at the time of fetching
          toast.success(`${name} Added Successfully`);
        }}>Add to dish</button>
    </div>
  )
}

export default Card;