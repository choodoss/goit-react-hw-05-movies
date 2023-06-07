import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getDataFilm from "../../fetch/getDataFilm";
import { Section } from "../MoveDetails/MoveDetails.styled";
import { Container } from "../FilmLayout/FilmLayout.styled";
import { Review, ReviewsList } from "./Reviews.styled";


const Reviews = () => {
    const [state, setState] = useState([])
    const [responseErr, setResponseErr] = useState('')
    const { filmId } = useParams()

    useEffect(() => {
        getDataFilm(`movie/${filmId}/reviews`)
            .then(({ results }) => {
                console.log(review)
                setState(results)
            }).catch(err => setResponseErr(err.toString()))

    }, [])

    const review =
        <Section>
            <Container>
                <ReviewsList>
                    {state.map((rev, i) => {
                        return (
                            <Review key={rev.id} index={i}>
                                <h4>{rev.author}</h4>
                                <p>{rev.content}</p>
                            </Review>
                        );
                    })}
                </ReviewsList>
            </Container>
        </Section>

    const reviews = (
        <>
            {state.length === 0 && <div>reviews not found</div>}
            {!responseErr && state.length !== 0 ? review : <div>{responseErr}</div>}
        </>);

    return reviews;
};

export default Reviews;



