import { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import getDataFilm from "../../fetch/getDataFilm";
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Section, ButtonBack, FilmCard, FilmPoster, Link } from "./MoveDetails.styled";
import { Container } from "../FilmLayout/FilmLayout.styled";

const MoveDetails = () => {
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [score, setScore] = useState('')
    const [overview, setOverview] = useState('')
    const [genres, setGenres] = useState([])
    const [response, setResponse] = useState('')


    const { filmId } = useParams()
    useEffect(() => {
        getDataFilm(`movie/${filmId}`)
            .then(res => {
                setTitle(`${res.original_title}`)
                setGenres(res.genres.map(g => g.name).join(', '))
                setOverview(`${res.overview}`)
                setImage(`https://image.tmdb.org/t/p/w500${res.poster_path}`)
                setScore(`${(10 * res.vote_average).toFixed(0)}%`)
            }).catch(err => setResponse(err.toString()))
    }, [])

    const moveDetails =
        <>
            {!response &&
                <Section>
                    <Container>
                        <ButtonBack><FaLongArrowAltLeft /> go back</ButtonBack>
                        <FilmCard>
                            <FilmPoster src={image} alt={title} />
                            <div>
                                <h2>{title}</h2>
                                <p>User Score: {score}</p>
                                <h3>Overview</h3>
                                <p>{overview}</p>
                                <h3>Genres</h3>
                                <p>{genres}</p>
                            </div>
                        </FilmCard>
                    </Container>
                </Section>}
            {!response && <Section>
                <Container>
                    <p>Additional information</p>
                    <ul>
                        <li><Link to='cast'>Cast</Link></li>
                        <li><Link to='reviews'>Reviews</Link></li>
                    </ul>
                </Container>
            </Section>
            }
            <Outlet />
            {response && <div> {response}</div>}
        </>
    return moveDetails
};

export default MoveDetails;

