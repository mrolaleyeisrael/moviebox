export default async function getMovie(id) {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const baseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

  const response = await fetch(baseUrl);


  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}