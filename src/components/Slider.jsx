import React from "react";

export default function Slider() {
  return (
    <div className="">
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <img src="/bg2.webp" class="block w-full" alt="..." />
            <div class="carousel-caption hidden md:block absolute text-left">
              <p className="text-5xl font-extrabold px-10">Enjoy a variety</p>
              <p className="text-5xl font-extrabold px-10"> of rewards</p>
              <p className="text-5xl font-extrabold px-10"> for you here!</p>
              <button className="text-white bg-green-600 rounded-3xl h-10 w-32 mb-48 ml-8 mt-2">
                Know More!
              </button>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <img src="/bg3.webp" class="block w-full" alt="..." />
            <div class="carousel-caption hidden md:block absolute text-left">
              <button className="text-white bg-green-600 rounded-3xl h-10 w-32 mb-48">
                Know More!
              </button>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <img src="/bg4.webp" class="block w-full" alt="..." />
            <div class="carousel-caption hidden md:block absolute text-left">
              <button className="text-white bg-green-600 rounded-3xl h-10 w-32 mb-48">
                Know More!
              </button>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <img src="/bg.webp" class="block w-full" alt="..." />
            <div class="carousel-caption hidden md:block absolute text-left">
              <button className="text-white bg-green-600 rounded-3xl h-10 w-32 mb-48">
                Know More!
              </button>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
