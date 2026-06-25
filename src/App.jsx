import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
// 부트스트랩 CSS 사용하고 커스텀은 App.css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchBox from "./components/SearchBox";
import MovieListHeading from "./components/MovieListHeading";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=2302757e`;
    const response = await fetch(url);
    //console.log(response); //서버로 요청후 http 통신으로 받는 데이터(Jason 문자열)
    const data = await response.json(); //자바스크립트 객체로 변환
    setMovies(data.Search);
  };
  //getMovieRequest(); //함수 여기서 실행하면???? => 리렌더링 될때마다 실행됨
  useEffect(() => {
    getMovieRequest("amazing");
  }, []); //처음 한번만
  return (
    <div className="container-fluid movie-app">
      <div className="row align-items-center my-4">
        <MovieListHeading heading="영화 검색" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
