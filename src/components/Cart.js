import React from 'react';
import thumbnail from "../images/image-product-1-thumbnail.jpg";
import iconDelete from "../images/icon-delete.svg";

export default function Cart() {
    const text = "Fall Limited Edition Sneakers"
    return <>
        <article className='bg-white rounded-xl shadow-2xl p-5
        absolute z-50 right-1 left-1 top-20 mx-auto w-[95%] h-72 
        flex flex-col gap-7 lg:w-96 lg:left-auto lg:top-20'>
            <h2 className='font-bold my-3'>Cart</h2>
            <span className='border-b border-slate-300 w-[22.3rem] absolute left-0 top-[4.8rem]'></span>

            <div className='flex items-center justify-between mt-3'>
                <img src={thumbnail} alt="" className='rounded-md w-12'/>
                <ul className='text-gray-400'>
                    <li>{text}</li>
                    <li>$125.00 x 3 <span className='font-bold text-gray-900 ml-1'>$375.00</span></li>
                </ul>
                <button>
                    <img src={iconDelete} alt="" />
                </button>
            </div>

            <button className="gap-4 w-full bg-orange-500 py-3.5 px-4 mt-8
            text-white font-bold rounded-lg shadow mt-5 hover:bg-orange-600 
            transition-all duration-200">
                Checkout
            </button>
        </article>
    </>;
}
