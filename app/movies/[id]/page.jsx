import SideNav from '@/components/SideNav'
import MainContent from '@/components/MainContent'
import { Metadata } from 'next'
import getMovie from '@/lib/get-movie'
import getVideo from '@/lib/get-video'
import getCredits from '@/lib/get-credits'
import getSimilar from '@/lib/get-similar'


export async function generateMetaDate({ params: { id } }) {
  const movieData = await getMovie(id)
  return {
    title: movieData.title || movieData.name,
    description: movieData.overview,
  }
}

const MovieDetails = async ({ params: { id } }) => {
  const movieData = getMovie(id)
  const movieVideos = getVideo(id)
  const movieCredits = getCredits(id);
  const similarMovies = getSimilar(id);

  const [movie, videos, credits, similar] = await Promise.all([
    movieData,
    movieVideos,
    movieCredits,
    similarMovies
  ]);

  const filteredVideos = []
  videos.results.forEach((video) => {
    if (video.type === 'Trailer') {
      filteredVideos.push(video)
    }
  });

  const randomTrailer =
    filteredVideos[Math.floor(Math.random() * filteredVideos.length)];

  return (
    <section className=' bg-white flex  '>
      <SideNav />
      <MainContent movie={movie} credits={credits} trailer={randomTrailer} similar={similar} />
    </section>
  )
}

export default MovieDetails