import React from "react";
import foto from "@/assets/images/pakoktanobg.png";
// import bgFoto from '@/assets/svgs/bg-foto.svg'
import Image from "next/image";
function Hero() {
  return (
    <>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center p-4 lg:w-1/2">
            <h1 className=" text-base font-semibold text-primary md:text-xl lg:text-2xl ">
              Oktavianto {" "}
              <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">
                Web Technology Developer
              </span>
            </h1>
            <h2 className="font-medium text-secondary mb-10 text-lg lg:text-2xl">
              We a Backend Developer
            </h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed ">
            Mengajar dengan penuh semangat untuk membangun generasi developer masa depan.
            dengan Kepala botak berkilau seiring dengan jernihnya pemikiran solusi.
            </p>
          </div>
          <div className="w-full self-end p-4 lg:w-1/2 ">
            <div className="mt-10 relative lg:ml-20 lg:mt-9 right-0">
              <Image src={foto} alt="fotoku" width={280} className=" scale-x-[-1] max-w-full mx-auto h-80 object-cover" />
              <span className="absolute bottom-0  -top-[100px]  -z-10 left-1/2 -translate-x-1/2" >
                <svg width='450' height='450' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2563EB" d="M46.5,-66.2C57.2,-56.3,60.8,-38.6,60.7,-23.3C60.7,-8.1,57.1,4.6,53.7,18.2C50.3,31.7,47.1,46.1,38.2,58.7C29.3,71.3,14.6,82.3,-0.8,83.4C-16.3,84.5,-32.6,75.9,-46.6,64.9C-60.7,53.9,-72.5,40.7,-77.6,25.2C-82.7,9.7,-81,-8,-74,-22.3C-66.9,-36.5,-54.5,-47.3,-41.3,-56.4C-28.1,-65.5,-14,-73.1,1.9,-75.7C17.9,-78.4,35.8,-76.2,46.5,-66.2Z" transform="translate(100 100)" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
