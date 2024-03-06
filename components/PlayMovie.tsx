import Image from "next/image";
import getImagePath from "@/lib/getImagePath";
import { videos } from "@/typings";
import TrailerButtons from "./TrailerButtons";

type Props = {
  movie: videos;
};

function PlayMovie({ movie }: Props) {
  const videoLink = movie.videos.results.find(
    (result) =>
      result.official &&
      result.site == "YouTube" &&
      result.official &&
      result.type == "Trailer"
  );

  return (
    <div className="flex  flex-col  justify-center">
      <Image
        className="h-screen w-screen object-cover"
        src={getImagePath(movie.backdrop_path || movie.poster_path, true)}
        alt="Movie Backdrop Image"
        height={1920}
        width={1080}
      />
      <div className="absolute h-full w-full flex flex-col justify-center p-10 space-y-3 bg-gradient-to-r from-gray-900/100 via-transparent to-transparent text-white">
        <h1 className="text-5xl font-bold max-w-xl ">{movie.original_title}</h1>
        <h2 className="max-w-xl line-clamp-3">{movie.overview}</h2>
        <TrailerButtons videoLink={videoLink?.key || ""} />
      </div>
    </div>
  );
}

export default PlayMovie;
