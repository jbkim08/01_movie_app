import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
// 부트스트랩 CSS 사용하고 커스텀은 App.css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchBox from "./components/SearchBox";
import MovieListHeading from "./components/MovieListHeading";
import ScrollContainer from "react-indiana-drag-scroll";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState(""); //검색어
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || [],
  ); //선호작
  //선호작을 로컬스토리지에 저장
  const saveToLocalStorage = (items) => {
    localStorage.setItem("favourites", JSON.stringify(items));
  };
  //선호작을 추가하기
  const addFavouriteMovie = (movie) => {
    const newList = [...favourites, movie]; //기존 선호작에 추가로 새 영화
    setFavourites(newList); //선호작 업데이트
    saveToLocalStorage(newList); //로컬스토리지 저장
  };
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=2302757e`;
    const response = await fetch(url);
    //console.log(response); //서버로 요청후 http 통신으로 받는 데이터(Jason 문자열)
    const data = await response.json(); //자바스크립트 객체로 변환
    if (data.Search) setMovies(data.Search);
  };
  //getMovieRequest(); //함수 여기서 실행하면???? => 리렌더링 될때마다 실행됨
  useEffect(() => {
    if (searchValue.length > 3) getMovieRequest(searchValue);
  }, [searchValue]); //검색어가 바뀔때마다 요청함
  return (
    <div className="container-fluid movie-app">
      <div className="row align-items-center my-4">
        <MovieListHeading heading="영화 검색" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <ScrollContainer className="row scroll-cotainer">
        <MovieList movies={movies} handleClick={addFavouriteMovie} />
      </ScrollContainer>
      <div className="row align-items-center my-4">
        <MovieListHeading heading="내 선호작" />
      </div>
    </div>
  );
}
