import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {RemoveItem}  from "../../redux/cartSlice";
import {IncrementQty}  from "../../redux/cartSlice";
import {DecrementQty}  from "../../redux/cartSlice";
import { toast } from "react-toastify";


function Cart({id,image,name,qty,price}) {

    let dispatch=useDispatch();
  return (
    <div className='w-full h-[120px] p-2 shadow-lg flex justify-between'>
        <div className='w-[60%] h-full flex gap-5'>
        <div className='w-[60%] h-full overflow-hidden rounded-lg'>
            <img src={image} alt="image" className="object-cover"/>
        </div>
        <div className="w-[40%] h-full flex flex-col gap-3">
            <div className="text-lg font-semibold">{name}</div>
            <div className="w-[100px] h-[40px] flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-400 text-xl">
                <button className="w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-green-100 cursor-pointer" onClick={()=>{
                    dispatch(DecrementQty({id}));
                }}>-</button>
                <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center  text-green-400">{qty}</span>
                <button className="w-[30%] h-full bg-white flex justify-center items-center  text-green-400  hover:bg-green-100 cursor-pointer" onClick={()=>{
                    dispatch(IncrementQty({id})); //{id} is used because while fetching we used action.payload.id;
                }}>+</button>
            </div>
        </div>
        </div>
        <div className="flex flex-col justify-start items-end gap-6">
            <span className="text-xl text-green-400 font-semibold">{price}</span>
            <RiDeleteBin6Line className="w-[30px] h-[30px] text-red-400 cursor-pointer" onClick={()=>{
                dispatch(RemoveItem(id));
                toast.error(`${name} Removed Successfully`);
            }}/>
        </div>
    </div>
  )
}

export default Cart