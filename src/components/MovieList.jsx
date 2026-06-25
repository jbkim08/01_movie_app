export default function MovieList({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <div className="image-container d-flex m-3" key={movie.imdbID}>
          <img className="img-thumbnail" src={movie.Poster} alt="movie" />
          <div className="overlay d-flex align-items-center justify-content-center">
            <span className="me-2">선호작 추가</span>
            <span>❤️</span>
          </div>
        </div>
      ))}
    </>
  );
}
