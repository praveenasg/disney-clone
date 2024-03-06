import AutoPlayCards from "@/components/AutoPlayCards";
import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    // <main className="max-w-[2048px] mx-auto">
    <main className="">
      <CarouselBannerWrapper movies={popularMovies} />
      {/*       <div className="flex flex-col lg:-mt-42 space-y-2"> */}
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <AutoPlayCards />
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}
