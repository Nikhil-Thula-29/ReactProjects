import image1 from "../../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";


function Card({id,name,type,image,price}) {
  return (
    <div className="w-[280px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg">
        <div className="w-[100%] h-[60%] overflow-hidden rounded-lg">
           <img src={image} alt="Card" className="object-cover"/>
        </div>
        <div className="text-2xl font-semibold">
            {name}
        </div>
        <div className="w-full flex justify-between items-center">
            <div className="text-lg font-bold text-green-500">{price}</div>
            <div className="flex justify-center items-center gap-2 text-green-500 text-lg font-semibold"><LuLeafyGreen /><span>{type}</span></div>
        </div>
        <button className="w-full p-3 rounded-lg bg-green-500 text-white hover:bg-green-600 cursor-pointer transition-all">Add to dish</button>
    </div>
  )
}

export default Card;