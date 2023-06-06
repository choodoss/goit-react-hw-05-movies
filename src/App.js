import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
const FilmLayout = lazy(() => import("./component/FilmLayout/FilmLayout"));
const Home = lazy(() => import("./component/Pages/Home"));
const Move = lazy(() => import("./component/Pages/Move"));
const MoveDetails = lazy(() => import("./component/MoveDetails/MoveDetails"));
const Cast = lazy(() => import("./component/Cast/Cast"));
const Reviews = lazy(() => import("./component/Reviews/Reviews"));
const NotFound = lazy(() => import("./component/NotFound/NotFound"));
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
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
