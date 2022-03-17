import React from "react";
import "./Cart.css";
import { useDispatch, useSelector} from "react-redux";
import { cartActions } from "../store/cartSlice";
const Cart = () => {
 const dispatch = useDispatch();
 const quantity = useSelector((state) => state.cart.totalQuantity)

  const handleShowCart = (e) => {
    e.preventDefault()
 dispatch(cartActions.setShowCart())
  }



  return (
    <div className="cartIcon">
      <h3 onClick={handleShowCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
