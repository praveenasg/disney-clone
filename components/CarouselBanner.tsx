"use client";
import getImagePath from "@/lib/getImagePath";
import { Movie } from "@/typings";
import Image from "next/image";

function CarouselBanner({ movie }: { movie: Movie }) {
  return (
    <div key={movie.id} className="flex-full min-w-0 relative">
      <Image
        //className="w-screen"
        className="w-screen"
        src={getImagePath(movie.backdrop_path, true)}
        alt={movie.title}
        width={1920}
        height={1080}
        key={movie.id}
      />
      {/* <div className="hidden md:inline absolute mt-0 top-0 pt-40 xl:pt-52 left-0  bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white"> */}
      <div className="hidden md:inline items-center absolute mt-0 top-0 pt-40 xl:pt-52 left-0 lg:mt-40 bg-transparent z-50 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white">
        <h2 className="text-5xl font-bold max-w-xl z-20">{movie.title}</h2>
        <p className="max-w-xl line-clamp-3">{movie.overview}</p>
      </div>
    </div>
  );
}

export default CarouselBanner;
