import PlayMovie from "@/components/PlayMovie";
import { getMovieTrailer } from "@/lib/getMovieVideos";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

type Props = {
  params: {
    id: number;
  };
};

async function page({ params: { id } }: Props) {
  const movieData = await getMovieTrailer(id);

  return <PlayMovie movie={movieData} />;
}

export async function generateStaticParams() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  const posts = [...upcomingMovies, ...topRatedMovies, ...popularMovies];

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default page;
