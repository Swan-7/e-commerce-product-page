import { TiTimes } from "react-icons/ti";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function Lightbox({ products, scrollIndex, nextSlide, prevSlide, setShowLightbox }) {
  return (
    <>
      <article className="hidden lg:block bg-black fixed top-0 left-0 right-0 bottom-0 z-50 bg-opacity-75">
        <div className="flex items-center justify-center h-screen relative mx-auto">
          <button onClick={() => setShowLightbox(false)}>
            <TiTimes className="text-3xl text-white absolute top-6 right-96" />
          </button>

          {products.map((item, index) => (
            <div key={index} className={scrollIndex === index + 1 ? "relative w-[38%]" : "hidden"}>
              <img src={item.mainImage} alt="" className="lg:rounded-2xl" />

              <ul>
                <li>
                  <button onClick={prevSlide}
                    className="bg-white rounded-full p-5 shadow absolute top-1/2 -left-7 -translate-y-1/2">
                    <FaChevronLeft />
                  </button>
                </li>
                <li>
                  <button onClick={nextSlide}
                    className="bg-white rounded-full p-5 shadow absolute top-1/2 -right-7 -translate-y-1/2">
                    <FaChevronRight />
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </article>
    </>
  )
}