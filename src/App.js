import { useState } from "react";
import { data } from "./data";
import { BsCart3 } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import minus from "./images/icon-minus.svg";
import plus from "./images/icon-plus.svg";
import Header from "./components/header";
import Lightbox from "./components/Lightbox";


function App() {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(1);
  const [showLightbox, setShowLightbox] = useState(false);

  const { mainImage } = products[value];

  const nextSlide = () => {
    if (scrollIndex !== products.length) {
      setScrollIndex(scrollIndex + 1)
    } else if (scrollIndex === products.length) {
      setScrollIndex(1)
    }
  }

  const prevSlide = () => {
    if (scrollIndex !== products.length) {
      setScrollIndex(scrollIndex - 1)
    } else if (scrollIndex === 1) {
      setScrollIndex(products.length)
    }
  }

  const handleMinus = () => {
    setAmount(amount - 1)
    if (amount <= 0) setAmount(0);
  }

  return (
    <>
      <Header />
      {showLightbox && <Lightbox
        products={products}
        scrollIndex={scrollIndex}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        setShowLightbox={setShowLightbox}
      />}

      <section className="flex flex-col lg:flex-row gap-7 max-w-4xl mx-auto lg:place-items-center lg:py-20">
        <article>
          <div className="lg:hidden">
            {products.map((item, index) => (
              <div key={index} className={scrollIndex === index + 1 ? "relative" : "hidden"}>
                <img
                  src={item.mainImage}
                  alt=""
                  className="w-full lg:w-[90%] lg:rounded-2xl cursor-pointer"
                  onClick={() => setShowLightbox(true)}
                />

                <ul className="lg:hidden">
                  <li>
                    <button onClick={prevSlide}
                      className="bg-white rounded-full p-5 shadow absolute top-1/2 left-4 -translate-y-1/2">
                      <FaChevronLeft />
                    </button>
                  </li>
                  <li>
                    <button onClick={nextSlide}
                      className="bg-white rounded-full p-5 shadow absolute top-1/2 right-4 -translate-y-1/2">
                      <FaChevronRight />
                    </button>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">            
                <img
                  src={mainImage}
                  alt=""
                  className="w-full lg:w-[90%] lg:rounded-2xl cursor-pointer"
                  onClick={() => setShowLightbox(true)}
                />      
          </div>

          <ul className="hidden lg:flex items-center justify-start lg:gap-5 flex-wrap mt-6">
            {products.map((item, index) => (
              <li key={item.id} onClick={() => setValue(index)}
                className={`${index === value && "border-2 border-orange-400 opacity-80"} 
                border-2 rounded-2xl overflow-hidden cursor-pointer`}>
                <img src={item.thumbnail} alt="" className="w-20" />
              </li>
            ))}
          </ul>
        </article>

        <article className="px-8 pb-20 lg:mt-12 lg:w-[56rem]">
          <h2 className="text-orange-400 uppercase tracking-widest text-sm font-bold inline-block mb-4">Sneaker company</h2>
          <h1 className="text-slate-900 mb-10 lg:mb-8 font-bold text-3xl lg:text-4xl">Fall Limited Edition Sneakers</h1>
          <p className="text-gray-500 mb-10 lg:mb-5 leading-relaxed text-sm">
            These low-profile sneakers are your perfect casual wear companion. Featuring a
            durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>

          <div className="flex flex-wrap lg:flex-col lg:items-start lg:gap-2 items-center justify-between">
            <ul className="flex gap-4 items-center">
              <li className="text-slate-900 font-bold text-3xl lg:text-2xl">$125.00</li>
              <li className="bg-orange-100 text-orange-400 tracking-widest text-sm py-1 px-2 rounded shadow font-bold inline-block">50%</li>
            </ul>

            <p className="text-gray-400 text-sm font-semibold">
              <s>$250.00</s>
            </p>
          </div>

          <div className="mt-10 lg:flex lg:gap-4 lg:items-center lg:justify-between">
            <ul className="flex lg:flex-1 items-center justify-between bg-gray-100 py-3.5 px-4 rounded shadow">
              <li onClick={handleMinus}
                className="cursor-pointer">
                <img src={minus} alt="" />
              </li>
              <li className="font-semibold">{amount}</li>
              <li onClick={() => setAmount(amount + 1)}
                className="cursor-pointer">
                <img src={plus} alt="" />
              </li>
            </ul>

            <button className="flex lg:flex-1 items-center justify-center gap-4 w-full bg-orange-500 py-3.5 px-4 text-white 
            font-bold rounded-lg shadow-2xl mt-5 lg:mt-0 shadow-orange-600/50 hover:bg-orange-600 transition-all duration-200">
              <BsCart3 /> Add to cart
            </button>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
