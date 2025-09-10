import { TiThSmallOutline } from "react-icons/ti";
import { GiHamburger } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { CiBowlNoodles } from "react-icons/ci";
import { TbSoup } from "react-icons/tb";


const Categories=[
    {
        id:1,
        name:"All",
        icon:<TiThSmallOutline className="w-[60px] h-[60px] text-green-600"/>
    },{
        id:2,
        name:"Breakfast",
        icon:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600"/>
    },{
        id:3,
        name:"Soups",
        icon:<TbSoup className="w-[60px] h-[60px] text-green-600"/>
    },{
        id:4,
        name:"Pasta",
        icon:<CiBowlNoodles className="w-[60px] h-[60px] text-green-600"/>
    },{
        id:5,
        name:"Main_Course",
        icon:<MdOutlineFoodBank className="w-[60px] h-[60px] text-green-600"/>
    },{
        id:6,
        name:"Pizza",
        icon:<GiFullPizza className="w-[60px] h-[60px] text-green-600"/>
    },{
        id:7,
        name:"Burger",
        icon:<GiHamburger className="w-[60px] h-[60px] text-green-600"/>
    }
];
export default Categories;