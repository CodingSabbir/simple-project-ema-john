import { FaShoppingCart } from 'react-icons/fa';
const Product = (props) => {
const {name,img,stock,price,seller}=props.product


return (
<>
    <div className="grid grid-cols-3 border-b-2 py-3">
        <div className="col-span-1">
            <img className=" w-[200px] h-[150px] md:w-[300px] md:h-[250px] p-3 md:p-5" src={img} alt="" />
        </div>
        <div className="col-span-2">
            <h1 className=" md:text-[20px] font-mono text-violet-500 mt-10">{name}</h1>
            <br />
            <div>
                <p>by: {seller}</p>
                <br />
                <p>$ {price}</p>
                <br />
                <p>Only {stock} left in stock - Order soon</p>
            </div>
            <button onClick={()=>props.addToCard(props.product)}  className=' bg-yellow-500 md:w-[60%] flex justify-center  items-center gap-5 px-5 py-2 text-[20px] rounded-md mt-5 border outline outline-1 border-black '>  <FaShoppingCart />add to card </button>
               
           
        </div>
    </div>
</>
);
};

export default Product;


