import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getDataFilm from "../../fetch/getDataFilm";
import { Section } from "../MoveDetails/MoveDetails.styled";
import { Container } from "../FilmLayout/FilmLayout.styled";
import { Actor, ActorList, ActorPoster } from "./Cast.styled";

const Cast = () => {

    const [state, setState] = useState([])

    const [response, setResponse] = useState('')


    const { filmId } = useParams()
    useEffect(() => {
        getDataFilm(`movie/${filmId}/credits`)
            .then(({ cast }) => {
                setState(cast.slice(0, 5))
            }).catch(err => setResponse(err.toString()))
        console.log(cast)
    }, [])
    const cast =
        (!response ? (<Section>
            <Container>
                <ActorList>
                    {state.map(act => {
                        return (
                            <Actor key={act.id}>
                                <ActorPoster src={`https://image.tmdb.org/t/p/w500${act.profile_path}`} alt="" />
                                <div>
                                    <h4>{act.name}</h4>
                                    <p>{act.character}</p>
                                </div>
                            </Actor>
                        );
                    })}
                </ActorList>
            </Container>
        </Section>) : <div>{response}</div>
        )

    return cast
};

export default Cast;