export default async function getVideo(id) {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const apiUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}