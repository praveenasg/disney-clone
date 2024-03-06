import { videos } from "@/typings";

async function fetchFromTMDB(url: URL, cacheTime?: number) {
  url.searchParams.set("append_to_response", "videos");

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24, //24 hours
    },
  };

  const response = await fetch(url.toString(), options);
  const data = await response.json();
  const videos = (await data) as videos;

  return videos;
}

export async function getMovieTrailer(movieId: Number) {
  const url = new URL(`https://api.themoviedb.org/3/movie/${movieId}`);
  const data: videos = await fetchFromTMDB(url);
  return data;
}
