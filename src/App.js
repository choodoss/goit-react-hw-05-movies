import { Route, Routes } from "react-router-dom";
import FilmLayout from "./component/FilmLayout/FilmLayout";
import Home from "./component/Pages/Home";
import Move from "./component/Pages/Move";
import MoveDetails from "./component/MoveDetails/MoveDetails";
import Cast from "./component/Cast/Cast";
import Reviews from "./component/Reviews/Reviews";


function App() {
  return (
    <Routes>
      <Route path="/" element={<FilmLayout />} >
        <Route index element={<Home />} />
        <Route path="/move" element={<Move />} />
        <Route path="/move/:filmId" element={<MoveDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
