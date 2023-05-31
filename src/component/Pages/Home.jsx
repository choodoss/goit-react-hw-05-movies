import { useEffect, useState } from "react";
import getDataFilm from '../../fetch/getDataFilm'
import FilmList from "../FilmList/FilmList";

const Home = () => {
    const [filmList, setFilmList] = useState([])

    useEffect(() => {
        getDataFilm('trending/all/week')
            .then(res => {
                setFilmList(res.results)
                return
            }
            );
    }, [])

    const home =
        <>
            {filmList && <FilmList filmList={filmList} />}
        </>
    return home
};

export default Home;