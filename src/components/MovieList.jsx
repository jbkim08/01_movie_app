export default function MovieList({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <div className="d-flex m-3" key={movie.imdbID}>
          <img src={movie.Poster} alt="영화" />
        </div>
      ))}
    </>
  );
}
