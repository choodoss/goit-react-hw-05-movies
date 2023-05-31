import { Container } from '../FilmLayout/FilmLayout.styled'
import { Link, LinksList } from './FilmList.styled'
const FilmList = ({ filmList }) => {
    const films =
        <Container>
            <LinksList>
                {filmList.map(film => {
                    return <li key={film.id}><Link to={`/move/${film.id}`}>{film.title ?? film.name}</Link></li>
                })}
            </LinksList>
        </Container>
    return films
};

export default FilmList;