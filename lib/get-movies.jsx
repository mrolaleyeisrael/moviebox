export default async function getMovies() {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const baseUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

  const response = await fetch(baseUrl, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();

}