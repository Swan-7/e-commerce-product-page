import { TiTimes } from "react-icons/ti";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";


export default function Lightbox({ products, setShowLightbox }) {
    const [imageIndex, setImageIndex] = useState(0);

    // image navigation for lightbox on large screeens
    const prevSlide = () => {
        setImageIndex((prevIndex) => {
          if (prevIndex === 0) {
            return products.length - 1;
          } else {
            return prevIndex - 1;
          }
        });
      };
      
      const nextSlide = () => {
        setImageIndex((prevIndex) => {
          if (prevIndex === products.length - 1) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
      };
      

    return (
        <>
            <article className="hidden lg:block bg-black fixed top-0 left-0 right-0 bottom-0 z-50 bg-opacity-75">
                <div className="flex flex-col items-center justify-center h-screen relative mx-auto">
                    <button onClick={() => setShowLightbox(false)}>
                        <TiTimes className="text-2xl text-white hover:text-orange-500 absolute lg:top-16 xl:top-3 start-[65%]" />
                    </button>

                    {products.map((item, index) => (
                        <div key={index} className={index === imageIndex ? "relative lg:w-1/3" : "hidden"}>
                            <img src={item.mainImage} alt="" className="lg:rounded-2xl" />

                            <ul>
                                <li>
                                    <button onClick={prevSlide}
                                        className="bg-white rounded-full p-5 shadow absolute top-1/2 -left-7 -translate-y-1/2">
                                        <FaChevronLeft className="hover:text-orange-500" />
                                    </button>
                                </li>
                                <li>
                                    <button onClick={nextSlide}
                                        className="bg-white rounded-full p-5 shadow absolute top-1/2 -right-7 -translate-y-1/2">
                                        <FaChevronRight className="hover:text-orange-500" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ))}

                    {/* thumbnail list with function to display corresponding main image */}
                    <ul className="hidden lg:flex items-center justify-start lg:gap-5 flex-wrap mt-6 -translate-x-0.5">
                        {products.map((item, index) => (
                            <li key={item.id} onClick={() => setImageIndex(index)}
                                className={`${index === imageIndex && "border-2 border-orange-400 opacity-40"} 
                                border-2 border-transparent rounded-2xl overflow-hidden cursor-pointer`}>
                                <img src={item.thumbnail} alt="" className="w-20 hover:opacity-70" />
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
        </>
    )
}