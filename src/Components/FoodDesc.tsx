import { useLocation, useNavigate } from "react-router-dom";
import '../Styles/FoodDesc.css';
import Footer from "./Footer";
import { useState } from "react";
import PButton from "./PButton";

function FoodDesc() {
    const location = useLocation();
    const navigate = useNavigate();
    const { food } = location.state || {};
    const [showPopUp , setShowPopUp] = useState(false);




    const[quantity,setQuantity] = useState(1);

    const handleIncreaseQuantity = () => {
        setQuantity(quantity+1);
      };
      const handleDecreaseQuantity = () => {
        setQuantity(quantity-1);
     
      };
      

    if (!food) {
        navigate("/"); // Redirect to home if no food data is found
        return null;
    }

    const handleOrder = () =>{
        console.log(`Ordered ${quantity} of ${food.FoodName}`);
        setShowPopUp(true);
        setTimeout(()=>setShowPopUp(false),3000);
    }
    return (
        <>
            <div className="food-desc-page">
            {/* <button onClick={() => navigate(-1)}>← Back</button> */}
            <div className="food-details">
                <img id= 'foodimgDes'src={food.img} alt={food.FoodName} />
                <h1>{food.FoodName}</h1>
                <h3 id="priceD"><strong>{food.Price}</strong> </h3>
                <p id="fdescr"> {food.Description}</p>
            </div>
            <div className="counter">
                <button onClick={handleIncreaseQuantity}>+</button>
                <input type='number'value={quantity}></input>
                <button disabled = { quantity === 1 }onClick={handleDecreaseQuantity}>-</button>
            </div>
            <PButton func={handleOrder}  name="Order" id="orderButton2" />
            </div>    
            {showPopUp && (
                   <div className="PopUp">
                   <p>Order placed successfully for {quantity} {food.FoodName}!
                    <br/> 
                    </p> 
                </div>


            )}
                 
            
        {/* {console.log(food.FoodName)} */}
        <Footer/>
        
        </>
       
    );

    // console.log{food.FoodName};
}

export default FoodDesc;
