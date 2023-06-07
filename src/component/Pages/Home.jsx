import { useEffect, useState } from "react";
import getDataFilm from '../../fetch/getDataFilm'
import FilmList from "../FilmList/FilmList";
import { useFilm } from '../hooks/useContext';

const Home = () => {
    const [filmList, setFilmList] = useState([])
    const { setIsloading } = useFilm()

    useEffect(() => {
        setIsloading(true)
        getDataFilm('trending/all/week')
            .then(res => {
                setFilmList(res.results);
                return;
            })
            .catch(err => console.log(err))
            .finally(() => setIsloading(false));
    }, [])

    const home =
        <>
            {filmList && <FilmList filmList={filmList} />}
        </>
    return home
};

export default Home;

