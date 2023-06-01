import React, { useEffect, useState } from 'react';
import thumbnail from "../images/image-product-1-thumbnail.jpg";
import iconDelete from "../images/icon-delete.svg";

export default function Cart({ price, amount, initialPrice, cartItemCount, setCartItemCount }) {
    const text = "Fall Limited Edition Sneakers";
    const [items, setItems] = useState([]);

    // initialize an empty array to be filled by dom elements on line 43 - 54 along with corresponding dependencies
    useEffect(() => {
        const initialItems = Array.from({ length: cartItemCount }).map((_, index) => ({
            id: index,
            initialPrice: initialPrice,
            amount: amount,
            price: price,
        }));
        setItems(initialItems);
    }, [cartItemCount, initialPrice, amount, price])

    // function to delete an item from cart
    const handleDelete = (index) => {
        setItems((prevItems) => {
            const updatedItems = [...prevItems];
            updatedItems.splice(index, 1);
            return updatedItems
        });
        setCartItemCount(cartItemCount - 1);
    };

    return <>
        <article className='bg-white rounded-xl shadow-2xl absolute z-50 
        top-20 mx-1.5 md:mx-auto flex flex-col md:w-80 right-1 left-1 lg:start-3/4 lg:top-20'>
            <h2 className='font-bold my-3 border-b border-slate-300 py-4 px-6'>Cart</h2>

            {items.length <= 0 ?
                (<div className='text-gray-500 text-sm p-16 mx-auto mb-5 font-bold'>
                    <p>Your cart is empty.</p>
                </div>)
                : (
                    <div>
                        {items.map((item, index) => (
                            <div key={index} className='flex items-center gap-3 p-6'>
                            <img src={thumbnail} alt="" className='rounded-md w-10' />
                            <ul className='text-gray-400 text-sm'>
                                <li>{text}</li>
                                <li>${item.initialPrice}.00 x {item.amount}
                                    <span className='font-bold text-gray-900 ml-1'>${item.price}.00</span>
                                </li>
                            </ul>
                            <button onClick={() => handleDelete(index)} className='w-3 ml-1.5'>
                                <img src={iconDelete} alt="" />
                            </button>
                        </div>
                        ))}                        

                        <button className="w-10/12 bg-orange-500 py-3.5 px-4 mx-6 mb-9 lg:mb-6
                        text-white font-bold rounded-md shadow mt-2 hover:bg-orange-600 
                        transition-all duration-200 -translate-x-0.5">Checkout
                        </button>
                    </div>)}
        </article>
    </>
}
