import { useSearchParams } from "react-router-dom";
import getDataFilm from "../../fetch/getDataFilm";
import { useFilm } from "../hooks/useContext";
import FilmList from "../FilmList/FilmList";
import { useEffect, useState } from "react";
import Form from "../Form/Form";

const Move = () => {
    const [searchParams, setsearchParams] = useSearchParams()
    const { setIsloading } = useFilm()
    const [result, setResult] = useState([])
    const [isFound, setIsFound] = useState(false)
    const searchValue = searchParams.get("searchInput")
    console.log(searchValue)
    useEffect(() => {
        if (!searchValue) return;
        getDataFilm(`search/movie?query=${searchValue}`)
            .then(res => {
                setResult(res.results)
                res.results.length === 0 ? setIsFound(true) : setIsFound(false)
            })
            .catch(err => console.log(err))
            .finally(() => setIsloading(false));

    }, [searchValue])

    const move = <>
        <Form searchName={setsearchParams} />
        {isFound && <div>Нічого не знайдено!</div>}
        <FilmList filmList={result} />
    </>

    return move
};

export default Move;
