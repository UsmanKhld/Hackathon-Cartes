import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidenav from '../Sidenav/Sidenav';

export const DashCart = ({cart, setCartData}) => {
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        navigate('/restaurant-dash');
        console.log(cart);
    };

    const handleClearCart = () => {
        setCartData([]);
        localStorage.removeItem('cartData');
      };

    const handleMinusQuantity = (index) => {
        const newCart = [...cart];
        if (newCart[index].quantity > 1) {
          newCart[index].quantity--;
          setCartData(newCart);
        }
        else{
          newCart.splice(index, 1);
          setCartData(newCart);
      
        }
    };
    
    const handleAddQuantity = (index) => {
        const newCart = [...cart];
        newCart[index].quantity++;
        setCartData(newCart);
    };

    const totalPrice = cart.reduce((acc, item) => {
        const numericPrice = parseFloat(item.price.replace('$', ''));
        return acc + numericPrice * item.quantity;
      }, 0);
      
      const formattedTotalPrice = totalPrice.toFixed(2); // Round to two decimal places

  return (
    <div>
        <Sidenav />
        <div className='w-full justify-center flex py-10 px-2 space-x-6 h-full bg-sky-200'>
        <main>
            <div className=' text-center font-mono font-bold text-5xl mb-5'>Cart</div>
        </main>
        </div>
    </div>
  )
}

export default DashCart;