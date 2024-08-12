import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function CarouselDarkVariant() {
  return (
    <>
      <TECarousel
        showControls
        showIndicators
        crossfade
        ride="carousel"
        prevBtnIcon={
          <>
            <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </>
        }
        nextBtnIcon={
          <>
            <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </>
        }
        theme={{
          indicator:
            "mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
        }}
      >
        <div className="relative w-full h-80 overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative  h-80 float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/images/hero_images/IMG_2047.jpg"
              className="block w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-none max-h-none"
              alt="..."
              
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
              <h5 className="text-xl">Preclinical Students</h5>
              <p>
                Students standing by the NILE statue for a group Photo.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative h-80 float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/images/hero_images/IMG_2040.jpg"
              className="block w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-none max-h-none "
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
              <h5 className="text-xl">Students discussing academic materials</h5>
              <p>
                    Preclinical Students In Volta Block.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative h-80 float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/images/hero_images/IMG_2041.jpg"
              className="block w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-none max-h-none "
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
              <h5 className="text-xl">Medical Students</h5>
              <p>
                In front of the Biochemistry and Physiology Laboratories.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={4}
            className="relative h-80 float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/images/hero_images/IMG_2045.jpg"
              className="block w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-none max-h-none "
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
              <h5 className="text-xl">Preclinical Students by the Garden.</h5>
              <p>
              Students standing by the NILE statue for a group Photo.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={5}
            className="relative h-80 float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/images/hero_images/IMG_2059.jpg"
              className="block w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-none max-h-none "
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
              <h5 className="text-xl">Students leaving class.</h5>
              <p>
                Preclinical Students leaving Volta Block after a long day.
              </p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}