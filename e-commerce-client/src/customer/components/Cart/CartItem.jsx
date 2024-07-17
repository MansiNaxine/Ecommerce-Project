import { IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@headlessui/react";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleUpdateCartItem = (num) => {
    const data = { data: { quantity: item.quantity + num }, cartItemId: item.id };
    dispatch(updateCartItem(data));
};


  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item.id));
  };

  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item.product.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-70">Size: {item.size}</p>
          <p className="opacity-70 mt-2">Seller: {item.product.brand}</p>
          <div>
            <div className="flex space-x-4 items-center text-gray-9000 mt-6">
              <p className="font-semibold">₹{item.price}</p>
              <p className="opacity-50 line-through">
                ₹{item.product?.discountedPrice}
              </p>
              <p className="text-green-600 font-semibold">
                {item.product?.discountPercent}% Off
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity<=1} color="primary" aria-label="add an alarm">
            <RemoveCircleOutlineIcon />
          </IconButton>

          <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>
          <IconButton onClick={()=>handleUpdateCartItem(1)} color="primary" aria-label="add an alarm">
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
          
          <Button onClick={handleRemoveCartItem} variant="text">
            Remove{" "}
          </Button>
          
        </div>
      </div>
    </div>
  );
};
export default CartItem;
